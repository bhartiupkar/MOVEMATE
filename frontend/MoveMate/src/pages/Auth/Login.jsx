import React, { useEffect, useState } from 'react';
import Input from '../../components/inputs/Input';
import RotatedBlocks from '../../components/Animations/RotatedBlocks';
import { motion } from 'framer-motion';
import MovemateBlock from '../../components/Animations/MovemateBlock';
import Navbar from '../../components/Layout/Navbar';
import MovingMoveMate from '../../components/Animations/MovingMoveMate';
import AppLayout from '../../components/Layout/AppLayout';

const Login = ({ page, setPage }) => {
    const [flipped, setFlipped] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prev => !prev);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>

            {/* Auto-flipping heading */}
            <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}

                style={{ transformStyle: 'preserve-3d' }}
                className="relative transition-transform duration-700 flex items-center justify-center h-20 pt-2"
            >
                <MovingMoveMate />
            </motion.div>

            {/* Login Section */}
            <motion.div
                className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-12 bg-gray-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

            >
                {/* Animated Movemate block */}

                <motion.div
                    className="relative w-full h-full transition-transform duration-700"
                    animate={{ rotateY: flipped ? 180 : 0 }}
                    transition={{ duration: 2.5, ease: 'easeInOut' }}
                    style={{
                        transformStyle: 'preserve-3d',
                    }}

                >
                    <MovemateBlock />
                </motion.div>

                {/* Login Form */}
                <div className="w-full max-w-md border-2 border-gray-300 p-6 rounded-xl shadow-[0_-4px_12px_rgba(0,0,0.15,0.15)] bg-slate-200">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                    <div className="mb-4">
                        <Input
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                            label="Email Address"
                            placeholder="john@gmail.com"
                            type="text"
                        />
                    </div>

                    <div className="mb-6">
                        <Input
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                            placeholder="Min 8 Characters"
                            label="Password"
                            type="password"
                        />
                    </div>
                    <p className='text-[13px] text-slate-800 mt-3' >Dont have acc yet ?{" "}



                        <button className='font-medium text-primary underline cursor-pointer' onClick={() => { setPage("register") }}>SignUp

                        </button>


                    </p>

                    <button className="btn btn-primary w-full">Login</button>

                    {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
                </div>
            </motion.div>
        </>
    );
};

export default AppLayout()(Login)
