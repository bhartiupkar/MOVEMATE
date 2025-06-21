import React from 'react';

const ProductCard = ({
  name,
  startDate,
  endDate,
  cityFrom,
  stateFrom,
  cityTo,
  stateTo,
  commission,
  description,
  onClick,
}) => {
  return (
    <div
      className="w-full h-full  rounded-[50px] shadow-[0_-4px_12px_rgba(1,1,2,0.15)] p-6 hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col justify-between"
      onClick={onClick}
    >

      <h1 className="absolute text-[4rem] font-bold text-4xl text-black/5 -top-1.5 right-10 select-none pointer-events-none z-0">
        MOVEMATE
      </h1>
      <h2 className="text-3xl font-thin bg-slate-200 rounded-3xl w-fit px-2 text-black mb-4">{name}</h2>

      {/* Two-column content */}
      <div className="flex justify-between text-sm text-black gap-4">
        {/* Left Column: Locations */}
        <div className="space-y-1">
          <p>
            <span className="font-semibold text-black">From:</span> {cityFrom}, {stateFrom}
          </p>
          <p>
            <span className="font-semibold text-black">To:</span> {cityTo}, {stateTo}
          </p>
        </div>

        {/* Right Column: Dates and commission */}
        <div className="text-right space-y-1">
          <p>
            <span className="font-semibold text-gray-100">Start:</span> {startDate}
          </p>
          <p>
            <span className="font-semibold text-gray-100">End:</span> {endDate}
          </p>
          {commission && (
            <p className="text-green-400 font-semibold">
              ₹ {commission} commission
            </p>
          )}
          <button className='btn-primary'>Ciick me</button>
        </div>
      </div>

      {/* Description (bottom) */}
      {description && (
        <p className="text-xs text-gray-400 italic mt-4">
          {description}
        </p>
      )}
    </div>
  );
};

export default ProductCard;
