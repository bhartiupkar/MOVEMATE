import React, { useState, useEffect, useRef } from "react";
import HERO_IMAGE from "../../assets/HERO_IMAGE.png";
import Navbar from "../../components/Layout/Navbar";
import LinkCard from "../../components/Cards/LinkCard";
import { LuCar, LuLuggage } from "react-icons/lu";
import AppLayout from "../../components/Layout/AppLayout";
import MovingMoveMate from "../../components/Animations/MovingMoveMate";
import OurMission from "../About/OurMission";
import { motion } from "framer-motion";
import MoveHorVer from "../../components/Animations/MoveHorVer";
import Container3D1 from "../../components/Animations/Container3d1";
import { FaArrowRight } from "react-icons/fa";
import BouncingArrow from "../../components/Animations/BouncingCircle";
import OnlyImageCard from "../../components/Cards/OnlyImageCard";
import Suggestion from "../../components/Cards/Suggestion";
// Framer Motion Variants

const founder = true;
const review = true;
const Home = () => {
    const scrollRef = useRef(null)

    const handleGotoAbout=()=>{
      window.location.href="/about";
    }
    const handleArrowClick =()=>{
      console.log("clicked")
      scrollRef.current?.scrollIntoView({behavior:'smooth'})
    };


  return (
    <div className="flex-col  mb-20 ">
      <div className="pt-10 pl-5 md:flex justify-between px-40 h-screen gap-8 ">
        {/* Hero Section */}
        <div className="pl-10">
          <div className="bg-[url('/HERO_IMAGE.png')] bg-center bg-no-repeat bg-cover w-[600px] h-[600px] rounded-3xl flex flex-col items-start p-8 text-white">
            <p className="mb-6 mt-40 mr-40 text-6xl text-gray-800/90 font-bold">
              Welcome to
            </p>
            <p className="mb-6 mr-40 text-5xl text-gray-800/90 font-bold">
              MoveMate
            </p>

            <button onClick={() => {}} className="btn btn-primary">
              Get Started
            </button>
          </div>
        </div>

        {/* Animated MOVEMATE Line */}
        <div className="flex  items-center gap-4 w-full justify-center mt-20 pl-10">
          <MovingMoveMate />
        </div>
      </div>
      <div className="flex justify-center">

      <hr  className="w-[90%] items-center"/>
      </div>
      <div className="h-[400px] mt-10">
      
          <OnlyImageCard handleBounceClick={handleArrowClick}/>
      </div>
      <div className="mt-28  ">
        <div ref={scrollRef} className="flex   h-full  pt-15 mb-40  my-2  shadow-[0_-4px_12px_rgba(0.5,0,0,0.3)] bg-slate-100 rounded-[80px] mx-4 flex-col">
            <div className="h-full    m-8 p-4 flex flex-col gap-8">
              <div className="">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1 }}
                  className="border-1 border-gray-500  fit  px-13 text-md  bg-slate-200 rounded-[50px] py-3"
                >
                  Our Mission & Vision
                </motion.span>
              </div>
              <motion.div className=" text-4xl md:text-6xl lg:text-8xl font-thin w-[80%] py-6 flex flex-wrap gap-2">
                <motion.span
                  className="inline-block mr-4"
                  initial={{ opacity: 0, y: 100, rotate: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  Creating
                </motion.span>

                <motion.span
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 100, rotate: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  an Ecosystem
                </motion.span>

                <motion.span
                  className="inline-block mr-4"
                  initial={{ opacity: 0, y: 100, rotate: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                >
                  for
                </motion.span>

                <motion.span
                  className="inline-block mr-4"
                  initial={{ opacity: 0, y: 100, rotate: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                >
                  Customers
                </motion.span>

                <motion.span
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 100, rotate: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                >
                  with Customers
                </motion.span>
              </motion.div>

              <div className="flex w-full">
                <motion.div initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2 }} className="w-[60%]">Nurturing the Future by using each and every unused services
                <hr className="w-[430px]"/>
                </motion.div>
                <div>
                  <Container3D1>
                    <motion.div initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2 }} className=" py-6 self-end mr-10 px-4 border-1 rounded-[40px] shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
                      <MoveHorVer />
                    </motion.div>
                  </Container3D1>
                </div>
              </div>
              <div className="flex w-full px-8 mt-10">

              <hr className="w-full border-gray-300" />
              </div>
              <motion.div initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.8 }} className="w-full h-full  flex gap-20">
                <div className="w-2/3 "> 
                <div className=" text-lg py-10 px-4 ml-15 w-1/2 mt-2"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sed temporibus labore nobis! Repellendus eligendi reiciendis asperiores hic voluptate, a quod delectus accusamus, dolores, quo necessitatibus beatae id dolor ducimus quae velit!</div>
                </div>
                <div className="flex flex-col justify-center items-center" >
                <div onClick={handleGotoAbout} className=" flex   cursor-pointer text-lg border-1 px-14 bg-gray-200  hover:bg-gray-400  py-2 rounded-full">  Goto About Us <FaArrowRight className="mt-1 ml-2 text-gray-500 font-thin"/></div> 
                </div>



              </motion.div>
            </div>
        </div>
      </div>
      <div className=" mt-20">
        <Suggestion/>
      
      </div>
    </div>
  );
};

// Wrap Home with layout and pass props
export default AppLayout({ founder, review })(Home);
// export default Home;
