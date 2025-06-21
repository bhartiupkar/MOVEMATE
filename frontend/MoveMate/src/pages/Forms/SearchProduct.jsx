import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cityList, states } from '../../utils/helper';
import DropDownInput from '../../components/inputs/DropDownInput';
import MovingMoveMate from '../../components/Animations/MovingMoveMate';
import Input from '../../components/inputs/Input';
import AppLayout from '../../components/Layout/AppLayout';
import ReverseMoveMate from '../../components/Animations/ReverseMoveMate';
import CardCollection from '../../components/ProvideCards/CardCollection'
import { sampleData } from '../../utils/data';
import ImageInput from '../../components/inputs/ImageInput'
const SearchProduct = () => {
    const [startDate, setStartDate] = useState('');
    const [startCity, setStartCity] = useState('Patna');
    const [endCity, setEndCity] = useState('Dhanbad');
    const [loading, setLoading] = useState(false)
    const [startState, setStartState] = useState('Bihar');
    const [endState, setEndState] = useState('Jharkhand');
    const [message, setMessage] = useState('')
    const [cardsToShow, setCardsToShow] = useState([]);

    const [show, setShow] = useState(false)
    const handleCheck = () => {
        setLoading(true);
        setShow(true);
        setCardsToShow(sampleData);
        return ;

        //fetchCards


    }

    return (
        <motion.div className="sm:flex md:flex min-h-screen w-screen bg-gray-50 ">
            {/* Left side - Form (1/3) */}
            <motion.div

                initial={{ opacity: 1, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}

                className="md:w-1/3  p-10 flex flex-col justify-center gap-4 bg-gray-950/80  mx-4 my-6 rounded-[40px] shadow-[0_-4px_12px_rgba(1,1,1,0.15)] max-h-screen hover:bg-gray-900/80">
                <h2 className="text-4xl font-thin text-blue-100 text-center">
                    Search Available Product
                </h2>

                <DropDownInput
                    label="Start State"
                    options={states}
                    value={startState}
                    onChange={({ target }) => {
                        setStartState(target?.value);
                        setStartCity('');
                    }}
                    width="w-64"
                />

                <DropDownInput
                    label="Start City"
                    options={cityList?.[startState] || []}
                    value={startCity}
                    onChange={({ target }) => setStartCity(target?.value)}
                    width="w-64"
                />

                <DropDownInput
                    label="End State"
                    options={states}
                    value={endState}
                    onChange={({ target }) => {
                        setEndState(target?.value);
                        setEndCity('');
                    }}
                    width="w-64"
                />

                <DropDownInput
                    label="End City"
                    options={cityList?.[endState] || []}
                    value={endCity}
                    onChange={({ target }) => setEndCity(target?.value)}
                    width="w-64"
                />
                <div className=''>
                    <Input label="Start Date" type="date" labelClass='text-sm font-medium text-white' />



                </div>
                <div className='relative left-22'>

                    <button className='btn-secondary' onClick={handleCheck} >Check</button>
                </div>
            </motion.div>



            {/* Right side - Animation (2/3) */}

            


            {show ? (<div className=' w-2/3 px-10'>
                <CardCollection data={cardsToShow} />
            </div>) :

                <motion.div



                    className="w-2/3    flex flex-col items-center justify-center gap-10 px-10 py-16">

                    <div className="self-start text-8xl font-thin ">Search For</div>
                    <div className="self-start text-8xl font-thin ">Available Product</div>

                    <motion.div
                        initial={{ opacity: 1, x: 500 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                        className='self-start'
                    >

                        <ReverseMoveMate />
                    </motion.div>
                </motion.div>

            }

        </motion.div>
    );
};

// export default SearchProduct;
export default AppLayout()(SearchProduct) 
