import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const AboutSection = ({aboutTitle, aboutSubTitle, bannerImageUrl}) => {
    return (
        <div>
            {/* Title Section */}
            <h2 className="text-4xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-center">
                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889333/11.%20SPA-Center/HomePage/rk8ejt9ovpaoir5bwxoj.png" alt="" className='mx-auto' />
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start bg-white p-6 w-10/12 mx-auto">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex  lg:justify-start mx-auto">
                    <img
                        src={bannerImageUrl} // Replace with actual image URL
                        alt="Spa Relaxation"
                        className="rounded-xl object-cover w-full lg:w-[450px] h-auto"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-2xl lg:text-5xl font-bold text-black">
                        {aboutTitle}
                    </h2>
                    <p className="text-gray-700 mt-4">
                        {aboutSubTitle}
                    </p>

                    {/* Features Section */}
                    <div className="mt-6 space-y-4">
                        <div className="flex items-start gap-3">
                            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889818/11.%20SPA-Center/HomePage/nmapta41ylhxnfguiwq0.png" alt="" />
                            <div>
                                <h3 className="font-semibold text-lg text-black">We have outstanding and world-class spa center</h3>
                                <p className="text-gray-600">
                                    Dhaka Body Queen Spa is totally equipped with the latest modern facilities, providing a high-quality ambiance with well-maintained rooms with AC and clean facilities.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889818/11.%20SPA-Center/HomePage/nmapta41ylhxnfguiwq0.png" alt="" />
                            <div>
                                <h3 className="font-semibold text-lg text-black">A complete refreshing package</h3>
                                <p className="text-gray-600">
                                    Dhaka Body Queen Spa offers you relaxing spa therapies with all the authenticity, intricacies, and wisdom for a complete experience.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889818/11.%20SPA-Center/HomePage/nmapta41ylhxnfguiwq0.png" alt="" />
                            <div>
                                <h3 className="font-semibold text-lg text-black">Reasonable Price</h3>
                                <p className="text-gray-600">
                                    We provide luxurious massage services in Dhaka at very reasonable prices so that it won’t hamper your pockets for full body massage in Dhaka.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;