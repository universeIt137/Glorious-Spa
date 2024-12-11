import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageBanner = () => {
    window.scrollTo(0, 0);

    const axiosPublic = useAxiosPublic();

    // Fetch banners using React Query
    const {
        data: banners = [],
        isLoading,
        isError,
        refetch,
    } = useQuery({
        queryKey: ["banner"],

        queryFn: async () => {
            const res = await axiosPublic.get("/banner");
            return res.data;
        },
    });

    const handleDelete = (id) => {
        console.log(id)
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
                    .delete(`/banner/${id}`)
                    .then((res) => {
                        if (res) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Banner data has been deleted.',
                                icon: 'success',
                            });
                            refetch();
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        });
    };

    // Display loading state
    if (isLoading) {
        return <p>Loading banners...</p>;
    }

    // Display error state
    if (isError) {
        return <p>Failed to load banners. Please try again later.</p>;
    }

    return (
        <div>
            <Helmet>
                <title>Dashboard | Manage Banners</title>
            </Helmet>
            <div className="overflow-x-auto">
                <h1 className="lg:text-4xl text-center text-black font-bold py-4">
                    Manage Banner
                </h1>
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                                Banner Img
                            </th>
                            <th className="px-6 py-3 text-center text-sm font-medium text-gray-700 uppercase">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {banners.map((item, i) => (
                            <tr key={i} className="border-t border-gray-200">
                                {/* Banner Image */}
                                <td className="px-6 py-4">
                                    <img
                                        src={item?.bannerImg}
                                        alt={`Banner ${i + 1}`}
                                        className="w-20 h-12 object-cover rounded-lg"
                                    />
                                </td>
                                {/* Actions */}
                                <td className="px-6  mx-auto flex justify-center  py-4">
                                    <Link to={`/dashboard/banner-update/${item?._id}`}>
                                        <button
                                            className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
                                        >
                                            Edit
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => { handleDelete(item?._id) }}
                                        className="ml-2 px-3 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBanner;
