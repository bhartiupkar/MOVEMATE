import React from 'react';

const ShowFounder = ({ item }) => {
  return (
    <div className="flex flex-col items-center gap-3 p-4 ">
      
      {/* Circular Image */}
      <div className="w-24 h-24 sm:w-48 sm:h-48 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info Card */}
      <div className="w-full font-bold  max-w-xs shadow-xl rounded-2xl p-4 text-center">
        <div className="text-l sm:text-l font-normal">{item.name}</div>
        <div className="font-normal">{item.position}</div>
      </div>

    </div>
  );
};

export default ShowFounder;
