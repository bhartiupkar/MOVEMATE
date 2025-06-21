import React, { useState } from "react";
import { reviewList } from "../../assets/lists/review";
import ShowReview from "./ShowReview";
import { motion } from "framer-motion";
const Review = () => {
  const [active, setActive] = useState(0);

  const handlePrev = () => {
    return setActive((prev) => (prev > 0 ? prev - 1 : reviewList.length - 1));
  };
  const handleNext = () => (prev < reviewList.length - 1 ? prev + 1 : 0);

  return (
    <div className="  mt-20  mb-10 px-20 py-10">
      <div className=" text-5xl mx-4   mb-12 text-black font-normal flex flex-col justify-self-start">
        <motion.h1
          initial={{ opacity: 0, x: -500 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2 }}
        >
          Review
        </motion.h1>
        <motion.hr
          initial={{ opacity: 0, x: 500 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 2 }}
          className="w-16 border-black mt-2 ml-0.5 border-[2px] rounded-full"
        />
        <h5 className="font-medium text-[16px] bg-yellow-300 px-3 rounded-full py-1 mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          excepturi velit! Accusamus.
        </h5>
      </div>
      <div className="p-4 ">
        <motion.div initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2 }} className=" border-1 cursor-pointer h-[24rem] p-4 shadow-2xl text-black bg-slate-100  overflow-y-auto  rounded-3xl scrollbar-hide ">
          <div>
            {reviewList.map((item, index) => {
              let last = index == reviewList.length - 1 ? true : false;

              return <ShowReview key={index} item={item} last={last} />;
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Review;
