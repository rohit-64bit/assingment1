import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ data }) => {
    const cardRef = useRef(null);
    const [mousePosition, setMousePosition] = useState(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const { left, top } = cardRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePosition(null);
    };

    return (
        <motion.div
            ref={cardRef}
            className="relative w-full bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-xl shadow-lg flex flex-col p-8 md:p-10 transition-all duration-300 ease-in-out"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            aria-label={data.name || 'Testimonial Card'}
        >
            {/* Hover gradient effect */}
            {mousePosition && (
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.3), transparent 50%)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                />
            )}

            {/* User information */}
            <div className="flex items-center gap-4 mb-5">
                <img
                    src="https://miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg"
                    alt={`${data.name}'s profile`}
                    className="w-12 h-12 object-cover aspect-square rounded-full"
                />
                <div>
                    <div className="font-bold text-lg">{data.name || 'Anonymous'}</div>
                    <div className="text-xs font-normal text-slate-300">{data.position || 'Position'}</div>
                </div>
            </div>

            {/* Testimonial text */}
            <p className="mb-5 text-sm md:text-base">
                {data.testimonial || 'No testimonial provided.'}
            </p>

            {/* Date of the testimonial */}
            <div className="text-right text-xs text-slate-300">{data.date || 'Date not available'}</div>
        </motion.div>
    );
};

export default TestimonialCard;
