import React, { useEffect, useState } from 'react';
import { IoCloseCircleOutline, IoMenuSharp } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const MobileNavbar = ({ address }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false); // State for closing animation
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    const toggleDrawer = () => {
        if (isDrawerOpen) {
            // Trigger closing animation before closing the drawer
            setIsClosing(true);
            setTimeout(() => {
                setIsDrawerOpen(false);
                setIsClosing(false); // Reset closing state
            }, 500); // Match animation duration
        } else {
            setIsDrawerOpen(true);
        }
    };

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);

    const toggleGalleryDropdown = () => {
        setIsGalleryOpen(!isGalleryOpen);
    };

    const routes = [
        { path: "/", name: "Home" },
        { path: "/packages", name: "Service" },
        { path: "/about", name: "About" },
        { path: "/contact", name: "Contact" },
        { path: "/gallery", name: "Gallery" }
    ];

    return (
        <div className='bg-white shadow-xl py-4 lg:py-0 px-4'>
            <div className='flex lg:hidden items-center justify-between'>

                {/* Toggle Button for Mobile Devices */}
                <div className="relative inline-flex items-center justify-center">
                    {/* Spinner */}
                    <span
                        className="loading loading-ring absolute text-blue-900"
                        style={{ width: "80px", height: "80px" }} // Adjust size here
                    ></span>

                    {/* Button */}
                    <button
                        onClick={toggleDrawer}
                        className="text-blue-600 bg-gray-200 p-3 rounded-full z-20 relative"
                    >
                        <IoMenuSharp size={24} className="font-bold" />
                    </button>
                </div>

                {/* Logo */}
                <div className='bg-white rounded-full p-1'>
                    <Link className='lg:hidden' to={`/`}>
                        <img
                            className='w-56'
                            src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1733206857/smart-beauty-spa-logo_r1nrfj.png"
                            alt=""
                        />
                    </Link>
                </div>
            </div>

            {/* Drawer for Small Devices */}
            {isDrawerOpen && (
                <div
                    data-aos={isClosing ? "fade-up" : "fade-down"} // Apply closing or opening animation
                    className='fixed inset-0 bg-opacity-50 z-50 lg:hidden'
                >
                    <div className='absolute left-0 top-0 w-full h-screen bg-blue-700 text-white p-4'>
                        <div className="flex justify-end">
                            <button onClick={toggleDrawer} className='text-white'>
                                <IoCloseCircleOutline size={32} />
                            </button>
                        </div>
                        <ul className='mt-4 space-y-2 text-center'>
                            {routes.map((route, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={route.path}
                                        onClick={toggleDrawer}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'block px-4 py-2 underline underline-offset-4 text-white rounded-md font-medium'
                                                : 'block px-4 py-2 text-lg text-gray-100 hover:bg-green-600 hover:text-white rounded-md font-medium'
                                        }
                                    >
                                        {route.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileNavbar;
