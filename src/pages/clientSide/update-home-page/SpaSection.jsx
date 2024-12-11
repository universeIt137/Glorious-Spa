import React from "react";
import { FaGoogle, FaFacebook, FaThumbsUp } from "react-icons/fa";

const SpaSection = () => {
    return (
        <div
            className="bg-cover bg-center text-white py-5 lg:py-10 "
            style={{
                backgroundImage: `url('https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732782998/spa-banner-4_ebpujd.png')`, // Replace with the actual background image URL
            }}
        >
            <div className=" py-16 px-8">
                <div className="container w-11/12  mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
                    {/* Image Section */}
                    <div className="relative w-full md:w-1/2 h-64 md:h-80">
                        <div className="rounded-full overflow-hidden w-full h-full">
                            <img
                                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732601830/spa-6-removebg-preview_eoxwit.png" // Replace with the actual image link
                                alt="Spa Relaxation"
                                className="object-cover rounded-full w-[400px] h-[400px] "
                            />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="lg:text-4xl font-bold -mt-5 lg:-mt-0 lg:mb-4">
                            Best Relaxation Body Massage in Dhaka
                        </h1>
                        <div className="w-16 h-1 bg-gray-400 lg:mb-6 my-2 mx-auto md:mx-0"></div>
                        <p className="lg:text-lg text-[10px] text-gray-300 text-justify leading-relaxed lg:mb-6">
                            Step into Smart Beauty Body Spa and embrace a world of serenity and
                            renewal. We are not just a spa – we are a destination for
                            holistic well-being, a refuge for restoration, and a space to
                            reconnect with your inner tranquility. We look forward to
                            welcoming you and curating moments of pure relaxation in the heart
                            of Dhaka. Our dedicated team is here to guide you on a path
                            towards wellness and self-discovery.
                        </p>

                        {/* Statistics Section */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-5 lg:gap-6 mt-4 lg:mt-8">
                            {/* Stat 1 */}
                            <div className="flex items-center gap-2 lg:gap-4 bg-blue-800 lg:p-4 p-2 rounded-lg shadow-lg">
                                <div className="bg-blue-700 lg:p-3 p-2 rounded-full">
                                    <FaGoogle className="lg:text-2xl text-xl text-pink-500" />
                                </div>
                                <div>
                                    <p className="lg:text-2xl text-xl font-bold text-pink-500">4950</p>
                                    <p className="lg:text-sm  text-[12px] text-gray-300">Appreciations</p>
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div className="flex items-center gap-2 lg:gap-4 bg-blue-800 lg:p-4 p-2 rounded-lg shadow-lg">
                                <div className="bg-blue-700 lg:p-3 p-2 rounded-full">
                                    <FaFacebook className="text-2xl text-pink-500" />
                                </div>
                                <div>
                                    <p className="lg:text-2xl text-xl font-bold text-pink-500">2234</p>
                                    <p className="lg:text-sm  text-[12px] text-gray-300">Followers</p>
                                </div>
                            </div>

                            {/* Stat 3 */}
                            <div className="flex items-center gap-2 lg:gap-4 bg-blue-800 lg:p-4 p-2 rounded-lg shadow-lg">
                                <div className="bg-blue-700 lg:p-3 p-2 rounded-full">
                                    <FaThumbsUp className="text-2xl text-pink-500" />
                                </div>
                                <div>
                                    <p className="lg:text-2xl text-xl font-bold text-pink-500">4015</p>
                                    <p className="lg:text-sm  text-[12px] text-gray-300">Likes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpaSection;
