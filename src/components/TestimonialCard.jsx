import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion";

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
            className="w-full bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-xl shadow-lg flex flex-col p-10"
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

            <div className="flex items-center gap-2 mb-5">

                <img src="https://miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg" alt="" className='w-12 h-12 object-cover aspect-square rounded-full ' />

                <div className='h-max'>
                    <div className="font-bold tracking-tight">
                        {data.name}
                    </div>
                    <div className="text-xs font-normal tracking-tight text-slate-300">
                        {data.position}
                    </div>
                </div>

            </div>

            <div className="mb-5 text-sm md:text-sm">
                {data.testimonial}
            </div>
            <div className="text-right text-[12px] font-normal tracking-tight text-slate-300">
                {data.date}
            </div>

        </motion.div>
    )
}

export default TestimonialCard