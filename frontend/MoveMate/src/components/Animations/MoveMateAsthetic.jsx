import { motion } from "framer-motion";
import React from "react";

const MoveMateAesthetic = ({ classStyle, textSize,textToShow }) => {
  console.log(textToShow,'ssnsnsn')
  return (
    <div className={classStyle ? classStyle : "w-full rounded-[80px]  flex justify-center items-center  bg-slate-100"}>
      <motion.h1
        initial={{ opacity: 1, scale: 0.95 }}
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
        className={`text-center text-6xl md:text- font-bold leading-tight`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen  text-center">
          <motion.span
            className={`block ${textSize?textSize:'text-9xl'} font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-shimmer`}
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            animate={{ opacity: 1, scale: 1.1, x: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            MOVE
          </motion.span>

          <motion.span
            className={`block ${textSize?textSize:'text-9xl'} font-extrabold bg-gradient-to-r from-yellow-300 via-green-400 to-blue-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-shimmer`}
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1.1, x: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            MATE
          </motion.span>
          <div className="pt-10">

          <h1 className="text-4xl font-medium p-5 ">{textToShow?.title}</h1>
          <p className="text-lg font-light px-6 "> {textToShow?.text}</p>
        </div>
          </div>
      </motion.h1>
    </div>
  );
};

export default MoveMateAesthetic;
