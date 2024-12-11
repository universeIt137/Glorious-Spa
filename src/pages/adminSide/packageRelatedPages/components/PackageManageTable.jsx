import React, { useState } from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const PackageManageTable = ({ packages }) => {

    const axiosPublic = useAxiosPublic();
    const [isLoading, setIsLoading] = useState(false);


    const { data: allPackages = [], refetch } = useQuery({
        queryKey: ['allPackages'],
        queryFn: async () => {
            const res = await axiosPublic('/package');
            return res.data;
        }
    })

    console.log(allPackages);

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
                    .delete(`/package/${id}`)
                    .then((res) => {
                        if (res) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Package data has been deleted.',
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
        <div className="container mx-auto py-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Manage Spa Packages</h2>
            <div className="overflow-auto bg-white shadow-md rounded-lg">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-3 px-5 text-left text-gray-700 font-semibold">Image</th>
                            <th className="py-3 px-5 text-left text-gray-700 font-semibold">Title</th>
                            <th className="py-3 px-5 text-left text-gray-700 font-semibold">Description</th>
                            <th className="py-3 px-5 text-left text-gray-700 font-semibold">Rating</th>
                            <th className="py-3 px-5 text-left text-gray-700 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allPackages?.map(singlePackage =>
                                <tr key={singlePackage._id} className="border-b border-gray-200">
                                    {/* singlePackage Image */}
                                    <td className="py-4 px-5">
                                        <img src={singlePackage.ImageUrl} alt={singlePackage.title} className="w-20 h-20 object-cover rounded" />
                                    </td>
                                    {/* singlePackage Title */}
                                    <td className="py-4 px-5">{singlePackage.title}</td>
                                    {/* singlePackage Description */}
                                    <td className="py-4 px-5 text-gray-600">{singlePackage.description}</td>
                                    {/* singlePackage Rating */}
                                    <td className="py-4 px-5 text-yellow-500">{singlePackage.rating} ⭐</td>
                                    {/* Package Durations */}

                                    {/* Action Buttons */}
                                    <td className="py-4 px-5 flex items-center justify-center gap-4">
                                        <button

                                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                                        >
                                            <Link to={`/dashboard/update-package/${singlePackage?._id}`}>
                                                Update
                                            </Link>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(singlePackage._id)}
                                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PackageManageTable;
