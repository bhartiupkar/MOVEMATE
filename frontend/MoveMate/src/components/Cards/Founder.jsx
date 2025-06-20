import React from 'react';
import { founderList } from '../../assets/lists/founder';
import ShowFounder from './ShowFounder';
import bgGrid from '../../assets/images/9517d01d-7535-4e2b-aef0-067fb0269650.jpg'

const Founder = () => {
  return (
    
    <div  className=' mx-10 mt-10 bg-slate-100  py-8 rounded-t-4xl shadow-[0_-4px_12px_rgba(0,0,0,0.15)]   my-8'>
      <div className="text-center ">
        <h1 className="font-bold text-4xl">Founders</h1>
        <hr className="w-16 mx-auto mt-2 border-t-3 rounded-full" />
      </div>

      <div className="mt-4  flex justify-evenly ">
        {
            founderList.map((item,index)=>{
                return(
                    
                        <ShowFounder key={index} item={item} />
                    
                )
            })
        }
      </div>
    </div>
  );
};

export default Founder;
