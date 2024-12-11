import React from 'react';
import { FaHeadphones, FaPhoneAlt } from 'react-icons/fa';

const SpaBanner = ({mainBannerUrl, bannerTitle, bannerSubTitle, bannerDescription, latestNews}) => {
    return (
        <div className="w-full h-screen flex flex-col">
            {/* Background Image Section */}
            <div
                className="relative w-full h-[80vh] bg-cover bg-center text-white"
                style={{ backgroundImage: `url(${mainBannerUrl})` }}
            >
                {/* Overlay for readability on mobile */}
                {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center mx-auto  md:w-11/12">
                    <h1 className="text-3xl md:text-5xl font-extrabold uppercase">
                        {bannerTitle}
                    </h1>
                    <p className="text-sm md:text-xl mt-2 uppercase font-semibold">
                        {bannerSubTitle}
                    </p>
                    <p className="mt-4 text-sm md:text-lg leading-relaxed">
                        {bannerDescription}
                    </p>

                    <a
                        href="https://wa.me/+8801988650873"
                        className="text-white flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <button className="mt-6 flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-600 transition duration-300">
                            <FaHeadphones /> Call Us Now
                        </button>
                    </a>

                </div>
            </div>

            {/* Scrolling Text Section */}
            <div className="w-full   text-sm md:text-lg font-semibold flex items-center overflow-hidden whitespace-nowrap">
                <marquee behavior="" direction="" >
                    <p className='text-2xl flex items-center gap-2 my-4'>
                        <span className="font-bold text-2xl text-red-500">LATEST NEWS :</span> {latestNews}
                    </p>
                </marquee>
            </div>
        </div>
    );
};

export default SpaBanner;
