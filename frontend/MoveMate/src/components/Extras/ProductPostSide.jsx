import React from 'react';
import RollingCircles from '../Animations/RollingCircle';
import FlowingCircles from '../Animations/FlowingBlock';
import FeaturesBlock from './FeaturesBlock';
import CustomDiv from '../Animations/CustomDiv';
import CustomFadeInOut from '../Animations/CustomFadeInOut';
import MoveMateSlogan from '../Animations/MoveMateSlogan'

const ProductPostSide = () => {
    return (
        <>

            <div className="flex flex-col gap-6  ">

                {/* Headline */}
                <div className='flex flex-col gap-4'>
                    <CustomDiv from='left'>

                        <h1 className="text-6xl md:text-7xl font-md leading-tight">
                            <span className="border-black border-b-[1px]">Have you</span> posted your product yet?
                        </h1>

                    </CustomDiv>
                    <h2 className="text-5xl md:text-6xl font-md flex flex-wrap items-center gap-2">
                        <span className="border-black border-b-[1px]">Don’t be late.</span>
                        <span className="border-black border-b-[1px]">Be smart</span> and use
                        <CustomDiv from='right'>
                            <span className="whitespace-nowrap font-semibold text-4xl md:text-6xl bg-clip-text text-transparent bg-[radial-gradient(circle,_#7182ff_0%,_#3cff52_100%)] bg-[length:200%_200%] animate-text-shine">
                                MOVEMATE
                            </span>
                        </CustomDiv>
                    </h2>
                </div>


                {/* Description */}
                <div className="text- text-gray-700  leading-relaxed py-10">

                </div>


                <CustomDiv>

                <h1 className='text-6xl font-light'>
                    When Will we connect??
                </h1>
                </CustomDiv>
                <CustomFadeInOut>

                <p className='font-light text-lg'>
                    Once you post your product on MoveMate, we start working instantly. Our system matches your delivery details with available and trusted transporters. As soon as someone accepts your request, you’ll receive an immediate email or app notification. No waiting in the dark — we keep you updated every step of the way. From approval confirmation to pickup scheduling and live tracking, you’ll always be in the loop. In case of any delay or query, our support team is just a message away. We connect quickly, clearly, and consistently — because your time and trust matter.
                </p>
                </CustomFadeInOut>
                <CustomDiv>
                    
                </CustomDiv>
                <CustomFadeInOut>

                <div className='flex items-center border-[1px] pr-40 rounded-4xl shadow-[0_-4px_12px_rgba(0,0,0,0.75)] bg-blue-100 justify-center'>

                <div className='pb-8 pl-6'>

                <MoveMateSlogan />
                </div>
                <p className='text-lg pl-30'>
                    At MoveMate, we simplify product delivery by connecting you with trusted transporters across India. Whether you're shipping from Patna to Dhanbad or anywhere else, our platform ensures secure handling, real-time updates, and prompt notifications. Once you post your product, our team notifies you via email when a transporter accepts your request—no delays, no confusion. We verify all transporters, ensuring your items are in reliable hands. With 24/7 support, transparent communication, and a commitment to timely delivery, MoveMate is the smart choice for individuals and businesses looking for hassle-free logistics. Post with confidence. Move with certainty.
                </p>
                </div>
                <div className='pt-8'>
                    <FeaturesBlock />

                </div>
                </CustomFadeInOut>

                
            </div>
        </>
    );
};

export default ProductPostSide;
