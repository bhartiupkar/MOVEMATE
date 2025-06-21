import React from "react";
import { motion } from "framer-motion";
const OurVision = () => {
  return (
    <div className=" flex flex-col-reverse md:flex-row font-light w-full justify-around">
      <motion.div
        sm:none
        md:initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
        className="w-1/2  sm:lg md:text-2xl px-4 py-8 bg-slate-100 leading-10 max-w-xl pr-7 "
      >
        <span className=" sm:xl md:text-4xl">Our Mission Blogs Lorem</span>{" "}
        ipsum dolor sit amet consectetur adipisicing elit. Maiores ea hic harum
        unde architecto molestias est inventore velit dolor soluta quas ut
        commodi sequi dolore quasi, voluptas ipsum fugit, officiis temporibus.
        Quisquam, eum quia! Quas dolor velit nihil praesentium tempora veniam
        officia Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        nostrum ullam, a velit explicabo animi quo illo minus, officiis
        excepturi inventore neque sequi tempora fuga consequatur itaque
        consectetur deleniti maiores, quibusdam exercitationem? pariatur
        repellat ex.
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100, rotate: 20 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-1/3 pt-12"
      >
        <motion.span className=" sm:text-4xl md:text-8xl font-thin">
          Our Vision
          <hr className="border-1 " />
        </motion.span>
      </motion.div>
    </div>
  );
};

export default OurVision;
