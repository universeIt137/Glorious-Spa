import React from 'react';
import ServiceContent from './ServiceContent';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';


const ServiceSection = () => {

    const axiosPublic = useAxiosPublic();
    const { data: packages = [] } = useQuery({
        queryKey: ['all packages'],
        queryFn: async () => {
            const res = await axiosPublic.get('/package');
            return res.data;
        }
    })

    return (
        <div >
            {/* Title Section */}
            <h2 className="text-4xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-center">
                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730896027/11.%20SPA-Center/HomePage/p6qjewftqkbrnpyw4fou.png" alt="" className='mx-auto w-1/3' />
            </h2>

            {
                packages?.map((pkg, index) => (
                    <ServiceContent key={pkg._id} pkg={pkg} reverse={index % 2 === 0}></ServiceContent>
                ))
            }


        </div>
    );
};

export default ServiceSection;
