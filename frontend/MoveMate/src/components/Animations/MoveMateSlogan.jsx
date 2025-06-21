import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Container3D from './Container3D';

const words = ['Delivery', 'Availability', 'Security', 'MOVEMATE'];

const MirrorGridWithBall = () => {
  const [displayedWords, setDisplayedWords] = useState(words.slice(0, 2));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedWords([
        words[index % words.length],
        words[(index + 1) % words.length],
      ]);
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Container3D anglex={10} angley={10}>
      <motion.div
        className="relative w-[400px] h-[300px] mx-auto mt-10 p-4 rounded-[30px] bg-gradient-to-br from-slate-100 to-gray-200 shadow-xl border border-gray-400 overflow-hidden"
      >
        {/* Grid (2x1) */}
        <div className="grid grid-cols-1 grid-rows-2 w-full h-full font-bold text-center text-3xl text-white">
          {displayedWords.map((word, i) => (
            <Container3D
              key={i}
              classPassed="text-black border-2 rounded-3xl flex items-center justify-center border-white bg-gray-300"
              anglex={40}
              angley={40}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={word}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {word}
                </motion.div>
              </AnimatePresence>
            </Container3D>
          ))}
        </div>
      </motion.div>
    </Container3D>
  );
};

export default MirrorGridWithBall;
