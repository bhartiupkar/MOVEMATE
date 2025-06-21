import React from 'react';
import { motion } from 'framer-motion';
import { RandomImageArr } from '../../utils/data';

// Helper function to generate random top, left, and rotation
const generateRandomPosition = () => {
  const top = Math.random() * 60 + 10; // Between 10% to 70% from top
  const left = Math.random() * 70 + 10; // Between 10% to 80% from left
  const rotation = Math.random() * 40 - 20; // Between -20deg to +20deg
  return { top: `${top}%`, left: `${left}%`, rotation };
};

export function ScatteredCardDemo() {
  const images = RandomImageArr||[]

  // Assign random positions for each image
  const items = images.map((img, index) => ({
    image: img,
    ...generateRandomPosition()
  }));

  return (
    <>
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-900">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Scattered Gallery View
      </p>

      {items.map((item, index) => (
        <motion.div
          key={index}
          className="absolute cursor-pointer"
          style={{
            top: item.top,
            left: item.left,
            transform: `rotate(${item.rotation}deg)`
          }}
          whileHover={{
            scale: 1.1,
            y: -10,
            rotate: item.rotation + 10
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img
            src={item.image}
            alt={`Scattered ${index}`}
            className="pointer-events-none relative z-10 h-60 w-60 object-cover shadow-lg rounded-xl"
          />
        </motion.div>
      ))}
    
    </div>
    </>
  );
}

export default ScatteredCardDemo;
