import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const AnimatedTeam = ({
    teams,
    autoplay = false,
}) => {

    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % teams.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + teams.length) % teams.length);
    };

    const isActive = (index) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10;
    };

    return (
        <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-16">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                {/* Image Section */}
                <div className="relative h-60 sm:h-80 md:h-96 lg:h-[30rem] w-full">
                    <AnimatePresence>
                        {teams.map((team, index) => (
                            <motion.div
                                key={team.index}
                                initial={{
                                    opacity: 0,
                                    scale: 0.9,
                                    z: -100,
                                    rotate: randomRotateY(),
                                }}
                                animate={{
                                    opacity: isActive(index) ? 1 : 0.7,
                                    scale: isActive(index) ? 1 : 0.95,
                                    z: isActive(index) ? 0 : -100,
                                    rotate: isActive(index) ? 0 : randomRotateY(),
                                    zIndex: isActive(index) ? 999 : teams.length + 2 - index,
                                    y: isActive(index) ? [0, -80, 0] : 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                    z: 100,
                                    rotate: randomRotateY(),
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 origin-bottom"
                            >
                                <img
                                    src={team.img}
                                    alt={team.name}
                                    draggable={false}
                                    className="h-full w-full rounded-3xl object-cover object-center"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Text Section */}
                <div className="flex flex-col justify-between py-4">
                    <motion.div
                        key={active}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                            {teams[active].name}
                        </h3>
                        <p className="text-sm md:text-base text-white/70">
                            {teams[active].designation}
                        </p>
                        <motion.p className="text-sm md:text-base lg:text-lg text-white mt-8">
                            {teams[active].quote.split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                        delay: 0.02 * index,
                                    }}
                                    className="inline-block"
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.p>
                    </motion.div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 pt-12">
                        <button
                            onClick={handlePrev}
                            className="p-3 sm:p-4 rounded-full bg-[#09534B] flex items-center justify-center cursor-pointer group/button"
                        >
                            <FaArrowLeft className="h-5 w-5 text-black group-hover/button:text-[#E8BF6A] group-hover/button:rotate-12 transition-transform duration-300" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-3 sm:p-4 rounded-full bg-[#09534B] flex items-center justify-center cursor-pointer group/button"
                        >
                            <FaArrowRight className="h-5 w-5 text-black group-hover/button:text-[#E8BF6A] group-hover/button:-rotate-12 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedTeam;