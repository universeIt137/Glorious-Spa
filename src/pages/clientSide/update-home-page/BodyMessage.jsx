import React from "react";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const BodyMessage = () => {
    return (
        <div className="bg-[#2563eb] my-12 " >
            <div className="w-11/12 mx-auto lg:py-10 " >
                <div className=" text-white ">
                    {/* Top Section */}
                    <div className="flex flex-col lg:flex-row lg:gap-10  justify-between">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <img
                                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732601830/spa-6-removebg-preview_eoxwit.png" // Replace with your candle image
                                alt="Relaxation Spa"
                                className="rounded-full w-[90vh] h-auto object-cover"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 text-center ">
                            <h2 className=" lg:text-3xl text-justify font-bold mb-1 lg:mb-4">
                                Best Relaxation Body Massage in Dhaka
                            </h2>
                            <p className="lg:text-lg text-[10px] leading-relaxed text-justify ">
                                Step into Smart Beauty Body Spa and embrace a world of serenity and renewal. We are not
                                just a spa – we are a destination for holistic well-being, a refuge for restoration, and
                                a space to reconnect with your inner tranquility. Our dedicated team is here to guide
                                you on a path towards wellness and self-discovery.
                            </p>
                            <div className="flex flex-row lg:flex-row justify-start gap-2 lg:gap-32 items-center lg:mt-16 mt-7 " >
                                {/* Google Appreciations */}
                                <div className=" text-start flex items-center justify-center gap-2 lg:gap-4 ">
                                    <div>
                                        <img className=" w-[20vh] h-auto lg:w-full " src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732774117/g1_cxmukk.png" alt="" />
                                    </div>
                                    <div>
                                        <div className="lg:text-5xl text-[13px] font-bold text-[#e62962] ">4950</div>
                                        <p className="mt-2 lg:text-lg text-[9px]  text-[#e62962] ">Appreciations</p>
                                    </div>
                                </div>

                                <div className="text-center flex items-center gap-1 lg:gap-4 ">
                                    <div>
                                        <img className=" w-[20vh] h-auto lg:w-full " src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732774117/f-1_ybj7yw.png" alt="" />
                                    </div>
                                    <div className="text-justify" >
                                        <div className="lg:text-5xl text-[13px] font-bold text-[#e62962] ">2230</div>
                                        <p className="mt-2 lg:text-lg text-[9px] text-[#e62962] ">Flowers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row lg:flex-row lg:justify-start gap-2 lg:gap-32 items-center lg:mt-16 mt-7" >
                                {/* Google Appreciations */}
                                <div className="text-center flex items-center gap-1 lg:gap-4 ">
                                    <div>
                                        <img className=" w-[20vh] h-auto lg:w-full " src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732774161/l2_ixyzqo.png" alt="" />
                                    </div>
                                    <div className="text-justify" >
                                        <div className="lg:text-5xl text-[13px] font-bold text-[#e62962] ">4015</div>
                                        <p className="mt-2 lg:text-lg text-[9px] text-[#e62962] ">Likes</p>
                                    </div>
                                </div>

                                {/* Facebook Followers */}

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BodyMessage;
