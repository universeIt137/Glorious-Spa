import React from 'react';

const Footer = ({name}) => {
    return (
        <div className='bg-[#ef4444]'>
            <p className='text-xs lg:text-xl text-white text-center font-bold'>Copyright © 2024 { name } | Developed by universe soft tech </p>
        </div>
    );
};

export default Footer;