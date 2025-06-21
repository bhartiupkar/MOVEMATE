import React from 'react'
import Container3D1 from './Container3d1'

const ItemsNormalBg = () => {
  return (
    <div>
        <div className='flex flex-col gap-2'>
        <div className='flex gap-3.5 font-thin'>

            <div className='h-8 font-thin'>
            <span className=' border-1 px-2 py-0.2 text-2xl rounded-full'>Destiny</span>
            </div>

            <div className='h-8'>

            <span className=' border-1 px-2 py-0.1 text-1xl rounded-full'>Future</span>
           </div>

            <div className='h-10'>

            <span className=' border-1  px-2 py-0.2 text-xl rounded-full'>Services</span>
            </div>


            <div className='h-10'>

            <span className=' border-1 px-2 py-0.2 text-1xl rounded-full'>Transport</span>
            </div>
        </div>
        <div className='flex gap-5 font-thin'>

            <div className='h-8'>

            <span className=' border-1 px-1 py-[1.2px] rounded-full text-xl'>Income</span>
            </div>


            <div className='h-8'>

            <span className=' border-1 px-1 py-0.7 rounded-full text-xl font-thin'>Trust</span>
            </div>
            <div className='h-8'>

            <span className=' border-1 px-[5px] py-[1px] rounded-full text-xl font-thin'>Speed</span>
            </div>
            <div className='h-8'>

            <span className=' border-1 px-3 py-[1px] rounded-full text-xl font-thin'>Robust</span>
            </div>
        </div>

        </div>

    </div>
  )
}

export default ItemsNormalBg;
