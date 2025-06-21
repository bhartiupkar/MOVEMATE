import React from "react";
import Container3D1 from "../Animations/Container3d1";

const ShowLog = ({ log, index }) => {
  const handeClick=()=>{

  }
  return (
    <Container3D1 anglex={10} angley={10}>
      <div className="w-full  max-w-xs mx-auto cursor-pointer">
        <div className="relative group overflow-hidden rounded-3xl shadow-lg bg-gray-200">

          {/* Image wrapper with fixed height and responsive width */}
          <div className="w-full h-64">
            <img
              src={log.image}
              alt="Flight"
              className="image-darken-7 w-full h-full object-cover transition duration-500 group-hover:brightness-50"
            />
          </div>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500">
            <p className="text-lg text-white font-semibold">
              {log.desc || "This is a description shown on hover."}
            </p>
          </div>

        </div>
        <div className="p-4">
        <div className="border-2">

        </div></div>
      </div>
    </Container3D1>
  );
};

export default ShowLog;
