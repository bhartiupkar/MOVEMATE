import React from 'react';
import Container3D from '../Animations/Container3D'
const ShowFounder = ({ item }) => {
  return (

    
    <div className="flex flex-col items-center gap-3 p-4 ">
      
      {/* Circular Image */}
      <Container3D anglex={50} angley={20}>
      <div className="w-24 h-24 sm:w-48 sm:h-48 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border transform transition-transform duration-500 ease-in-out hover:scale-110">
  <img
    src={item.image}
    alt={item.name}
    className="w-full h-full object-cover"
  />
</div>


          </Container3D>

      {/* Info Card */}
      <div className="w-full font-bold  max-w-xs shadow-xl rounded-2xl p-4 text-center">
        <div className="text-l sm:text-l font-normal">{item.name}</div>
        <div className="font-normal">{item.position}</div>
      </div>

    </div>
  );
};

export default ShowFounder;
