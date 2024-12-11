import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ManageBooking = () => {
    const axiosPublic = useAxiosPublic();
    const [isLoading, setIsLoading] = useState(false);
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosPublic.get('/booking');
            return res.data;
        }
    })


    const handleStatus = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won’t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, update it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                setIsLoading(true);
                axiosPublic
                    .patch(`/booking/${id}`)
                    .then((res) => {
                        if (res) {
                            Swal.fire({
                                title: 'Status updated!',
                                text: 'Booking payment confirmed.',
                                icon: 'success',
                            });
                            refetch();
                        }
                        setIsLoading(false);
                    })
                    .catch((err) => {
                        console.log(err);
                        setIsLoading(false);
                    });
            }
        });
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
                setIsLoading(true);
                axiosPublic
                    .delete(`/booking/${id}`)
                    .then((res) => {
                        if (res) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Booking data has been deleted.',
                                icon: 'success',
                            });
                            refetch();
                        }
                        setIsLoading(false);
                    })
                    .catch((err) => {
                        console.log(err);
                        setIsLoading(false);
                    });
            }
        });
    };

    return (
        <div>
            <Helmet>
                <title>Dashboard | Manage Booking</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-md">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">Booking ID</th>
                            <th className="px-4 py-2 border-b">Customer</th>
                            <th className="px-4 py-2 border-b">Package</th>

                            <th className="px-4 py-2 border-b">Payment Status</th>
                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={booking._id} className="hover:bg-gray-100 text-center">
                                <td className="px-4 py-2 border-b">{index + 1}</td>
                                <td className="px-4 py-2 border-b">
                                    <div>
                                        <p className="font-semibold">{booking?.name}</p>
                                        <p className="text-sm text-gray-600">{booking?.phone}</p>
                                    </div>
                                </td>
                                <td className="px-4 py-2 border-b">
                                    <div>
                                        <p className="font-semibold">{booking?.packageName}</p>
                                    </div>
                                </td>

                                <td className="px-4 py-2 border-b">
                                    <span className={`px-2 py-1 rounded text-white ${booking?.status === "paid" ? "bg-green-500" : "bg-red-500"}`}>
                                        {
                                            booking?.status ? 'Paid' : 'Not Paid'
                                        }
                                    </span>
                                </td>
                                <td className="px-4 py-2 border-b text-center">
                                    <button onClick={() => handleStatus(booking?._id)} className="px-3 py-1 bg-yellow-500 text-white rounded-md mx-1">Update Status</button>
                                    <button onClick={() => handleDelete(booking?._id)} className="px-3 py-1 bg-red-500 text-white rounded-md mx-1">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBooking;