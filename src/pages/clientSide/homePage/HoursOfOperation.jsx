import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const HoursOfOperation = () => {
    

    const axiosPublic = useAxiosPublic();
    const { data: days = [] } = useQuery({
        queryKey: ['days'],
        queryFn: async () => {
            const res = await axiosPublic.get('/office-hour');
            return res.data;
        }
    })

    return (

        <>

            <h2 className="text-4xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-center">
                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730893242/11.%20SPA-Center/HomePage/myfu0aktexslikos6poa.png" alt="" className='mx-auto' />
            </h2>
            <div className="w-3/4 mx-auto mt-10 shadow-lg rounded-lg overflow-hidden">


                {/* Header Section */}
                <div className="bg-cover bg-center text-white font-bold text-center py-8"
                    style={{
                        backgroundImage: 'url("https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730893172/11.%20SPA-Center/HomePage/qfoj89kktqvchpooecav.jpg")'
                    }}
                >

                </div>

                {/* Table Section */}
                <div className="bg-white p-4">
                    {days?.map((day, index) => (
                        <div key={index} className="flex justify-between lg:gap-44  gap-4 lg:text-2xl items-center py-3 border-b">
                            <div className='w-1/2'>
                                <p className="font-semibold text-gray-700 text-center">{day?.day}</p>
                            </div>
                            <div className="w-1/2">
                                <p className="font-bold text-gray-800 text-center">{day?.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
};

export default HoursOfOperation;
