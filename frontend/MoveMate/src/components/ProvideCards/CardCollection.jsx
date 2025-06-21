import { motion } from 'framer-motion';
import React, { useMemo } from 'react';
import ProductCard from '../Cards/ProductCard';
import { getRandomDirectionVariant } from '../../utils/helper'
import MovingMoveMate from '../Animations/MovingMoveMate';
import ReverseMoveMate from '../Animations/ReverseMoveMate';
import VibratingTiltingDiv from '../Animations/VibratingTiltingDiv';
const AppleCardsCarouselDemo = ({ data }) => {
    const dataToShow = data || [];
    const cardVariants = useMemo(
        () => dataToShow.map(() => getRandomDirectionVariant()),
        [dataToShow.length]
    );

    return (<>

        <div className='px-60 mt-10 self-center-safe'>

            <VibratingTiltingDiv>

                <ReverseMoveMate
                    textSize="text-s"
                    classStyle="flex  flex-col items-center justify-center w-[20rem] rounded-[20px] bg-yellow-400 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] px-6"
                />
            </VibratingTiltingDiv>
        </div>


        {dataToShow.length === 0 ? (<>
            <div>
                <div className='h-30'></div>
                <div className="self-start text-8xl font-thin ">Currently, </div>
                <div className="self-start text-8xl font-thin ">no available product</div>
                <div className="self-start text-8xl font-thin ">for your search 😴</div>
            </div>


        </>) : (
            <>



                <motion.div
                    className="flex flex-col  px-6 py-10 gap-5  "
                >
                    heloo
                    {dataToShow.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants[0]}
                            initial="hidden"
                            animate="visible"

                        >
                            <ProductCard {...item} />
                        </motion.div>
                    ))}
                </motion.div>


            </>
        )}
    </>
    );
}

export default AppleCardsCarouselDemo