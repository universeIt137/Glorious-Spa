import React, { useEffect } from "react";
import { FaPhoneAlt, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactTwo = () => {


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
                <h1 className="text-[#D110B7] lg:text-5xl text-3xl font-bold lg:my-5 my-3">
                    Contact <span className="text-blue-400">us!!</span>
                </h1>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed my-4">
                    Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.
                    Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 mt-8">
                {/* Call Us Section */}
                <div className="flex items-center bg-pink-500 rounded-lg shadow-lg text-white">
                    <div className="bg-purple-900 p-4 flex items-center justify-center rounded-l-lg">
                        <FaPhoneAlt className="text-2xl" aria-label="Phone Icon" />
                    </div>
                    <div className="p-4">
                        <h2 className="text-lg font-bold">Call Us</h2>
                        <p className="text-sm">01312742062</p>
                    </div>
                </div>

                {/* Address Section */}
                <div className="flex items-center bg-pink-500 rounded-lg shadow-lg text-white">
                    <div className="bg-purple-900 p-4 flex items-center justify-center rounded-l-lg">
                        <FaHome className="text-2xl" aria-label="Home Icon" />
                    </div>
                    <div className="p-4">
                        <h2 className="text-lg font-bold">Address</h2>
                        <p className="text-sm">Gulshan 2, Road Number 44</p>
                    </div>
                </div>

                {/* Address Section */}
                <div className="flex items-center bg-pink-500 rounded-lg shadow-lg text-white">
                    <div className="bg-purple-900 p-4 flex items-center justify-center rounded-l-lg">
                        <MdEmail className="text-2xl" aria-label="Home Icon" />
                    </div>
                    <div className="p-4">
                        <h2 className="text-lg font-bold">Email</h2>
                        <p className="text-sm">mdhasibhowlader828@gmail.com</p>

                    </div>
                </div>
            </div>

            {/* Google Map Section */}


            {/* Google Map */}
            <div className=" hover:scale-105 transition-transform duration-300  ease-out w-full flex my-5 items-center justify-center ">
                <iframe
                    className="w-full h-[250px] lg:h-[320px] rounded-lg shadow-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14603.550514449464!2d90.39742741343842!3d23.787015538537563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7001fdf29f1%3A0xfbc6d012e19b492e!2sGulshan%20Glow%20Thai%20Spa!5e0!3m2!1sen!2sbd!4v1733045842456!5m2!1sen!2sbd"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactTwo;
