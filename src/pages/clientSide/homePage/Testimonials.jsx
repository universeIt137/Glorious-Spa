import React, { useRef, useEffect } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';



const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 min-w-[300px] mx-2">
            <p className="text-gray-700 mb-4">{testimonial?.testimonial}</p>
            <div className="flex items-center">
                <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={testimonial?.photo}

                />
                <div>
                    <p className="text-gray-900 font-bold">{testimonial?.name}</p>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    const scrollRef = useRef(null);
    let isDragging = false;
    let startX;
    let scrollLeft;
    let autoScrollInterval;

    const axiosPublic = useAxiosPublic();
    const { data: testimonials = [] } = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => {
            const res = await axiosPublic.get('/testimonial');
            return res.data;
        }
    })

    const handleMouseDown = (e) => {
        isDragging = true;
        startX = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft = scrollRef.current.scrollLeft;
        clearInterval(autoScrollInterval); // Pause auto-scroll while dragging
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed here
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        isDragging = false;
        startAutoScroll(); // Resume auto-scroll after dragging ends
    };

    const startAutoScroll = () => {
        autoScrollInterval = setInterval(() => {
            if (scrollRef.current) {
                // Scroll to the right by a fixed amount
                scrollRef.current.scrollLeft += 1;

                // If we've scrolled to the end, reset to the start
                if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
                    scrollRef.current.scrollLeft = 0;
                }
            }
        }, 80); // Adjust the interval for scroll speed
    };

    useEffect(() => {
        startAutoScroll();

        return () => clearInterval(autoScrollInterval); // Clean up interval on unmount
    }, []);

    return (
        <>
        <h2 className="text-4xl text-center font-bold text-pink-500 mb-4">
                        Our Client <span className="text-blue-500">Review!</span>
                    </h2>
            <div
                className="overflow-x-auto w-10/12 mx-auto p-6 cursor-grab"
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                style={{ scrollbarWidth: 'none' }}
            >


                <div className="flex flex-nowrap items-center" style={{ gap: '16px' }}>
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial._id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </>

    );
};

export default Testimonials;
