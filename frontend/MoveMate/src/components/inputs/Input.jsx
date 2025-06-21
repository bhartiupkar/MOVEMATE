import React, {useState} from 'react'
import {FaRegEye,FaRegEyeSlash} from 'react-icons/fa6'


const Inputs = ({name,value,onChange, label,placeholder,type,labelClass}) => {
    const [showPassword,setShowPassword]=useState(false);
    const toggleShowPassword=()=>{
        setShowPassword(!showPassword)
    }
    
  return (
    <div className=' '>
        <label className={` ${labelClass?labelClass: 'text-[13px] text-black '}`}>{label}</label>     
        <div className='input-box'>
            <input
            type={
                type=="password"?(showPassword?'text':'password'):type
            }
            name={name}
            placeholder={placeholder}
            className='w-full bg-transparent outline-none'
            value={value}
            onChange={(e)=>onChange(e)}/>
            {type==='password'&&(
                <>
                {showPassword?(
                    <FaRegEye
                    size={22}
                    className='text-primary cursor-pointer'
                    onClick={()=>toggleShowPassword()}
                />
                ):(
                    <FaRegEyeSlash
                    size={22}
                    className='text-slate-400 cursor-pointer'
                    onClick={()=>toggleShowPassword()}/>
                )}
                </>
            )}

        </div>
    </div>
  )
}

export default Inputs
