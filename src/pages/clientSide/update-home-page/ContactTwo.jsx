import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { FaPhoneAlt, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ContactTwo = () => {
    
    const axiosPublic = useAxiosPublic();
    const { data: webData = {} } = useQuery({
        queryKey: ['webData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/homepageContent');
            return res.data[0];
        }
    })

    console.log(webData);


    return (
        <div className="w-11/12 mx-auto lg:mt-24 mt-16 mb-5  ">
            {/* Header Section */}
            <div className="text-center">
                <div>
                    <img
                        className="block mx-auto w-[25vh]"
                        src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732786454/service-details_urhfdi.png"
                        alt="Header Icon"
                    />
                </div>
                <h1 className="text-[#6c1f1f] lg:text-5xl text-3xl font-bold lg:my-5 my-3">
                    Contact <span className="text-[#ef4444]">us!!</span>
                </h1>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed my-4">
                    Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.
                    Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 mt-8">
                {/* Call Us Section */}
                <div className="flex items-center bg-[#6c1f1f] rounded-lg shadow-lg text-white">
                    <div className="bg-[#ef4444]  p-4 flex items-center justify-center rounded-l-lg">
                        <FaPhoneAlt className="text-2xl" aria-label="Phone Icon" />
                    </div>
                    <div className="p-4">
                        <h2 className="text-lg font-bold">Call Us</h2>
                        <p className="text-sm">{webData?.phone}</p>
                    </div>
                </div>

                {/* Address Section */}
                <div className="flex items-center bg-[#6c1f1f] rounded-lg shadow-lg text-white">
                    <div className="bg-[#ef4444] p-4 flex items-center justify-center rounded-l-lg">
                        <FaHome className="text-2xl" aria-label="Home Icon" />
                    </div>
                    <div className="p-4">
                        <h2 className="text-lg font-bold">Address</h2>
                        <p className="text-sm"> { webData?.address } </p>
                    </div>
                </div>

                {/* Address Section */}
                <div className="flex items-center bg-[#6c1f1f] rounded-lg shadow-lg text-white">
                    <div className="bg-[#ef4444] p-4 flex items-center justify-center rounded-l-lg">
                        <MdEmail className="text-2xl" aria-label="Home Icon" />
                    </div>
                    <div className="p-4">
                        <h2 className="text-lg font-bold">Email</h2>
                        <p className="text-sm"> { webData?.email } </p>

                    </div>
                </div>
            </div>

            {/* Google Map Section */}


            {/* Google Map */}
            <div className=" hover:scale-105 transition-transform duration-300  ease-out w-full flex my-5 items-center justify-center ">
                <iframe
                    className="w-full h-[250px] lg:h-[320px] rounded-lg shadow-lg"
                    src={ webData?.google_map }
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactTwo;
