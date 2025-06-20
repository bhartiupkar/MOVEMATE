import React, { useState, useEffect, useMemo } from 'react';
import { changeorder } from '../../utils/helper';
import { motion } from 'framer-motion';
import BlockAnimation from './BlockAnimation';

const MovemateBlock = () => {
  const [moveMate, setMoveMate] = useState("MOVEMATE!");

  useEffect(() => {
    const interval = setInterval(() => {
      setMoveMate(prev => changeorder(prev));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Random directions for each block - consistent per render
  const randomPos = useMemo(() => Array.from({ length: 9 }, () => Math.round(Math.random() * 100) % 2), [moveMate]);

  return (
    <div className="flex flex-col text-3xl justify-center items-center my-10 py-10 px-10 rounded-3xl bg-slate-400/35 shadow-[0_-4px_12px_rgba(0,0,0.15,0.15)] ">
      
      <motion.div className='flex gap-[20px] h-[180px] px-0 max-w-[420px] w-full '>
        <BlockAnimation className='flex-[1] text-center border-2' pos={randomPos[0]}>
          {moveMate[0]}
        </BlockAnimation>
        <BlockAnimation className="text-center flex-[1] border-2" pos={randomPos[1]}>
          {moveMate[1]}
        </BlockAnimation>
        <BlockAnimation className="flex-[1] text-center border-2" pos={randomPos[2]}>
          {moveMate[2]}
        </BlockAnimation>
      </motion.div>

      <motion.div className='flex gap-[20px] h-[90px] overflow-hidden px-0 max-w-[420px] w-full'>
        <BlockAnimation className="flex-[1] text-center border-2" pos={randomPos[3]}>
          {moveMate[3]}
        </BlockAnimation>
        <BlockAnimation className="flex-[1] text-center border-2" pos={randomPos[4]}>
          {moveMate[4]}
        </BlockAnimation>
        <BlockAnimation className="flex-[1] text-center border-2" pos={randomPos[5]}>
          {moveMate[5]}
        </BlockAnimation>
        <BlockAnimation className="flex-[1] text-center border-2" pos={randomPos[6]}>
          {moveMate[6]}
        </BlockAnimation>
      </motion.div>

      <motion.div className='flex gap-[20px] h-[90px] overflow-hidden px-0 max-w-[420px] w-full'>
        <BlockAnimation className="flex-[1] text-center border-2 w-2xl" pos={randomPos[7]}>
          {moveMate[7]}
        </BlockAnimation>
        <BlockAnimation className="flex-[3] text-center border-2" pos={randomPos[8]}>
          {moveMate[8]}
        </BlockAnimation>
      </motion.div>
    </div>
  );
};

export default MovemateBlock;
