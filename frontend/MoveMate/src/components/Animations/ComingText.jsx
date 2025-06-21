import React from 'react'
import { motion } from 'framer-motion'
const ComingText = () => {
  return (
    <div className="flex flex-col text-5xl font-bold p-20">
            <div className="flex gap-4">
              <motion.span
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              >
                MOVEMATE!
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              >
                for
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 600 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              >
                the
              </motion.span>
            </div>
            <div className="flex gap-4">
              <motion.span
                initial={{ opacity: 0, y: 800 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              >
                Developing
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 900 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              >
                World
              </motion.span>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3 }}
              className="flex gap-4 my-1 "
            >
              <hr className="border-2  rounded-full w-36 " />

              <hr className="border-2  rounded-full w-12 " />
              <hr className=" border-white rounded-full w-1 mt-1 ml-1 z-0 inset-0  " />
              <hr className="border-2  rounded-full w-36 " />
            </motion.div>
          </div>
  )
}

export default ComingText
