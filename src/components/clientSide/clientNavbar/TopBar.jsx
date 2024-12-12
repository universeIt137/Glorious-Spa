import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn, MdAccessTime } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TopBar = ({address, phone}) => {
    return (
        <div>
            <div className="w-full hidden lg:block bg-white border-b border-gray-200">
                <div className="container  mx-auto flex flex-wrap justify-between items-center px-4 py-3">
                    {/* Logo */}
                    <Link to={`/`} className="hidden lg:flex">

                        <img
                            className="w-56"
                            src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1733913897/glorious_odbtow.png"
                            alt="Logo"
                        />
                    </Link>

                    {/* Contact Information */}
                    <div className="flex justify-center md:justify-end items-center space-x-8 mt-2 w-full md:w-auto">
                        {/* Address Section */}
                        <div className="flex items-center space-x-2">
                            <MdLocationOn className="text-[#EF4444] w-6 h-6" />
                            <div>
                                <p className="text-base text-gray-800 font-medium">{ address }</p>
                                <p className="text-sm text-gray-500">Visit Us</p>
                            </div>
                        </div>
                        {/* Phone Section */}
                        <div className="flex items-center space-x-2">
                            <FaPhoneAlt className="text-[#EF4444] w-5 h-5" />
                            <div>
                                <p className="text-base text-gray-800 font-medium">{phone}</p>
                                <p className="text-sm text-gray-500">Call Us</p>
                            </div>
                        </div>
                        {/* Schedule Section */}
                        <div className="flex items-center space-x-2">
                            <MdAccessTime className="text-[#EF4444] w-6 h-6" />
                            <div>
                                <p className="text-base text-gray-800 font-medium">Sat - Fri: 10am-10pm</p>
                                <p className="text-sm text-gray-500">Open</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
