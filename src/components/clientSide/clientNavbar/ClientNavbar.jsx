import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const ClientNavbar = ({name, logoImageUrl}) => {

    const routes = [
        { path: "/", name: "Home" },
        { path: "/packages", name: "Packages" },
        { path: "/about", name: "About" },
        { path: "/contact", name: "Contact" },
        { path: "/gallery", name: "Gallery" }
    ];



    return (
        <div className="shadow-md bg-white hidden lg:block border">
            <nav className="flex items-center justify-between p-4 w-11/12 mx-auto">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <img
                        src={logoImageUrl} // Replace with the path to your logo image
                        alt="Logo"
                        className="h-8 w-8"
                    />
                    <h1 className="text-2xl font-bold text-black custom-animated-underline">
                        <Link to={'/'}>{name}</Link>
                    </h1>
                </div>

                {/* Nav Links */}
                <div className="flex space-x-6 items-center">
                    {routes.map((route, index) => (
                        <NavLink
                            key={index}
                            to={route.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white px-3 py-2 bg-green-500 rounded-md font-medium"
                                    : "text-gray-700 hover:text-white hover:bg-green-500 px-3 py-2 rounded-md font-medium"
                            }
                        >
                            {route.name}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default ClientNavbar;