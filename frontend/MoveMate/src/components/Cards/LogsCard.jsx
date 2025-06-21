import React from 'react'
import ShowLog from './ShowLog'
import { logData } from '../../assets/lists/logData'
import { motion } from 'framer-motion'
const LogsCard = () => {
    console.log("here image item ", logData)
  return (
    <div className='h-full  '>
    <div className='flex  border-1 border-slate-50 mx-5 rounded-[65px] bg-slate-100 shadow-[0_-4px_12px_rgba(0,0,0,0.55)] pt-10 pb-30  flex-col h-full items-center justify-evenly'>
            <div className='mb-20 flex flex-col items-center'>
            <motion.h1 
                  initial={{ opacity: 0, y: 100, rotate: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}   className='text-7xl font-light  p-2 '>Travel Statistics</motion.h1>
            <hr className='border-1 w-40'/>
            </div>
      <motion.div 
                  initial={{ opacity: 0, y: 100, rotate: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.2, ease: "easeOut" }} className='   h-full w-full gap-10 flex sm:flex-col md:flex-row justify-around'> 
        {
            logData.map((log, index) =>{
                return (
                    <ShowLog key={index} log={log} />
                )
            }
            )
        }
    
      </motion.div>
      <div className='  flex flex-col items-center'>
      <div className=' w-full border-1 border-gray-400  px-2 my-8 py-2 rounded-full '>

      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque voluptatem id deserunt.</div>
      </div>
      
    </div>
    </div>
  )
}

export default LogsCard
