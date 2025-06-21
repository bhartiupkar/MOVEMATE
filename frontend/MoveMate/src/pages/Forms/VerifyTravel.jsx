import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DropDownInput from '../../components/inputs/DropDownInput';
import { states, cityList } from '../../utils/helper';
import Input from '../../components/inputs/Input';
import ImageInput from '../../components/inputs/ImageInput';
import AppLayout from '../../components/Layout/AppLayout';
import { LuCircleAlert, LuTrainFront } from 'react-icons/lu';
import MoveMateSlogan from '../../components/Animations/MoveMateSlogan';
import { div } from 'framer-motion/client';
import TravelBelow from './TravelBelow';
import CustomDiv from '../../components/Animations/CustomDiv';
import PhotoSelector from '../../components/inputs/ImageInput';
import Container3D from '../../components/Animations/Container3D';
import MoveMateAesthetic from '../../components/Animations/MoveMateAsthetic';
const VerifyTravel = () => {
    const [travelData, setTravelData] = useState({
        pickUpCity: 'Patna',
        pickUpState: 'Bihar',
        dropState: 'Jharkhand',
        dropCity: 'Dhanbad',
        travelMode: 'Train',
        startDate: '',
        endDate: '',
        travelDetails: '',
        imageUrl: '',
        imageProof: null,
    });
    const [errorMsg, setErrorMsg] = useState(null);

    const validateInputs = (e) => {

        const errors = [];

        const start = new Date(travelData.startDate).getTime();
        const end = new Date(travelData.endDate).getTime();
        const now = Date.now();

        if (!travelData.startDate || !travelData.endDate) {
            errors.push("Fill the dates. ");
        } else if (start < now || start > end) {
            errors.push("Please fill valid dates ");
        }

        if (!travelData.travelDetails.trim()) {
            errors.push("Provide travel details. ");
        }

        if (!travelData.imageUrl) {
            errors.push("Please provide either vehicle number or ticket picture. ");
        }

        if (errors.length > 0) {
            console.log(errors);
            setErrorMsg(errors);
            return;
        }

        handleSubmit();
    };


    const handleChange = ({ target }) => {
        setErrorMsg(null)
        const { name, value } = target;
        setTravelData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = () => {

        console.log('Response validating');


        console.log(travelData)











        //API CALLS
        try {

        } catch (error) {

        }
    }


    return (

        <div className='flex-col '>

            <div className=" p-10 flex gap-10 min-h-screen  text-black">


                <motion.div
                    initial={{ opacity: 1, x: -500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    className=" w-2/5 flex flex-col  gap-6  p-4 border-2 rounded-4xl  shadow-[0_-4px_12px_rgba(0,0,0,1.75)"
                >
                    <CustomDiv>

                        <p className="py-5 font-light text-4xl"><span className=" border-black border-b-[0.5px] leading-none pb-0" >Add Your Travel Inf</span>o</p>
                    </CustomDiv>

                    <div className='flex gap-2'>
                        <div className='w-3/5'>

                            <DropDownInput
                                labelClass=" text-[20px]"
                                label="Pickup State"
                                name="pickUpState"
                                options={states}
                                value={travelData.pickUpState}
                                onChange={({ target }) =>
                                    setTravelData((prev) => ({
                                        ...prev,
                                        pickUpState: target.value,
                                        pickUpCity: '',
                                    }))
                                }
                            />
                        </div>
                        <div className='w-2/5'>

                            <DropDownInput
                                labelClass="text-[20px]"
                                label="Pickup City"
                                name="pickUpCity"
                                options={cityList[travelData.pickUpState] || []}
                                value={travelData.pickUpCity}
                                onChange={({ target }) => setTravelData((prev) => ({
                                    ...prev, pickUpCity: target.value
                                }))}
                            />
                        </div>
                    </div>


                    <div className='flex'>
                        <div className='w-3/5'>
                            <DropDownInput
                                labelClass="text-[20px]"
                                label="Drop State"
                                name="dropState"
                                options={states}
                                value={travelData.dropState}
                                onChange={({ target }) =>
                                    setTravelData((prev) => ({
                                        ...prev,
                                        dropState: target.value,
                                        dropCity: '',
                                    }))
                                }
                            />
                        </div>
                        <div className='w-2/5'>


                            <DropDownInput
                                labelClass="text-[20px]"
                                label="Drop City"
                                name="dropCity"
                                options={cityList[travelData.dropState] || []}
                                value={travelData.dropCity}
                                onChange={({ target }) => setTravelData((prev) => ({
                                    ...prev, dropCity: target.value
                                }))}
                            />

                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mt-4">
                        <DropDownInput
                            label="Mode of Travel"
                            labelClass="text-[20px]"
                            name="travelMode"
                            options={['Train', 'Personal Vechile', 'Flight']}
                            value={travelData.travelMode}
                            onChange={handleChange}
                            placeholder="Train, Bus, etc."
                            type="text"
                        />
                        <Input
                            label="Travel Details"
                            labelClass="text-[20px]"
                            name="travelDetails"
                            value={travelData.travelDetails}
                            onChange={handleChange}
                            placeholder="Ticket No. / Vehicle Info"
                            type="text"
                        />
                    </div>
                    <div className='flex  justify-between gap-2'>

                        <div className='w-full'>

                            <Input label="Start Date" labelClass="text-[20px]" value={travelData.startDate} name="startDate"
                                onChange={handleChange}
                                type="date"
                            />
                        </div>
                        <div className='w-full'>

                            <Input label="End Date" value={travelData.endDate} name="endDate" labelClass="text-[20px]"
                                onChange={handleChange}
                                type="date"
                            />
                        </div>
                    </div>

                    <div className="pt-6 flex-col items-center">
                        <p className="text-xl font-medium mb-1   ">Select Image</p>
                        <PhotoSelector
                            image={travelData.imageProof}
                            setImage={(val) => setTravelData(prev => ({ ...prev, imageProof: val }))}
                            preview={travelData.imageUrl}
                            setPreview={(val) => setTravelData(prev => ({ ...prev, imageUrl: val }))}
                            logo={<LuTrainFront />}
                            text="Travel Proof"
                        />

                    </div>
                    {(errorMsg) && (<div className='flex items-center gap-2 text-[11px] font-medium text-amber-600 bg-amber-100 px-2 py-0.5 my-1 rounded'>
                        <LuCircleAlert className='text-md' />{errorMsg}
                    </div>)}
                    <button
                        onClick={validateInputs}
                        type="submit"
                        className="mt-6 px-6 py-3 rounded btn-primary"
                    >
                        Submit
                    </button>
                </motion.div>

                {/* Right Divider and Content */}
                <motion.div className="w-0 border-r border-gray-300" />

                <motion.div
                    className="w-1/2 flex  items-center justify-center"
                    initial={{ opacity: 1, x: 500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className='flex items-center justify-center'>
                        {/* <CustomDiv from="right">

                            <p className='text-7xl p-5 '>Hover Here Bro....😁</p>
                        </CustomDiv> */}
                    </div>
                    {/* <MoveMateSlogan
                    // word={}
                    // pass here the which is being edited now means if the user is writing state name then pass the state name here and if the 
                    /> */}
                    <div className=''>
                        <CustomDiv from="right">
                            <Container3D classPassed='pt-20 mx-10'>

                                <MoveMateAesthetic classStyle='w-full flex justify-center items-center  text-7xl' />
                            </Container3D>
                        </CustomDiv>

                    </div>
                </motion.div>



            </div>
            <TravelBelow />
        </div>
    );
};

export default AppLayout()(VerifyTravel);
