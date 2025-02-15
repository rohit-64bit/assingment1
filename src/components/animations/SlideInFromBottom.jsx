import React from 'react';
import { motion, useInView } from 'framer-motion';

const SlideInFromBottom = ({ children, className }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default SlideInFromBottom;