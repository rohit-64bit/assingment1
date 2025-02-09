import { motion } from "framer-motion";

const PartnersSlider = ({ partnersData }) => {
    return (
        <div className="w-full overflow-hidden mt-10">
            <motion.div
                className="flex gap-20"
                animate={{ x: ["0%", "-100%"] }} // Moves left infinitely
                transition={{ repeat: Infinity, ease: "linear", duration: 50 }} // Slower speed
                style={{ width: "200%" }} // Ensures seamless looping
            >
                {/* Duplicate images to create a smooth infinite loop */}
                {[...partnersData, ...partnersData].map((partner, index) => (
                    <img
                        key={index}
                        src={partner}
                        alt=""
                        className="w-20 object-contain filter grayscale brightness-150 contrast-200"
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default PartnersSlider;