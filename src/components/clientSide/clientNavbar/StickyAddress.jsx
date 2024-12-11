import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { IoCloseCircleOutline, IoMenuSharp } from 'react-icons/io5';
import { TfiMenuAlt } from 'react-icons/tfi';
import { Link, NavLink } from 'react-router-dom';

const StickyAddress = ({ address }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const toggleGalleryDropdown = () => {
        setIsGalleryOpen(!isGalleryOpen);
    };

    const routes = [
        { path: "/", name: "Home" },
        { path: "/packages", name: "Packages" },
        { path: "/about", name: "About" },
        { path: "/contact", name: "Contact" },
        { path: "/gallery", name: "Gallery" }
    ];

    return (
        <div className='bg-blue-500 shadow-xl py-4 lg:py-0 '>

            <div className="flex items-center  ml-4">
                {/* left section  */}
                <div className="bg-purple-700 text-white rounded-l-full  -mr-16 z-30">
                    <p className="text-center text-xl p-5 font-bold">Updates</p>
                </div>
                <div className='flex lg:hidden items-center justify-between bg-white mx-6 p-5 rounded-[100px]'>
                    <Marquee>
                        <p className="text-xl text-center font-bold text-black">
                            {address} <br />
                        </p>
                    </Marquee>
                </div>

            </div>


           




            {/* Drawer for Small Devices */}
            {isDrawerOpen && (
                <div className='fixed inset-0 bg-opacity-50 z-50 lg:hidden'>
                    <div className='absolute left-0 top-16 w-10/12 h-screen bg-green-400 text-white p-4'>
                        <div className="flex justify-end">
                            <button onClick={toggleDrawer} className='text-white'>
                                <IoCloseCircleOutline size={32} />
                            </button>
                        </div>
                        <ul className='mt-4 space-y-2'>
                            {routes.map((route, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={route.path}
                                        onClick={toggleDrawer}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'block px-4 py-2 bg-green-500 text-white rounded-md font-medium'
                                                : 'block px-4 py-2 text-lg text-gray-100 hover:bg-green-600 hover:text-white rounded-md font-medium'
                                        }
                                    >
                                        {route.name}
                                    </NavLink>
                                </li>
                            ))}

                            {/* Additional dropdown for Gallery */}
                            {/* <li>
                                <button onClick={toggleGalleryDropdown} className='w-full text-left text-lg font-medium text-gray-100 hover:bg-green-600 hover:text-white px-4 py-2 rounded-md'>
                                    Gallery
                                </button>
                                {isGalleryOpen && (
                                    <ul className='ml-4 mt-2 space-y-2'>
                                        <li>
                                            <NavLink
                                                to="/gallery/images"
                                                onClick={toggleDrawer}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? 'block px-4 py-2 bg-green-500 text-white rounded-md font-medium'
                                                        : 'block px-4 py-2 text-gray-100 hover:bg-green-600 hover:text-white rounded-md font-medium'
                                                }
                                            >
                                                Img Gallery
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/gallery/videos"
                                                onClick={toggleDrawer}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? 'block px-4 py-2 bg-green-500 text-white rounded-md font-medium'
                                                        : 'block px-4 py-2 text-gray-100 hover:bg-green-600 hover:text-white rounded-md font-medium'
                                                }
                                            >
                                                Video Gallery
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li> */}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StickyAddress;
