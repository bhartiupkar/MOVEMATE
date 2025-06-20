import React from 'react';

const ThreeDCardDemo = ({ children, pos, className = '' }) => {
    const tailwindClasses = [
  'bg-green-900/30', 'bg-red-900/30', 'bg-yellow-900/30', 'bg-indigo-900/30',
  'bg-green-900/30', 'bg-black', 'bg-blue-900/30'
];



  const rotationClass = pos === 1
    ? 'hover:rotate-[10deg]'
    : 'hover:-rotate-[10deg]';

  return (
    <div
      className={`rounded-md shadow-4xl m-1 text-6xl  font-light flex justify-center text-center ${tailwindClasses[Math.round(Math.random()*100)%7]} transition-transform duration-500 ${rotationClass} hover:scale-105 cursor-pointer overflow-hidden h-full ${className}`}
    >
      {children}
    </div>
  );
};

export default ThreeDCardDemo;
