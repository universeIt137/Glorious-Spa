import React from 'react'

const ServiceDetails = () => {
    return (
        <div className='w-11/12 mx-auto ' >
            <section className=" bg-white">
                {/* Icon Section */}
                <div className="mb-4  ">
                    <img className='block mx-auto w-[28vh] ' src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732786454/service-details_urhfdi.png" alt="" />
                </div>

                {/* Title */}
                <h2 className="lg:text-4xl font-bold lg:mb-4 text-center">
                    <span className="text-pink-500">Service</span>{" "}
                    <span className="text-blue-600">Details!</span>
                </h2>

                {/* Description */}
                <p className="text-gray-700  text-justify leading-relaxed lg:text-[16px] text-[12px] ">
                    Smart Beauty Body Spa BD is the best body massage spa in Gulshan. Our mission is
                    to provide you with an unparalleled spa experience that rejuvenates the
                    body, mind, and soul. With a deep commitment to your well-being, we
                    offer a range of luxurious treatments designed to restore balance and
                    promote relaxation. Our skilled therapists bring years of expertise to
                    each session, ensuring that you receive the highest level of care. We
                    are the best among top spa centers in Dhaka.
                </p>
            </section>
        </div>
    )
}

export default ServiceDetails
