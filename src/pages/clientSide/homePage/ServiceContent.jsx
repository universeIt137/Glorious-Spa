import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { FcApproval } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const ServiceContent = ({ pkg, reverse }) => {
    const axiosPublic = useAxiosPublic();
    const { data: content = [] } = useQuery({
        queryKey: ['content'],
        queryFn: async () => {
            const res = await axiosPublic.get('/homepageContent');
            return res.data[0];
        }
    })

    const { whatsapp } = content;
    return (
        <div>
            {/* Service Content Section */}
            <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}  items-center justify-center mt-8 w-10/12  mx-auto `}>
                {/* Image Section */}
                <div className="w-full  flex justify-center md:justify-end mb-6 md:mb-0">
                    <div className="relative  w-72 h-72 lg:w-[600px] lg:h-96 rounded-full overflow-hidden border-4 border-red-500">
                        <img
                            src={pkg?.ImageUrl}  // Replace with actual image URL
                            alt="Massage Service"
                            className="w-full h-full  object-cover"
                        />
                    </div>
                </div>

                {/* Details Section */}
                <div className="w-full  flex flex-col items-center md:items-start px-4 text-center md:text-left">
                    <div className="mx-auto">
                        <h3 className="text-3xl font-bold text-center">{pkg?.title}</h3>
                        <div className="flex items-center mt-2 gap-2">

                            <div className="text-yellow-500 lg:mb-2">
                                <span className="text-gray-500 ml-2">({pkg.rating})</span>
                                {Array.from({ length: Math.floor(pkg.rating) }, (_, i) => (
                                    <span key={i}>⭐</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Package Options */}
                    <div className="mt-4 w-full bg-white shadow-md rounded-lg text-lg md:text-xl">

                        {pkg?.durations?.map((duration, index) => (
                            <>
                                

                                <div className="flex justify-between p-3 border-b">
                                    <span className="flex items-center text-green-600 font-semibold gap-2">
                                        <FcApproval /> {duration.time} Minutes
                                    </span>
                                    <span className="text-red-600 font-bold">{duration.price} TK</span>
                                </div>
                            </>
                        ))}




                    </div>

                    {/* Book Now Button */}
                    <div className="mx-auto flex gap-4">
                        <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-pink-500 text-white font-bold rounded-xl shadow-md hover:bg-pink-600 transition duration-300">
                            <Link to={`/book-now/${pkg._id}`}>
                                Book Now
                            </Link>

                        </button>

                        <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-pink-500 text-white font-bold rounded-xl shadow-md hover:bg-pink-600 transition duration-300">
                            <a
                                href={`https://wa.me/+88${whatsapp}`}
                                className="text-white flex items-center gap-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MdOutlinePhoneInTalk /> WhatsApp
                            </a>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceContent;