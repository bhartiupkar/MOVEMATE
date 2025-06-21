import React from 'react'
import FitRandom from '../Animations/FitRandom'
import BouncingArrow from '../Animations/BouncingCircle'
import { motion } from 'framer-motion'
const OnlyImageCard = ({handleBounceClick}) => {
  return (
    <div className='flex pt-4 flex-col h-full items-center'>
    <div className=' w-full flex flex-col items-center text-center mb-2 '> 
     <motion.h1  initial={{opacity:1,x:-500}} animate={{opacity:1,x:0}} transition={{duration:2}} className=' mt-6 text-7xl font-thin mb-2 '>What we Provide </motion.h1>
     <hr  className='w-24 mb-2 border-1 rounded-full '/>
    </div>
    <motion.div initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2 }} className=' font-light w-full pt-10 px-10 flex   h-full '>
        <div className='  w-[45%] flex flex-col px-4'>
        <div className='mx-4 my-2 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa vel labore minima suscipit, et magnam ex, repellendus doloremque assumenda quas soluta cumque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae sequi aspernatur corrupti. 
        </div>
        <div className='self-end mr-4'>

            <span className='px-6 py-2 text-[14px] font-light rounded-full border-2 border-gray-300 bg-gray-200 hover:bg-gray-400  cursor-pointer'> Travel Services</span>
        </div>
        </div>
        <div className=' w-[10%]'>

            <BouncingArrow handleClick={handleBounceClick} />
        </div>
        <div className='  w-[45%] flex flex-col px-4'>
        <div className='mx-4 my-2 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa vel labore minima suscipit, et magnam ex, repellendus doloremque assumenda quas soluta cumque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae sequi aspernatur corrupti. 
        </div>
        <div className='self-start ml-4 '>

            <span className='px-6 py-2 text-[14px] font-light rounded-full border-2 border-gray-300 bg-gray-200 cursor-pointer hover:bg-gray-400'> Travel Services</span>
        </div>
        </div>
    </motion.div>
      
    </div>
  )
}

export default OnlyImageCard
