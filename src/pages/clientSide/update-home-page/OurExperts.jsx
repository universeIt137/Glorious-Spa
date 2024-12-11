import React from "react";

const OurExperts = () => {
    return (
        <div className="w-11/12 mx-auto">
            {/* Header Section */}
            <div>
                <div>
                    <img
                        className="block mx-auto w-[25vh]"
                        src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732786454/service-details_urhfdi.png"
                        alt="Header Icon"
                    />
                </div>
                <div>
                    <h1 className="text-center text-[#D110B7] lg:text-5xl font-bold lg:my-5 my-3">
                        Our <span className="text-blue-400">Experts!</span>
                    </h1>
                </div>
                <div className="text-center">
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed my-4">
                        Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo.
                        Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                    </p>
                </div>
            </div>

            {/* Images Section */}
            <div className="flex lg:flex-row flex-col " >
                <div className="">
                    {/* Expert 1 */}
                    <div className="relative p-2 rounded-md group overflow-hidden">
                        <img
                            src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732940328/expert-1_yfsmat.jpg"
                            alt="Expert 4"
                            className="w-full h-[600px] object-cover rounded-md"
                        />
                        <div className="absolute inset-0 bg-[#CD23AC] bg-opacity-60  transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                            <div className="flex items-center justify-center h-full">
                                <h1 className="text-white font-bold lg:text-2xl">Aafreen Ahmed</h1>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="flex flex-col" >
                    {/* Expert2  */}
                    <div className="relative p-2 rounded-md group overflow-hidden">
                        <img
                            src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732940327/expert-2_df2afc.jpg"
                            alt="Expert 1"
                            className="w-full h-[300px] object-cover rounded-md"
                        />
                        <div className="absolute inset-0 bg-[#CD23AC] bg-opacity-60  transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                            <div className="flex items-center justify-center h-full">
                                <h1 className="text-white font-bold lg:text-2xl">Aafreen Ahmed</h1>
                            </div>
                        </div>
                    </div>

                    {/* Expert 3*/}
                    <div className="relative p-2 rounded-md group overflow-hidden">
                        <img
                            src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732940328/expert-3_kv5v7p.jpg"
                            alt="Expert 2"
                            className="w-full h-[400px] object-cover rounded-md"
                        />
                        <div className="absolute inset-0 bg-[#CD23AC] bg-opacity-60  transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                            <div className="flex items-center justify-center h-full">
                                <h1 className="text-white font-bold lg:text-2xl">Aafreen Ahmed</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col" >
                    {/* Expert 4 */}
                    <div className="relative p-2 rounded-md group overflow-hidden">
                        <img
                            src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732940327/expret-3_sctgnf.jpg"
                            alt="Expert 1"
                            className="w-full h-[300px]  object-cover rounded-md"
                        />
                        <div className="absolute inset-0 bg-[#CD23AC] bg-opacity-60  transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                            <div className="flex items-center justify-center h-full">
                                <h1 className="text-white font-bold lg:text-2xl">Aafreen Ahmed</h1>
                            </div>
                        </div>
                    </div>

                    {/* Expert 5 */}
                    <div className="relative p-2 rounded-md group overflow-hidden">
                        <img
                            src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732940327/expert-4_lbcuyz.jpg"
                            alt="Expert 2"
                            className="w-full h-[300px] object-cover rounded-md"
                        />
                        <div className="absolute inset-0 bg-[#CD23AC] bg-opacity-60  transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                            <div className="flex items-center justify-center h-full">
                                <h1 className="text-white font-bold lg:text-2xl">Aafreen Ahmed</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurExperts;
