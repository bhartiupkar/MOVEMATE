import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CustomFadeInOut = ({ children, className = '', once = true, fadeOut = false, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, delay } },
    out: { opacity: 0, y: 0, transition: { duration: 2 } }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : fadeOut ? 'out' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default CustomFadeInOut;
