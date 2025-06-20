import React from 'react'
import { FaStarHalf, FaStarHalfAlt } from 'react-icons/fa'

const ShowReview = ({item,index, last}) => {
    
  return (
    <div className= ' text-black  m-6'>
      <div className="flex sm: flex-col lg:flex-row ml-2 md:ml-8 ">
        <div>
        <div className="w-24 h-24 rounded-full overflow-hidden m-12 mx-auto lg:mx-0 flex items-center justify-center">
  <img src={item.image} alt="Profile" className="object-cover w-full h-full" />
</div>

        </div>
      <div className='ml-2 md:ml-20 font-medium w-full flex flex-col text-3xl p-12 pr-20  border-black-50'> 
      <div className='flex gap-8 my-4'>
      <div className=' bg-red-400 px-2 rounded-full  font-medium text-2xl'>{item.name}</div>
      <FaStarHalfAlt className='m-1'/></div>

      <div className='text-sm font-medium max-w-[75%]'>{item.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolore beatae hic delectus sunt accusamus nihil dicta cum architecto iusto quasi repudiandae ea, doloribus earum, non iste suscipit molestiae. Magni! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quia mollitia non.</div>
      <div className='self-end px-2 py-1 rounded-full text-sm font-bold  bg-black text-white'>{item.date}</div>
        {/* <hr className='w-12 my-4' /> */}
      </div>
      </div>
       {!last&& <hr className='w-80 ml-40 border-2' />}
    </div>
  )
}

export default ShowReview
