import React from 'react'

const AboutUsTow = () => {
    return (
        <div className='w-11/12 mx-auto ' >
            <div className="">
                {/* About Us Section */}
                <section className="flex flex-col items-center justify-center py-16 px-6   rounded-lg">
                    {/* Icon */}
                    <div>
                        <img className='w-28 mb-3 ' src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732445988/service-logo_nojdxj.png" alt="" />
                    </div>
                    {/* Title */}
                    <h2 className="text-4xl font-bold text-pink-500 mb-4">
                        About <span className="text-blue-500">US!</span>
                    </h2>
                    {/* Description */}
                    <p className=" text-gray-700 text-justify ">
                        Smart Beauty Body Spa BD is the best body massage spa in Gulshan. Our mission
                        is to provide you with an unparalleled spa experience that rejuvenates
                        the body, mind, and soul. With a deep commitment to your well-being,
                        we offer a range of luxurious treatments designed to restore balance
                        and promote relaxation. Our skilled therapists bring years of
                        expertise to each session, ensuring that you receive the highest
                        level of care. We are the best among top spa centers in Dhaka.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default AboutUsTow
