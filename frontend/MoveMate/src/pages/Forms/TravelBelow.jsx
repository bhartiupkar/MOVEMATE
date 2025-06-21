import React from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown, FaArrowDown, FaRunning } from 'react-icons/fa';
import { LuBadgeIndianRupee, LuUser } from 'react-icons/lu';
import MoveMateAesthetic from '../../components/Animations/MoveMateAsthetic';
import Container3D from '../../components/Animations/Container3D';
import CustomDiv from '../../components/Animations/CustomDiv';
import CustomFadeInOut from '../../components/Animations/CustomFadeInOut';
const TravelBelow = () => {
  return (
    <motion.div className=' flex flex-col  p-10 m-3 gap-10  ' >


      <motion.div className='w-full bg-blue-100 shadow-[0_-4px_12px_rgba(0,0,0,0.75)]  flex rounded-4xl p-4 '>

        <motion.div className='w-1/3 flex flex-col gap-5 ' >
          <CustomDiv>

            <h1 className='text-8xl pl-10 w-full  font-thin'>
              When To Reconnect??
            </h1>
          </CustomDiv>
          <CustomFadeInOut>

            <p className='text-xl w-full pl-10 font-extralight pb-5 pt-30'>Thank you for reaching out. You can expect to reconnect with us shortly after your travel schedule is confirmed. Ideally, once you’ve finalized your departure and return dates—or have a clearer idea of your availability—we’d recommend reconnecting so we can proceed efficiently. This ensures that any pending tasks or updates are handled without delay upon your return. In the meantime, if you have limited availability but would still like to stay updated or coordinate on any part of the process, feel free to drop a message or email, and we’ll accommodate as best as possible..</p>

          </CustomFadeInOut>
        </motion.div>
        <div className='w-1/3 '></div>

        <div className="w-1/3  flex flex-col items-center    m-10 rounded-4xl justify-center">
          <motion.div
            className="w-full flex flex-col my-20 shadow-[0_-4px_12px_rgba(0,0,0,0.75)] py-12  rounded-4xl items-center justify-center gap-10 "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Heading */}
            <CustomDiv>
              <div className="flex items-center justify-center bg-slate-300  h-14 px-6 rounded-full text-lg font-semibold ">
                Key Features <FaArrowDown className="ml-2 animate-bounce" />
              </div>
            </CustomDiv>

            {/* Feature Items */}
            {[
              { label: "Fast ", icon: <FaRunning className="ml-2" /> },
              { label: "User Friendly ", icon: <LuUser className="ml-2" /> },
              { label: "Affordable ", icon: <LuBadgeIndianRupee className="ml-2" /> },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center shadow-[0_-4px_12px_rgba(0,0,0,.55)] bg-slate-300 border-2 px-6 py-2 w-4/5 rounded-full text-md font-medium"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
              >
                {item.label} {item.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>


      </motion.div>
      <div className='p-4 pb-20'>


        <motion.div className='flex    bg-slate-100 w-full border-1 border-gray-400 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]   p-6  rounded-t-4xl  '>

          <div className='w-1/2 '>


            <Container3D classPassed='pt-20 mx-10'>

              <MoveMateAesthetic />
            </Container3D>
          </div>
         

          <motion.div className='w-1/2 flex flex-col gap-5 ' >
            <CustomDiv from='right'>

              <h1 className='text-8xl   font-thin'>
                Why Us??
              </h1>
            </CustomDiv>
            <CustomFadeInOut>

              <p className='text-lg w-full font-extralight pt-8'>Thank you for reaching out. You can expect to reconnect with us shortly after your travel schedule is confirmed. Ideally, once you’ve finalized your departure and return dates—or have a clearer idea of your availability—we’d recommend reconnecting so we can proceed efficiently. This ensures that any pending tasks or updates are handled without delay upon your return. In the meantime, if you have limited availability but would still like to stay updated or coordinate on any part of the process, feel free to drop a message or email, and we’ll accommodate as best as possible. Safe travels and do let us know if we can assist in any way during your trip.</p>

            </CustomFadeInOut>
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  )
}

export default TravelBelow
