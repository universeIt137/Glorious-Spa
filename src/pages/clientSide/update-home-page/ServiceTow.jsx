import React from 'react'

const ServiceTow = () => {
    return (
        <div className='w-11/12 mx-auto  ' >
            <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
                {/* Icon and Heading */}
                <div className="text-center lg:mb-8">
                    <img className='w-[75%] ' src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732445988/service-logo_nojdxj.png" alt="" />
                    {/* Title */}
                    <h1 className="lg:text-4xl text-[17px] lg:mt-6 mt-3 font-bold text-[#6c1f1f]">
                        Our <span className="text-[#ef4444]">Services!</span>
                    </h1>
                </div>

                {/* Content */}
                <div className=" text-[10px] lg:text-[16px] text-justify text-gray-700">
                    <p className="text-lg leading-relaxed">
                        Indulge in the ultimate relaxation and wellness experience with our
                        exceptional spa services in Dhaka. At <b>Glorious Thai Spa</b>, we
                        offer a comprehensive range of treatments that cater to your every
                        need. Immerse yourself in the soothing ambiance of our spa as our
                        skilled therapists transport you to a world of tranquility. Choose
                        from an array of rejuvenating massage therapies, from the
                        stress-relieving magic of Swedish massage to the deep relaxation of
                        hot stone massage. Our facial treatments are designed to leave your
                        skin radiant and refreshed, using only the finest natural
                        ingredients.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceTow
