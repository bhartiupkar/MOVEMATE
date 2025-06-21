import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CustomDiv = ({ children, from = "left", className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const direction = {
    left: { x: -200, opacity: 0 },
    right: { x: 100, opacity: 0 },
    top: { y: -200, opacity: 0 },
    bottom: { y: 100, opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={direction[from] || direction.left}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration: 2, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default CustomDiv;
