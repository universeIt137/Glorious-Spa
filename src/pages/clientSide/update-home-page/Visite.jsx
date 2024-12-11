import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Visite = () => {
    const axiosPublic = useAxiosPublic();

    // Fetch packages using React Query
    const { data: officeHour = [], isLoading, isError } = useQuery({
        queryKey: ["officeHour"],
        queryFn: async () => {
            const res = await axiosPublic.get("office-hour");
            return res.data;
        },
    });
    return (
        <div className="my-12 bg-[url('https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732782998/spa-banner-4_ebpujd.png')] bg-cover bg-center bg-no-repeat min-h-screen">
            <div>
                <div className="w-11/12 mx-auto">
                    <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-5 ' >
                        <div className='py-20' >
                            <h1 className=" lg:text-4xl font-bold mb-4 lg:mb-6">
                                We Are Always Ready
                            </h1>
                            <div>
                                <ul>
                                    <li className="flex items-center gap-3 ">
                                        <FaCheck className="font-bold text-2xl text-white " />
                                        <span className='lg:text-xl text-[11px] text-white ' >Give you The Best Service</span>
                                    </li>
                                    {/* Add more list items as needed */}
                                    <li className="flex items-center gap-3 ">
                                        <FaCheck className="font-bold text-2xl text-white " />
                                        <span className='lg:text-xl text-[11px] text-white  ' >Message Anytime</span>
                                    </li>
                                    <li className="flex items-center gap-3 ">
                                        <FaCheck className="font-bold text-2xl text-white  " />
                                        <span className='lg:text-xl text-[11px] text-white  ' >24/7 Hotline Open</span>
                                    </li>
                                    <li className="flex items-center gap-3 ">
                                        <FaCheck className="font-bold text-2xl text-white  " />
                                        <span className='lg:text-xl text-[11px]  text-white ' >Ask Any Question Regarding Service</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <img
                                    src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732792882/span_rurzba.jpg"
                                    alt="Service"
                                    className="rounded-tl-[200px] rounded-br-[200px] my-5 "
                                />
                            </div>
                        </div>
                        <div>
                            <div className=" rounded-lg  overflow-hidden -mt-12 lg:-mt-0 lg:w-[450px]">
                                {/* Header */}
                                <div className="bg-pink-500  text-center py-3 lg:py-4">
                                    <h2 className="lg:text-lg text-[11px] font-bold">Visit Us</h2>
                                </div>
                                {/* Days and Timings */}
                                <div className="lg:p-4 p-3 space-y-4  ">
                                    {
                                        officeHour && officeHour?.map((item, i) => {
                                            return (
                                                <div key={i} >
                                                    <div className="flex justify-between items-center bg-white  text-black rounded-lg lg:p-6 p-3 shadow-md">
                                                        <span className="lg:text-xl text-[11px] font-semibold ">{ item?.day }</span>
                                                        <span className="lg:text-xl text-[11px] font-semibold ">{ item?.time }</span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Visite;
