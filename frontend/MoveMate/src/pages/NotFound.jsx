import React from 'react';
import { useNavigate } from 'react-router-dom';
import NOT_FOUND_IMG from './../assets/NOT_FOUND_IMG.png'
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-600 flex flex-col items-center justify-center min-h-screen  px-4">
      <h1 className="text-6xl font-bold text-black mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className="text-gray-600 text-center mb-6">
        Sorry, the page you are looking for does not exist.
      </p>

      <button
        onClick={() => navigate('/')}
        className="btn btn-primary btn-wide"
      >
        Go Back Home
      </button>

      <div className="mt-8">
        <img
          src={NOT_FOUND_IMG}
          alt="Page not found"
          className="w-72 opacity-0.1"
        />
      </div>
    </div>
  );
};

export default NotFound;
