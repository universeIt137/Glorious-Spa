import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Package = () => {
    const [startIndex, setStartIndex] = useState(0);
    const axiosPublic = useAxiosPublic();

    // Fetch packages using React Query
    const { data: services = [], isLoading, isError } = useQuery({
        queryKey: ["all packages"],
        queryFn: async () => {
            const res = await axiosPublic.get("package");
            return res.data;
        },
    });

    // Slider navigation logic
    const handlePrev = () => {
        setStartIndex((prevIndex) =>
            prevIndex === 0 ? services.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % services.length);
    };

    // Automatically slide every 4 seconds
    useEffect(() => {
        if (services.length > 0) {
            const interval = setInterval(() => {
                handleNext();
            }, 4000);

            return () => clearInterval(interval); // Cleanup interval on component unmount
        }
    }, [services.length]);

    // Get visible services for the current slider position
    const visibleServices = [...services, ...services].slice(
        startIndex,
        startIndex + 4
    );

    // Render content conditionally without breaking Rules of Hooks
    if (isLoading) {
        return <p className="text-center text-white">Loading packages...</p>;
    }

    if (isError) {
        return (
            <p className="text-center text-white">
                Failed to load packages. Please try again later.
            </p>
        );
    }

    if (services.length === 0) {
        return <p className="text-center text-white">No packages available.</p>;
    }

    return (
        <div
            className="bg-cover bg-center bg-no-repeat my-12 lg:my-24 text-white min-h-screen"
            style={{
                backgroundImage:
                    "url('https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732782998/spa-banner-4_ebpujd.png')",
            }}
        >
            <div className="w-11/12 mx-auto">
                <h1 className="text-white z-30 text-center lg:text-4xl font-bold py-6 lg:py-8">
                    Let's Choose Your Desire Package
                </h1>
                <div className="relative flex items-center">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 bg-[#2563EB] text-white p-2 rounded-full  z-10"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Cards */}
                    <div className="flex lg:grid lg:grid-cols-4 gap-4 w-full mx-8 overflow-hidden">
                        {visibleServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-md shadow-lg text-black transform transition-transform duration-300 hover:scale-105 flex-shrink-0 w-full sm:w-[calc(100%/2)] lg:w-auto"
                            >
                                <img
                                    src={service.ImageUrl}
                                    alt={service.title}
                                    className="w-full h-32 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-lg font-bold text-center mb-2">{service.title}</h3>
                                <div className="space-y-1">
                                    {service.durations.map((price, idx) => (
                                        <p key={idx} className="text-xl flex items-center justify-between  ">
                                            {price.time} Minutes <span className="flex items-center " >{price.price} <img className="w-4"  src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1733050377/money_b7aits.png" alt="" /> </span>
                                        </p>
                                    ))}
                                </div>
                                <Link to={`/package-details/${service?._id}`}> <button className="mt-4 w-full bg-[#2563EB] text-lg font-semibold text-white py-2 rounded-md ">
                                    Details
                                </button> </Link>
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="absolute right-0 bg-[#2563EB] text-white p-2 rounded-full  z-10"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Package;
