import React from "react";
import { motion } from "framer-motion";
import MoveMateAesthetic from "../Animations/MoveMateAsthetic";
import Container3D1 from "../Animations/Container3d1";
import { FaArrowRight } from "react-icons/fa";
const Suggestion = () => {
  const handleGotoContact = () => {
    window.location.href = "/contact";
  };
  return (
    <div className="flex  flex-col justify-center items-center bg-slate-200">
      <motion.div
        initial={{ opacity: 1, y: 100, x: -50 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-7xl pt-12 font-light">Why Choose Us!!</h1>
        <div className=" flex justify-center">
          <hr className="w-25 mt-2 border-[1px] rounded-full text-center" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 2 }}
        className=" flex   my-10 pt-20 pb-10 justify-around"
      >
        <div className="w-[60%]">
          <div className="flex flex-col px-20 text-xl font-light items-center justify-center ">
            <p className="text-4xl pb-10">
              We are a team of passionate individuals who are dedicated to
              create a better robust and scalable solution for our customers
              with the customers.
            </p>
            <div className="text-2xl">
              <p>
                There are thousands of actions by random individuals in their
                daily life such that these actions can be converted as a
                resources for the another individual.{" "}
              </p>
              <p>
                There are millions of individuals travel in daily life from
                distants this travel can be converted to a resource for person.
              </p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2 }}
          className=" flex justify-center"
        >
          <hr className=" border-[1px] mt-20 h-[200px]" />
        </motion.div>
        <div className="w-[40%] px-10 py-6 flex flex-col gap-10">
          <div>
            <Container3D1 anglex={20} angley={20}>
              <MoveMateAesthetic classStyle="w-full rounded-[50px] shadow-[0_-4px_12px_rgba(0,0,0,0.15)] flex justify-center items-center  bg-slate-200" />
            </Container3D1>
          </div>
          <div className="mx-20 mt-10 ">
            <div
              onClick={handleGotoContact}
              className="  flex justify-center mx-10 cursor-pointer text-lg border-1 px-4 bg-gray-200  hover:bg-gray-400  py-2 rounded-full"
            >
              
              Goto Contact
              <FaArrowRight className="mt-1 ml-2 text-gray-500 font-thin" />
            </div>
          </div>
        </div>
      </motion.div>
      <div className="mb-20 flex justify-center  w-[100%]">

          <hr className="w-[80%] border-gray-500" />    
      </div>
    </div>
  );
};

export default Suggestion;
