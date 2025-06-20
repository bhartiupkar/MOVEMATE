import React, { useContext, useState } from 'react'
import Login from './Login'
import Register from './Register'
import { AuthContext } from '../../context/AuthContext'
import MovingMoveMate from '../../components/Animations/MovingMoveMate'
import Container3D from '../../components/Animations/Container3D'
import { motion } from 'framer-motion'

const LoginSignupFlip = () => {
  const [page, setPage] = useState("login")
  const { user } = useContext(AuthContext)




  return (
    <div>
      {user ? (<>
      <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-amber-200 to-amber-400'>
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-10 p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* Moving Text */}
        <Container3D>
          <div className=' self-start space-y-4 hover:bg-slate-100 rounded-2xl'>
            <MovingMoveMate word="ALREADY" />
            <MovingMoveMate word="LOGGED IN" />
          </div>
        </Container3D>

        {/* Welcome Card */}
        <Container3D>
          <div className=" bg-white p-8 rounded-xl shadow-2xl max-w-md text-center hover:scale-105 transition-transform duration-300">
            <h1 className="text-4xl font-extrabold text-purple-700 mb-4">
              Welcome to MoveMate!
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed h-100">
              MoveMate is your trusted partner in seamless relocation and logistics.
              Whether you're shifting homes or moving businesses, we provide end-to-end solutions
              designed to make your experience smooth, safe, and stress-free. With our smart tracking system,
              secure packaging, and dedicated team, you can rest easy knowing your belongings are in expert hands.
            </p>
          </div>
        </Container3D>

      </motion.div>
    </div>

      </>) : <>


        {page === "login" ? (<Login page={page} setPage={setPage} />) : (<Register page={page} setPage={setPage} />)}
      </>
      }
    </div>
  )
}

export default LoginSignupFlip
