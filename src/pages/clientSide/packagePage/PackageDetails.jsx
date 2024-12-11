import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { IoCall } from 'react-icons/io5';
import { MdWifiCalling3 } from 'react-icons/md';

const PackageDetails = () => {
    window.scrollTo(0, 0);
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();

    const { data: pkg = {} } = useQuery({
        queryKey: ['pkg', id], // Add 'id' as a dependency here
        queryFn: async () => {
            const res = await axiosPublic.get(`/package/${id}`);
            return res.data;
        },
        // Enable refetching on route parameter change
        refetchOnWindowFocus: false, // Optional: adjust based on preference
    });

    const { data: allPackages = [] } = useQuery({
        queryKey: ['allPackages'],
        queryFn: async () => {
            const res = await axiosPublic.get('/package');
            return res.data;
        }
    });

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Package Details */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Image Section */}
                    <div className="w-full h-64 lg:h-96 overflow-hidden">
                        <img className="w-full h-full object-cover" src={pkg?.ImageUrl} alt={pkg?.title} />
                    </div>

                    {/* Details Section */}
                    <div className="p-4 md:p-10">
                        {/* Title and Rating */}
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{pkg?.title}</h2>
                        <div className="flex items-center text-yellow-500 mb-4">
                            {Array.from({ length: Math.floor(pkg?.rating) }, (_, i) => (
                                <span key={i}>⭐</span>
                            ))}
                            <span className="text-gray-500 ml-2">({pkg?.rating})</span>
                        </div>

                        <div>
                            <h1 className='flex items-center text-3xl font-bold mb-3 gap-2 ' > <span> <MdWifiCalling3 className='text-3xl' /> </span> Contact Now : 01312742062</h1>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 text-base md:text-lg mb-6">
                            Enjoy a relaxing {pkg?.title} session tailored to your needs, designed to provide complete relaxation and rejuvenation. {pkg?.description}
                        </p>

                        {/* Duration and Pricing Options */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Choose Duration</h3>
                            <ul className="space-y-3">
                                {pkg?.durations?.map((duration, index) => (
                                    <li key={index} className="flex justify-between items-center text-gray-700">
                                        <span className="text-lg text-black">{duration?.time} Minutes</span>
                                        <span className="text-lg font-bold text-[#2563EB]">{duration?.price} Tk</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Book Now Button */}
                        <div className="mt-8">
                            <button className="bg-[#2563EB] text-white py-3 px-6 rounded-lg text-lg w-full md:w-auto">
                                <Link to={`/book-now/${pkg._id}`}>
                                    Book Now
                                </Link>
                            </button>
                        </div>
                        {/* <div><h2 className="text-xl md:text-xl font-bold mt-4 text-[#2563eb] mb-2">More details {pkg?.title} packages contact 01312742062 this number </h2></div> */}
                    </div>
                </div>

                {/* Similar Packages Section */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Similar Packages</h3>
                    <div className="space-y-4">
                        {allPackages?.map((similarPkg) => (
                            <Link to={`/package-details/${similarPkg?._id}`} key={similarPkg?._id}>
                                <div className="flex items-center space-x-4 my-2">
                                    <img className="w-16 h-16 rounded object-cover" src={similarPkg?.ImageUrl} alt={similarPkg.title} />
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800">{similarPkg?.title}</h4>
                                        <div className="flex items-center text-yellow-500">
                                            {Array.from({ length: Math.floor(similarPkg?.rating) }, (_, i) => (
                                                <span key={i}>⭐</span>
                                            ))}
                                            <span className="text-gray-500 ml-2">({similarPkg?.rating})</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;
