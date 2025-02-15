import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";

const ServiceDetails = ({ data }) => {
    const cardRef = useRef(null);
    const [mousePosition, setMousePosition] = useState(null);

    // Calculate mouse position relative to the card
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
            className="relative w-full bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-xl shadow-lg flex flex-col justify-between gap-5 p-8 md:p-10 overflow-hidden transition-all duration-300 ease-in-out"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            aria-label={data.title || "Service Details"}
        >
            {/* Dynamic radial gradient on hover */}
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

            {/* Icon and title */}
            <div>
                {data.icon && (
                    <div className="w-max bg-[#09534B] rounded-xl shadow-lg flex p-5">
                        <data.icon className="text-3xl text-[#E8BF6A]" aria-hidden="true" />
                    </div>
                )}
                <p className="text-2xl mt-5 font-semibold">
                    {data.title}
                </p>
            </div>

            {/* Description */}
            <p className="text-white/70 text-sm md:text-base">
                {data.description}
            </p>
        </motion.div>
    );
};

export default ServiceDetails;
