import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const MovingMoveMate = ({ word, textColor, textSize, dir = "up" }) => {
  const [show, setShow] = useState(true);
  let letters = word ? word.split('') : "MOVEMATE!!".split('');

  // Define direction-based animation
  const yEnter = dir === "up" ? 20 : -20;
  const yExit = dir === "up" ? -20 : 20;

  const letterVariants = {
    hidden: { opacity: 0, y: yEnter },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: yExit },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => setShow(true), 1500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" text-center">
      <AnimatePresence>
        {show && (
          <motion.div
            key="word"
            className="flex gap-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {letters.map((char, i) => (
              <motion.div
                key={i}
                className={`${textSize || 'text-6xl'} font-bold ${textColor || 'text-black-600'}`}
                variants={letterVariants}
              >
                {char}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MovingMoveMate;
