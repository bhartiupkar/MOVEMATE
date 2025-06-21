import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DropDownInput from '../../components/inputs/DropDownInput';
import { states, cityList } from '../../utils/helper';
import Input from '../../components/inputs/Input';
import ProductPostSide from '../../components/Extras/ProductPostSide';
import ImageInput from '../../components/inputs/ImageInput'
import AppLayout from '../../components/Layout/AppLayout';
import { LuLuggage } from 'react-icons/lu';
import MoveMateAesthetic from '../../components/Animations/MoveMateAsthetic';

import { div } from 'framer-motion/client';
import ReverseMoveMate from '../../components/Animations/ReverseMoveMate'
import CustomDiv from '../../components/Animations/CustomDiv';
const PostProduct = () => {
    const [productData, setProductData] = useState({
        pickUpCity: 'Patna',
        pickUpState: 'Bihar',
        dropState: 'Jharkhand',
        dropCity: 'Dhanbad',
        productDesc: '',
        productValue: '',
        productWeight: '',
        imageUrl: '',
        productImage: null,
    });




    const handleSubmit = () => {



    }


    const textToShow = { text: "Every day, millions of people commute across cities and states in general class railway coaches—enduring long journeys, tight spaces, and limited resources. For many, this mode of travel isn't just a choice, but a necessity driven by financial constraints. But what if every journey could offer a chance to earn, without any extra effort? By carrying lightweight, verified products on their scheduled routes, travelers can make use of their travel time to generate extra income. It’s a simple, secure way to transform routine travel into an opportunity—making each mile more meaningful and rewarding. Let your journey do more than move you—let it move value.", title: 'Transforming Travel into Opportunity' }



    const handleChange = ({ target }) => {
        const { name, value } = target;
        console.log(name)
        setProductData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className='pt-4'>

            <ReverseMoveMate classStyle={`flex  flex-col  items-center justify-center w-[22rem] rounded-[50px] h-20 bg-yellow-400 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] px-6`} textSize={`3xl`} />
            <div className="px-20 flex gap-3  min-h-screen">
                <motion.div
                    initial={{ opacity: 1, x: -500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}

                    className="flex-col w-1/3 md:grid-cols-2 gap-6">
                    {/* Pickup State */}


                    <p className='py-5 font-light text-4xl'>Add Your Product</p>
                    <DropDownInput
                        labelClass="text-black text-[18px]"
                        label="Pickup State"
                        name="pickUpState"
                        options={states}
                        value={productData.pickUpState}
                        onChange={({ target }) => {
                            const { value } = target;
                            setProductData((prev) => ({
                                ...prev,
                                pickUpState: value,
                                pickUpCity: '' // reset city on state change
                            }));
                        }}
                    />

                    {/* Pickup City */}
                    <DropDownInput
                        labelClass="text-black text-[18px]"


                        label="Pickup City"
                        name="pickUpCity"
                        options={cityList[productData.pickUpState] || []}
                        value={productData.pickUpCity}
                        onChange={handleChange}
                    />

                    {/* Drop State */}
                    <DropDownInput
                        labelClass="text-black text-[18px]"


                        label="Drop State"
                        name="dropState"
                        options={states}
                        value={productData.dropState}
                        onChange={({ target }) => {
                            const { value } = target;
                            setProductData((prev) => ({
                                ...prev,
                                dropState: value,
                                dropCity: '' // reset city on state change
                            }));
                        }}
                    />

                    {/* Drop City */}
                    <DropDownInput
                        labelClass="text-black text-[18px]"


                        label="Drop City"
                        name="dropCity"
                        options={cityList[productData.dropState] || []}
                        value={productData.dropCity}
                        onChange={handleChange}
                    />

                    {/* Other Inputs */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            // labelClass="text-white text-[13px]"
                            labelClass='text-[18px]'

                            label="Product Value Rupees"
                            name="productValue"
                            value={productData?.productValue}
                            onChange={handleChange}
                            placeholder="Value of Product in Rupees"
                            type="text"
                        />


                        <Input
                            // labelClass="text-white text-[13px]"

                            label="Product Weight"
                            labelClass='text-[18px]'
                            name="productWeight"
                            value={productData.productWeight}
                            onChange={handleChange}
                            placeholder="12 Kg"
                            type="text"
                        />

                    </div>
                    <div className='pt-2'>
                        <p className='text-2xl font-light pl-0.5'>Product description </p>
                        <textarea

                            className="bg-gray-200 p-2 rounded-md w-full text-black outline-0"
                            rows="4"
                            name="productDesc"
                            value={productData.productDesc}
                            onChange={handleChange}
                        />


                    </div>
                    <div className='pt-10 flex-col self-start'>
                        <p className='text-black pb-2 pl-3 text-3xl font-light'>Select Image</p>
                        <div className='flex items-center justify-center pb-4 '>

                            <ImageInput
                                image={productData.productImage}
                                preview={productData.imageUrl}
                                setImage={(val) => setProductData(prev => ({ ...prev, productImage: val }))}
                                setPreview={(val) => setProductData(prev => ({ ...prev, imageUrl: val }))}
                                logo={<LuLuggage />} text="Product Image" on />
                        </div>
                    </div>

                    <button type='submit' className='btn-primary'>Submit</button>

                </motion.div>
                <motion.div className='w-0 h-100% my-50 border-[1px]'>

                </motion.div>
                <motion.div
                    className='w-2/3  '
                // initial={{ opacity: 1, x: 500 }}
                // animate={{ opacity: 1, x: 0 }}
                // transition={{ duration: 1.5 }}
                >
                    <div className='flex flex-col   justify-center  '>
                        <div className=' bg-black/20 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] rounded-3xl m-10'>

                            <MoveMateAesthetic classStyle='pt-30 pb-20 ' textToShow={textToShow} />
                        </div>

                    </div>

                </motion.div>


            </div>
            <hr className='mx-10' />
            <div className='pt-10 flex flex-col items-center justify-center '>
                        <CustomDiv className='py-3'>

                <p className='bg-red-400 px-2 py-1 mt-5 inline text-lg rounded-4xl '>
                    Travel anyway? Why not earn today! 💲
                </p>
                        </CustomDiv>
                        <CustomDiv className='py-3' from='right'>

                <p className='bg-yellow-400 py-1 px-2 mt-5 inline text-lg rounded-4xl '>
                    Empty hands? Carry dreams. With MOVEMATE. 👐
                </p>
                        </CustomDiv>
                        <CustomDiv className='py-3'>

                <p className='bg-black py-1 text-white px-2 mt-5 inline text-lg rounded-4xl '>
                    Miles turn to money with MOVEMATE 😏
                </p>
                        </CustomDiv>
                        <CustomDiv className='py-3' from='right'>

                <p className='bg-blue-200 py-1 px-2 mt-5 inline text-lg rounded-4xl '>
                    Let your journey earn. Choose MOVEMATE
                </p>
                        </CustomDiv>
            </div>
            <div className='p-10 px-20 pt-20'>
                <ProductPostSide />
            </div>
        </div>
    );
};

export default AppLayout()(PostProduct);
