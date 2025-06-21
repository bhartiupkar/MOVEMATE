import React from "react";
import { founderList } from "../../assets/lists/founder";
import ShowFounder from "./ShowFounder";
import bgGrid from "../../assets/images/9517d01d-7535-4e2b-aef0-067fb0269650.jpg";
import { motion, AnimatePresence } from "framer-motion";
const Founder = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2 }} className=" mx-10 mt-10 bg-slate-100  py-8 rounded-t-4xl shadow-[0_-4px_12px_rgba(0,0,0,0.15)]   my-8">
      <div className="text-center ">
        <h1 className="font-bold text-4xl">
          <motion.span
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Foun
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            ders
          </motion.span>
        </h1>
        <motion.div className="flex gap-0 justify-center">
          {/* Left-to-center HR */}
          <motion.hr
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-8 border-t-4 border-black rounded-full"
          />

          {/* Right-to-center HR */}
          <motion.hr
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-8 border-t-4 border-black rounded-full"
          />
        </motion.div>
      </div>

      <div className="mt-4  flex justify-evenly ">
        {founderList.map((item, index) => {
          return <ShowFounder key={index} item={item} />;
        })}
      </div>
    </motion.div>
  );
};

export default Founder;
