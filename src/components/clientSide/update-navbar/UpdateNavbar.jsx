import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const UpdateNavbar = () => {
    return (
        <div className='hidden lg:block' >
            {/* Top Header Section */}


            {/* Navbar Section */}
            <div className="bg-blue-600  w-full">
                <div className="container mx-auto flex items-center justify-between px-4 py-2">
                    {/* Navigation Links */}
                    <div className="flex space-x-8">
                        <NavLink
                            to="/"
                            className="text-white font-medium hover:bg-pink-600 px-3 py-2 rounded-md transition"
                        >
                            HOME
                        </NavLink>
                        <NavLink
                            to="/packages"
                            className="text-white font-medium hover:bg-pink-600 px-3 py-2 rounded-md transition"
                        >
                            PACKAGES
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="text-white font-medium hover:bg-pink-600 px-3 py-2 rounded-md transition"
                        >
                            ABOUT
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="text-white font-medium hover:bg-pink-600 px-3 py-2 rounded-md transition"
                        >
                            CONTACT
                        </NavLink>
                        <NavLink
                            to="/gallery"
                            className="text-white font-medium hover:bg-pink-600 px-3 py-2 rounded-md transition"
                        >
                            GALLERY
                        </NavLink>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 text-white">
                        <a
                            href="https://www.facebook.com/profile.php?id=61551431156331"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-pink-600"
                        >
                            <FaFacebookF className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-pink-600">
                            <FaInstagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-pink-600">
                            <FaTwitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-pink-600">
                            <FaYoutube className="w-5 h-5" />
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default UpdateNavbar;
