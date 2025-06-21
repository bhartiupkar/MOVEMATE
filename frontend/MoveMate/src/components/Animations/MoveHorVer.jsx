import React from 'react'
import Container3D1 from './Container3d1'

const MoveHorVer = () => {
  return (
    <div>
        <div className='flex flex-col gap-2'>
        <div className='flex gap-3.5'>
            <Container3D1>

            <div className='h-8'>
            <span className=' bg-red-400 px-2 py-0.2 text-3xl rounded-full'>Destiny</span>
            </div>
            </Container3D1>
            <Container3D1>

            <div className='h-8'>

            <span className=' bg-green-400 px-2 py-0.1 text-2xl rounded-full'>Future</span>
            </div>
            </Container3D1>
            <Container3D1>

            <div className='h-10'>

            <span className=' bg-black  text-white px-2 py-0.2 text-xl rounded-full'>Services</span>
            </div>
            </Container3D1>
            <Container3D1>


            <div className='h-10'>

            <span className=' bg-blue-500 px-2 py-0.2 text-2xl rounded-full'>Transport</span>
            </div>
            </Container3D1>
        </div>
        <div className='flex gap-5'>
                <Container3D1>

            <div className='h-8'>

            <span className=' bg-yellow-400 px-1 py-[1.2px] rounded-full text-xl'>Income</span>
            </div>
                </Container3D1>
            <Container3D1>


            <div className='h-8'>

            <span className=' bg-gray-400 px-1 py-0.7 rounded-full text-xl'>Trust</span>
            </div>
            </Container3D1>
            <Container3D1>


            <div className='h-8'>

            <span className=' bg-indigo-400 px-[4px] py-[1px] rounded-full text-2xl'>Speed</span>
            </div>
            </Container3D1>
                <Container3D1 anglex={90} angley={45}>
            <div className='h-8'>

            <span className=' border-1 px-1 py-0.1 rounded-full text-xl font-semibold'>Robust</span>
            </div>
                </Container3D1>
        </div>

        </div>

    </div>
  )
}

export default MoveHorVer
