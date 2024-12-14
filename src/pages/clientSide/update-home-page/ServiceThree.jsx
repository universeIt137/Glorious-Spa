import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const ServiceThree = () => {


    const axiosPublic = useAxiosPublic();

    // Fetch packages using React Query
    const { data: services = [], isLoading, isError } = useQuery({
        queryKey: ["massages"],
        queryFn: async () => {
            const res = await axiosPublic.get("/package-slider");
            return res.data;
        },
    });




    const [currentIndex, setCurrentIndex] = useState(1); // Start at the first actual slide
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    useEffect(() => {
        if (currentIndex === services.length + 1) {
            setTimeout(() => {
                setCurrentIndex(1);
                setIsAnimating(false);
            }, 500);
        } else if (currentIndex === 0) {
            setTimeout(() => {
                setCurrentIndex(services.length);
                setIsAnimating(false);
            }, 500);
        } else {
            setTimeout(() => setIsAnimating(false), 500);
        }
    }, [currentIndex]);

    const getSlides = () => [
        services[services.length - 1], // Clone last slide
        ...services,
        services[0], // Clone first slide
    ];

    const slides = getSlides();

    return (
        <div
            className="min-h-screen bg-cover bg-center text-white"
            style={{
                height:"100%",
                backgroundImage: "url('https://res.cloudinary.com/dnvmj9pvk/image/upload/v1734151244/g-1_vhv3u9.png')",
            }}
        >
            <div className="my-5 w-11/12 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="lg:space-y-6 text-left">
                        <h1 className="lg:text-4xl font-bold text-white">
                            Unwind and Renew Your Body and Mind with Our Best Packages
                        </h1>
                        <p className="lg:text-lg text-[11px] text-gray-200">
                            Indulge in the ultimate relaxation and wellness experience...
                        </p>
                        <Link to={`/packages`}>
                            <button className="lg:px-6 px-3 py-2 lg:text-[16px] text-[12px] lg:py-3 mt-2 bg-[#6C1F1F] rounded-lg">
                                View all Services
                            </button>
                        </Link>
                    </div>
                    <div className="relative w-full overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {services && slides?.map((service, index) => (
                                <div
                                    key={index}
                                    className="min-w-full flex flex-col items-center text-center"
                                >
                                    <img
                                        src={service?.image}
                                        alt={service?.title}
                                        className="w-full h-64 mt-10 object-cover"
                                    />
                                    <h3 className="text-xl font-bold mt-4">{service?.title}</h3>
                                    <p className="mt-2">{service?.description}</p>
                                    <p className="mt-1">{service?.priceRange}</p>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={prevSlide}
                            className="absolute top-[130px] left-2 bg-[#6C1F1F] text-white px-4 py-3 rounded-full"
                        >
                            {"<"}
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-[130px] right-2 bg-[#6C1F1F] text-white px-4 py-3 rounded-full"
                        >
                            {">"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceThree;
