import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion";

const ServiceDetails = ({ data }) => {

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
            className="relative w-full bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-xl shadow-lg flex flex-col justify-between gap-5 p-10 overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >

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

            <div className=''>

                <div className="w-max bg-[#09534B] rounded-xl shadow-lg flex flex-col gap-5 p-5">
                    <data.icon className='text-3xl text-[#E8BF6A]' />
                </div>

                <p className='text-2xl mt-5'>
                    {data.title}
                </p>

            </div>

            <p className='text-white/70 text-sm'>
                {data.description}
            </p>


        </motion.div>
    )
}

export default ServiceDetails