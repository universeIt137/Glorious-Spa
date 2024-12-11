import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ManageOfficeHour = () => {
    const [loading, setLoading] = useState(false);

    const axiosPublic = useAxiosPublic();
    const { data: allDate = [], refetch } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await axiosPublic.get('/office-hour');
            return res.data;
        }
    })

    console.log(allDate)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const day = form.day.value;
        const time = form.time.value;
        const data = { day, time };
        axiosPublic.post('/office-hour', data)
            .then(res => {
                if (res) {
                    Swal.fire({
                        title: 'Added!',
                        text: 'Office Hour data has been added.',
                        icon: 'success',
                    });
                    refetch();
                    form.reset();
                    setLoading(false);
                }
            })
            .catch(err => {
            console.log(err.messge)
        })


    }



    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won’t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic
                    .delete(`/office-hour/${id}`)
                    .then((res) => {
                        if (res) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Office Hour data has been deleted.',
                                icon: 'success',
                            });
                           
                            refetch();
                        }
                        setLoading(false);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        });
    };

    return (
        <div>
            <Helmet>
                <title>Dashboard | Manage Office Hour</title>
            </Helmet>
            <p className="text-2xl font-bold text-center">Add Office Hour</p>
            <form onSubmit={handleSubmit} className="space-y-4">
               

                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="">
                        <label htmlFor="name">Day's Name</label>
                        <input type="text" name="day" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div className="">
                        <label htmlFor="name">Office time</label>
                        <input type="text" name="time" className="w-full px-4 py-2 border rounded-md" />
                    </div>





                </div>

                <div className="w-1/4 mx-auto">
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
                        {loading ? "Uploading..." : "Submit"}
                    </button>
                </div>
            </form>

            <div className="overflow-x-auto mt-10">
                <p className="text-2xl font-bold text-center">Manage Office Hour</p>

                <table className="min-w-full bg-white border border-gray-200 shadow-md">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">Day</th>
                            <th className="px-4 py-2 border-b">Time</th>

                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allDate?.map((date, index) => (
                            <tr key={date._id} className="hover:bg-gray-100 text-center">
                                <td className="px-4 py-2 border-b">
                                    <div>
                                        <p className="font-semibold">{date?.day}</p>

                                    </div>
                                </td>
                                <td className="px-4 py-2 border-b">
                                    <div>
                                        <p className="font-semibold">{date?.time}</p>
                                    </div>
                                </td>


                                <td className="px-4 py-2 border-b text-center">

                                    <button onClick={() => handleDelete(date?._id)} className="px-3 py-1 bg-red-500 text-white rounded-md mx-1">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOfficeHour;