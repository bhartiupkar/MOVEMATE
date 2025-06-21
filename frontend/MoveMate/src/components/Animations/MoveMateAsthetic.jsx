import { motion } from "framer-motion";
import React from "react";

const MoveMateAesthetic = ({classStyle}) => {
  return (
    <div className={classStyle?classStyle:"w-full flex justify-center items-center  bg-slate-100"}>
      <motion.h1
        initial={{ opacity: 0.5, scale: 0.95 }}
        animate={{
          opacity: 1,
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="text-center text-6xl md:text-9xl font-bold leading-tight"
      >
        <motion.span
          className="block text-black"
          initial={{ opacity: 0.5, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          MOVE
        </motion.span>

        <motion.span
          className="block bg-gradient-to-r from-sky-400 via-pink-500 to-violet-500 text-9xl bg-clip-text text-transparent animate-gradient-x"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
           MATE
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default MoveMateAesthetic;