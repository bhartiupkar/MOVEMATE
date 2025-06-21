import React from 'react'

const VerHorLines = () => {
  return (
    <div className="flex flex-col gap-8 m-2 w-full ">
          <div className=" flex gap-8 ">
          <div className="w-80"></div>

          <hr className="h-32 border-3 rounded-full w-0"/>
          <hr className="h-32 border-3 rounded-full w-0"/>
          <hr className="h-32 border-3 rounded-full w-0"/>
          </div>
          <div className="flex gap-2 ">

          <div className="w-80"></div>
          <div className="flex  flex-col gap-4">
            <hr className="w-32 border-3 rounded-full "/>
          <hr className="w-32 border-3 rounded-full "/>
          <hr className="w-32 border-3 rounded-full "/>
          </div>
          </div>

          
          </div>
  )
}

export default VerHorLines
