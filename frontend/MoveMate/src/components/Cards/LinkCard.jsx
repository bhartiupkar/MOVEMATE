import React from 'react';
import { Link } from 'react-router-dom';


const LinkCard = ({ toNavigate, text, image,logo }) => {
  return (
    <Link to={toNavigate} className="no-underline">
      <div className="bg-gray-300 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center justify-between gap-6 w-80 h-48">
        {image && (
          <img
            src={image}
            alt={text}
            className="w-28 h-28 object-contain"
          />
        )}
        <p className="text-xl font-semibold text-gray-800 text-center px-2">
          {text}
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-3 text-lg hover:bg-blue-700 transition">
          <span>Drive</span>
          {logo&&<span>{logo}</span>}
        </button>
      </div>
    </Link>
  );
};

export default LinkCard;
