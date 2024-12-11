import React from 'react';
import { FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const ContactUsSection = () => {
    const axiosPublic = useAxiosPublic();
    const { data: content = [] } = useQuery({
        queryKey: ['content'],
        queryFn: async () => {
            const res = await axiosPublic.get('/homepageContent');
            return res.data[0];
        }
    })

    const { phone, address, email } = content;
    return (
        <div className='lg:mb-16'>
            <h2 className="text-4xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-center">
                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730895291/11.%20SPA-Center/HomePage/nv5eqfwm6pxjrxrbqkdl.png" alt="" className='mx-auto' />
            </h2>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-8 space-y-8 md:space-y-0 md:space-x-8">
                {/* Map Section */}
                <div className="w-full md:w-1/2 lg:h-96">
                    <iframe className='lg:w-full w-full mx-auto border-[1.5px]  rounded-md ' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7301.693272161551!2d90.401197!3d23.788475!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f96b7d00e9%3A0x2f00b2bf40a8a4d!2sDhaka%20Body%20Queen%20Spa!5e0!3m2!1sen!2sbd!4v1730894651430!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                {/* Contact Information Section */}
                <div className="w-full md:w-1/2 space-y-4 text-black">
                    <p className="text-center text-xl md:text-left">
                        Below you can see the necessary information if you like to contact us.
                    </p>
                    <div className="space-y-4 text-xl">
                        {/* Phone */}
                        <div className="flex items-center space-x-2 gap-2">
                            {/* <FaPhoneAlt className="text-blue-500" /> */}
                            <FaPhoneAlt className="text-blue-500" />
                            <span>Phone <br /> { phone }</span>
                        </div>
                        {/* Location */}
                        <div className="flex items-center space-x-2 gap-2">
                            <FaMapMarkerAlt className="text-blue-500" />
                            <span>Location <br /> { address }</span>
                        </div>
                        {/* Email */}
                        <div className="flex items-center space-x-2 gap-2">
                            <FaEnvelope className="text-blue-500" />
                            <span>E-Mail <br /> { email }</span>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            <FaFacebook size={40} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                            <FaTwitter size={40} />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">
                            <FaYoutube size={40} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsSection;