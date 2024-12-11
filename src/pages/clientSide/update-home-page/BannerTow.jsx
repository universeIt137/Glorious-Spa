import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Button2 from "../../../components/clientSide/animation-button/Button2";

const BannerTow = () => {
    const axiosPublic = useAxiosPublic();
    const [currentIndex, setCurrentIndex] = useState(0);

    const { data: carouselItems = [] } = useQuery({
        queryKey: ['carouselItems'],
        queryFn: async () => {
            const res = await axiosPublic.get('/banner');
            return res.data;
        }
    });

    const { data: bannerText = [] } = useQuery({
        queryKey: ['bannerText'],
        queryFn: async () => {
            const res = await axiosPublic.get('/homepageContent');
            return res.data;
        }
    });




    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative w-full text-white border-2  mb-10 lg:h-screen">
            {carouselItems.length > 0 && (
                <div
                    className="relative py-8 lg:py-0 w-full h-[100vh] flex items-center justify-center bg-cover bg-center transition-all duration-500"
                    style={{ backgroundImage: `url(${carouselItems[currentIndex]?.bannerImg})` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    {/* Content */}
                    <div className="relative z-10 w-11/12 max-w-7xl mx-auto text-center lg:text-left flex flex-col lg:flex-row items-center gap-x-16">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
                            <h2 className="text-sm uppercase tracking-wide mb-2">Welcome to</h2>
                            <h1 className="text-2xl lg:text-5xl font-bold leading-snug">
                                {
                                    bannerText[0]?.name
                                }
                            </h1>
                            <p className="text-sm lg:text-lg leading-relaxed text-justify">
                                {
                                    bannerText[0]?.bannerDescription
                                }
                            </p>
                            <div className="relative inline-flex group">
                                {/* Gradient Background */}
                                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                                {/* Button */}
                                <Button2></Button2>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            <img
                                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732601830/spa-6-removebg-preview_eoxwit.png"
                                alt="Spa treatment"
                                className="object-cover w-10/12 lg:w-[75%] hidden lg:block"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BannerTow;
