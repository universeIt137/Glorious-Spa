import React from 'react';

const Footer = ({name}) => {
    return (
        <div className='bg-[#2563EB]'>
            <p className='text-xs lg:text-xl text-white text-center font-bold'>Copyright © 2022 { name } | Powered by {name}.com</p>
        </div>
    );
};

export default Footer;