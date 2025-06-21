import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaChevronDown } from 'react-icons/fa';

const BouncingArrow = ({handleClick}) => {
  console.log("here")
  return (
    <motion.div onClick={handleClick}
      className="w-16 h-16 rounded-full shadow-[0_-4px_12px_rgba(0,0,1,0.5)] bg-black flex items-center justify-center cursor-pointer text-white mx-auto mt-20 "
      animate={{ y: [0, -40, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    >
      <FaArrowDown className="text-xl" />
    </motion.div>
  );
};

export default BouncingArrow;
