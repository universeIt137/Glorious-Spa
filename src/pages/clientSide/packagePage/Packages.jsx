import React from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';



const PackageCard = ({ pkg }) => {
    return (
        <div className="max-w-sm   rounded overflow-hidden shadow-lg flex flex-col justify-between border">
            <div className="h-20 lg:h-40 w-full overflow-hidden">
                <img className="w-full h-full bg-cover" src={pkg.ImageUrl} alt={pkg.title} />
            </div>
            <div className="px-2 lg:px-6 py-4">
                <div className="font-bold lg:text-xl lg:mb-2">{pkg.title}</div>
                <p className="text-gray-700 text-base line-clamp-3">
                    <div className="text-yellow-500 lg:mb-2">
                        {Array.from({ length: Math.floor(pkg.rating) }, (_, i) => (
                            <span key={i}>⭐</span>
                        ))}
                        <span className="text-gray-500 ml-2">({pkg.rating})</span>
                    </div>
                </p>

                {/* Duration and Price List */}
                <ul className="my-4">
                    {pkg.durations.map((duration, index) => (
                        <li key={index} className="flex justify-between text-gray-700 mb-1">
                            <span className="text-green-600">{duration.time}</span>
                            <span className="text-red-500 font-bold">{duration.price}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="lg:px-6 px-2 space-y-2 lg:pt-4 lg:pb-10 pb-2 lg:flex gap-4">

                <button className="mt-auto bg-pink-500 text-white py-2 px-4 rounded-lg w-full">
                    <Link to={`/package-details/${pkg?._id}`}>
                        See Details
                    </Link>
                </button>


                <button className="mt-auto bg-pink-500 text-white py-2 px-4 rounded-lg w-full">
                    <Link to={`/book-now/${pkg._id}`}>
                        Book Now
                    </Link>
                </button>
            </div>
        </div>
    );
};


const Packages = () => {

    const axiosPublic = useAxiosPublic();

    const { data: packages = [] } = useQuery({
        queryKey: ['all packages'],
        queryFn: async () => {
            const res = await axiosPublic.get('package');
            return res.data;
        }
    })
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Packages</h2>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4  w-11/12 mx-auto">
                {packages.map(pkg => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                ))}
            </div>
        </div>
    );
};

export default Packages;
