import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import AppLayout from "../../components/Layout/AppLayout";
import queryImage from "../../assets/images/catQuestion.jpeg";
import { motion } from "framer-motion";
import Container3D1 from "../../components/Animations/Container3d1";
const Contact = () => {
  return (
    <div className=" bg-gray-50   flex items-start gap-10 justify-around px-4 py-16">
      <motion.div initial={{opacity:1,x:-500}} animate={{opacity:1,x:0}} transition={{duration:1.5}}  className="w-full max-w-[50%] bg-slate-100 shadow-[0_-4px_12px_rgba(0,0,1,0.15)] rounded-2xl p-8 md:p-12">
        {/* Title */}
        <span className="text-4xl font-light text-white bg-black py-1 px-2 rounded-full mb-4">
          Contact Us
        </span>
        <span className="font-bold ml-2 bg-red-400 px-3 rounded-full text-4xl">
          ?
        </span>
        <p className="text-black mt-3 pl-2 font-extralight ">
          Have a question or need support? We’d love to hear from you!
        </p>
        <motion.hr initial={{opacity:1,x:-500}} animate={{opacity:1,x:0}} transition={{duration:2}} className="  rounded-full my-1 w-[437px]  mb-8 ml-2" />

        {/* Layout: Form + Info */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block mb-1 font-medium text-black">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-black  focus:ring-2 focus:ring-black rounded-2xl focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-black">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-black  focus:ring-2 focus:ring-black rounded-2xl focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-black">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full px-4 py-2 border border-black  focus:ring-2 focus:ring-black rounded-2xl focus:outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black rounded-4xl text-white py-2 px-4 cursor-pointer hover:bg-gray-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info with Icons */}
          <div className="flex flex-col gap-6 text-gray-700 text-sm">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500 text-xl" />
              <Container3D1>

              <span className=" bg-red-400 font-bold px-2 py-1 rounded-full">
                support@example.com
              </span>
              </Container3D1>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-500 text-xl " />
              <Container3D1>

              <span className=" bg-yellow-400 font-bold px-2 py-1 rounded-full ">
                +91 98765 43210
              </span>
              </Container3D1>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-500 text-xl" />
              <Container3D1>

              <span className=" bg-sky-500 font-bold px-2 py-1 rounded-full ">
                123 Business St, Delhi, India
              </span>
              </Container3D1>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex flex-col">
        

        <motion.div initial={{opacity:1,y:-500}} animate={{opacity:1,y:0}} transition={{duration:1}}   className=" p-2 bg-slate-400 border-1 rounded-xl w-[90%] shadow-[0_-4px_12px_rgba(0,0,0,0.15)] ">
          <img className="w-full rounded-2xl h-full" src={queryImage} alt="" />
        </motion.div>
        
        <div className="mt-10 flex flex-col gap-3">
          <motion.div initial={{opacity:1,y:200}} animate={{opacity:1,y:0}} transition={{duration:1}}  className="font-thin text-5xl">Feel Free to Connect </motion.div>
          <motion.hr initial={{opacity:1,x:500}} animate={{opacity:1,x:0}} transition={{duration:1}} className="w-44  rounded-full" />
          <motion.div initial={{opacity:1,y:400}} animate={{opacity:1,y:0}} transition={{duration:1}}  className="font-thin  text-4xl">with us !!</motion.div>
          <motion.hr initial={{opacity:1,x:500}} animate={{opacity:1,x:0}} transition={{duration:1}}  className="w-22 font-thin rounded-full"/>
        </div>
      </div>
    </div>
  );
};

export default AppLayout()(Contact);
