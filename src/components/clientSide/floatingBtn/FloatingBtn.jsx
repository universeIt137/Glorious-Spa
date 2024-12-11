import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const FloatingBtn = ({whatsapp, phone}) => {
    return (
        <div>
            <div className="fixed bottom-4 left-4 flex gap-4 w-11/12 mx-auto justify-between">
                {/* Phone Call Button */}
                <button className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-600 transition duration-300">
                    <a
                        href={`tel:+88${phone}`}
                        className="flex items-center text-white text-xs sm:text-base flex-col"
                    >
                        <FaPhone size={24} />
                    </a>
                </button>
                
                {/* WhatsApp Button */}
                <button className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-600 transition duration-300">
                    <a
                        href={`https://wa.me/+88${whatsapp}`}
                        className="text-white text-lg sm:text-2xl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsWhatsapp className='text-2xl'></BsWhatsapp>
                    </a>
                </button>
            </div>
        </div>
    );
};

export default FloatingBtn;
