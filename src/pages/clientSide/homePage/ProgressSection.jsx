import React, { useState, useEffect, useRef } from 'react';

const ProgressSection = () => {
    const progressData = [
        { label: "SERVICES", percentage: 100 },
        { label: "CLIENT SATISFACTION", percentage: 100 },
        { label: "ROOM QUALITY", percentage: 100 },
        { label: "COMMUNICATION", percentage: 100 },
        { label: "ROOM APPLIANCES", percentage: 100 },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        // Create an intersection observer to monitor when the section is in view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true); // Start animation
                        observer.unobserve(entry.target); // Stop observing after first trigger
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <div ref={sectionRef} className="w-3/4 mx-auto mt-10">
           
            <h2 className="text-4xl mb-5 font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-center">
                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730890631/11.%20SPA-Center/HomePage/xddq0ehsgsoyrms2g994.png" alt="" className='mx-auto' />
            </h2>
            {progressData.map((item, index) => (
                <div key={index} className="flex items-center justify-between mb-4">
                    <div className="w-full bg-gray-300 rounded-full h-6">
                        <div
                            className={`bg-red-600 h-6 rounded-full flex items-center justify-between px-4 text-white font-semibold transition-all duration-1000 ease-out ${isVisible ? 'fill-animation' : ''}`}
                            style={{ width: `${isVisible ? item.percentage : 0}%` }}
                        >
                            <span>{item.label}</span>
                            <span>{item.percentage}%</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProgressSection;
