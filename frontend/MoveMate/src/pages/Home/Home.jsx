import React, { useState, useEffect } from 'react';
import HERO_IMAGE from '../../assets/HERO_IMAGE.png';
import Navbar from '../../components/Layout/Navbar';
import LinkCard from '../../components/Cards/LinkCard';
import { LuCar, LuLuggage } from 'react-icons/lu';
import MovingMoveMate from '../../components/Animations/MovingMoveMate';
// Framer Motion Variants


const Home = () => {
  return (
    <div>
      <Navbar />

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

            <button onClick={() => { }} className="btn btn-primary">
              Get Started
            </button>
          </div>
        </div>

        {/* Animated MOVEMATE Line */}
        <div className="flex  items-center relative bottom-16 left-4 gap-4 w-full justify-center mt-20">
         
        <MovingMoveMate/>
        </div>
      </div>
    </div>
  );
};

export default Home;
