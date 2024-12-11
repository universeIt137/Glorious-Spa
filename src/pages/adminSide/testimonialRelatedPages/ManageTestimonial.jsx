import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { uploadImg } from '../../../uploadFile/uploadImg';
import { Helmet } from 'react-helmet-async';

const ManageTestimonial = () => {
    const [loading, setLoading] = useState(false);

    const axiosPublic = useAxiosPublic();
    const { data: testimonials = [], refetch } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await axiosPublic.get('/testimonial');
            return res.data;
        }
    })


    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const name = form.name.value;
        const testimonial = form.testimonial.value;
        const image = form.image.files[0];

        let photo = '';
        if (!image?.name) {
            photo = "";
        } else {
            photo = await uploadImg(image);
        }

        const data = { name, testimonial, photo };
        axiosPublic.post('/testimonial', data)
            .then(res => {
                if (res) {
                    Swal.fire({
                        title: 'Added!',
                        text: 'Testimonial data has been added.',
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
                    .delete(`/testimonial/${id}`)
                    .then((res) => {
                        if (res) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Testimonial data has been deleted.',
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
                <title>Dashboard | Manage Testimonial</title>
            </Helmet>
            <p className="text-2xl font-bold text-center">Add Testimonials</p>
            <form onSubmit={handleSubmit} className="space-y-4">


                <div className="w-1/2 mx-auto border p-3 rounded-lg bg-white shadow-lg gap-4">
                    <div className="">
                        <label htmlFor="name"> Name</label>
                        <input type="text" name="name" className="w-full px-4 py-2 border rounded-md" />
                    </div>



                    <div className="">
                        <label htmlFor="name">Testimonial</label>
                        <textarea rows={9} type="text" name="testimonial" className="w-full px-4 py-2 border rounded-md" ></textarea>
                    </div>


                    {/* Image Upload */}
                    <div className="p-2 w-full">
                        <div className="relative">
                            <label className="leading-7 text-sm text-gray-600 font-bold">Image</label><br />
                            <input type="file" name='image' className="file-input file-input-bordered file-input-md w-full " />
                        </div>
                    </div>





                </div>

                <div className="w-1/4 mx-auto">
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
                        {loading ? "Uploading..." : "Submit"}
                    </button>
                </div>
            </form>

            <div className="overflow-x-auto mt-10">
                <p className="text-2xl font-bold text-center">Manage Testimonials</p>

                <table className="min-w-full bg-white border border-gray-200 shadow-md">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">Name</th>
                            <th className="px-4 py-2 border-b">Message</th>
                            <th className="px-4 py-2 border-b">Image</th>

                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testimonials?.map((testimonial, index) => (
                            <tr key={testimonial?._id} className="hover:bg-gray-100 text-center">
                                <td className="px-4 py-2 border-b">
                                    <div>
                                        <p className="font-semibold">{testimonial?.name}</p>

                                    </div>
                                </td>
                                <td className="px-4 py-2 border-b">
                                    <div>
                                        <p className="font-semibold">{testimonial?.testimonial}</p>
                                    </div>
                                </td>

                                <td className="px-4 py-2 border-b">
                                    <div className="avatar">
                                        <div className="w-8 rounded">
                                            <img src={testimonial?.photo} />
                                        </div>
                                    </div>
                                </td>


                                <td className="px-4 py-2 border-b text-center">

                                    <button onClick={() => handleDelete(testimonial?._id)} className="px-3 py-1 bg-red-500 text-white rounded-md mx-1">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageTestimonial;