import React from 'react';
import HERO_IMAGE from '../../assets/HERO_IMAGE.png';
import NOT_FOUND_IMG from '../../assets/NOT_FOUND_IMG.png';
import ThreeDCardDemo from './BlockAnimation'
import { motion } from 'framer-motion';

const RotatedBlocks = ({ImageArr}) => {
    let ImageArray=ImageArr||[];

    while(ImageArray.length<9){
        ImageArray.push(HERO_IMAGE)
        ImageArray.push(NOT_FOUND_IMG)
    }
  return (
    <div className="flex flex-col   justify-center items-center my-10 py-10 px-10 rounded-3xl bg-slate-100 shadow-[0_-4px_12px_rgba(0,0,0.15,0.15)] gap-2">
      <motion.div className="flex gap-[10px] h-[180px] overflow-hidden px-0 max-w-[420px] w-full">
        <ThreeDCardDemo pos={1} className="flex-[2]">
          <img
            src={HERO_IMAGE}
            alt="block-1"
            className="w-full h-full object-cover"
          />
        </ThreeDCardDemo>

        <ThreeDCardDemo pos={0} className="flex-[3]">
          <img
            src={NOT_FOUND_IMG}
            alt="block-2"
            className="w-full h-full object-cover"
          />
        </ThreeDCardDemo>

        <ThreeDCardDemo pos={1} className="flex-[1]">
          <img
            src={HERO_IMAGE}
            alt="block-3"
            className="w-full h-full object-cover"
          />
        </ThreeDCardDemo>
      </motion.div>
      





      <motion.div className="flex gap-[2px] h-[90px] overflow-hidden px-0 max-w-[420px] w-full">

        <ThreeDCardDemo pos={0} className="flex-[3]">
          <img
            src={NOT_FOUND_IMG}
            alt="block-2"
            className="w-full h-full object-cover"
          />
        </ThreeDCardDemo>

        <ThreeDCardDemo pos={1} className="flex-[2]">
          <img
            src={HERO_IMAGE}
            alt="block-1"
            className="w-full h-full object-cover"
          />
        </ThreeDCardDemo>
        <ThreeDCardDemo pos={1} className="flex-[1]">
          <img
            src={HERO_IMAGE}
            alt="block-3"
            className="w-full h-full object-cover"
          />
        </ThreeDCardDemo>
        <ThreeDCardDemo pos={1} className="flex-[2]">
          <img
            src={HERO_IMAGE}
            alt="block-3"
            className="w-full h-full object-cover"
          />
        </ThreeDCardDemo>
      </motion.div>

      <motion.div className="flex gap-[2px] h-[90px] overflow-hidden px-0 max-w-[420px] w-full">
        <ThreeDCardDemo pos={1} className="flex-[2]">
          <img
            src={HERO_IMAGE}
            alt="block-1"
            className="w-full h-full object-cover"
          />
        </ThreeDCardDemo>

        

        <ThreeDCardDemo pos={1} className="flex-[1]">
          <img
            src={HERO_IMAGE}
            alt="block-3"
            className="w-full h-full object-cover"
          />
        </ThreeDCardDemo>
      </motion.div>



    </div>
  );
};

export default RotatedBlocks;
