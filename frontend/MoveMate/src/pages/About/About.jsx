import React, { useRef } from "react";
import AppLayout from "../../components/Layout/AppLayout";
import { motion } from "framer-motion";
import MoveHorVer from "../../components/Animations/MoveHorVer";
import Container3D1 from "../../components/Animations/Container3d1";
import BouncingCircle from "../../components/Animations/BouncingCircle";
import ComingText from "../../components/Animations/ComingText";
import OurMission from "./OurMission";
import OurVision from "./OurVision";
import LogsCard from "../../components/Cards/LogsCard";
const About = () => {
  const scrollRefAbout = useRef(null);
  const handleClick = () => {};
  return (
    <div className="">
      <div className="  my-2  p-2">
        <div className="flex pr-8 ">
          <ComingText />

          <div className="w-[25%] flex flex-col items-center justify-center">
            <hr className="h-40   border-[1px] border-gray-400" />
          </div>
          <Container3D1 anglex={30} angley={15}>
            <motion.div
              initial={{ rotateY: 180 }} // Start flipped
              animate={{ rotateY: 0 }} // Flip to front
              transition={{ duration: 1.2 }}
              className="shadow-[0_-4px_12px_rgba(0.15,0,0,0.15)] my-6  py-20   rounded-[44px] px-10 m-1"
            >
              <MoveHorVer />
            </motion.div>
          </Container3D1>
        </div>
        <div className=" w-full-screen items-center">
          <button className=" overflow-hidden w-full cursor-pointer">
            <BouncingCircle handleClick={handleClick} />
          </button>
        </div>
        <div className="mt-20   flex flex-col mb-50">
          <LogsCard />
        </div>
        <div className="flex shadow-[0_-4px_12px_rgba(0,0,0,0.15)] bg-slate-100 rounded-t-[60px] mx-4 flex-col">
          <div className=" h-28"></div>
          <OurMission />
          <div className=" w-full  my-24 flex justify-center ">
            <hr className="  rounded-full  border-gray-400 w-[1000px]" />
          </div>
          <OurVision />
        </div>
      </div>
    </div>
  );
};

export default AppLayout()(About);
