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

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};


const MovingMoveMate = ({word,textColor}) => {
  console.log(word)
    const [show, setShow] = useState(true);
    let letters = "MOVEMATE!!".split("");
    if(word){
      letters=word.split("");
    }
    
      useEffect(() => {
        const interval = setInterval(() => {
          setShow(false);
          setTimeout(() => setShow(true), 1500);
        }, 4000);
    
        return () => clearInterval(interval);
      }, []);


  return (
    <div>
      <div className='h-16 w-108 text-center'>
          
            {/* Animated text */}
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
                    className={`text-6xl font-bold ${textColor?textColor:"text-green"}`}
                    variants={letterVariants}
                    >
                      {char}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
    </div>
  )
}

export default MovingMoveMate
