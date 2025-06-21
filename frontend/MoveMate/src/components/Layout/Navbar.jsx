import React, { useState, useRef, useEffect } from 'react';
import { LuMapPinPlus } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { HiOutlineDotsVertical } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const [isActive,setIsActive]=useState("home");


  return (
    // Parent wrapper: position relative
    <div className="px-2 z-50 sticky top-1.5 ">
      
      {/* Navbar */}
      <div className="navbar bg-gray-900  px-6 rounded-2xl py-1  shadow-lg flex flex-row justify-between items-center">
        {/* Logo */}
        <Link to='/'>
        <div className="flex items-center gap-2">
          <LuMapPinPlus size={30} />
          <span className="text-2xl font-bold text-white">MOVEMATE</span>
        </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center text-lg font-medium text-white">
          <Link to="/" className="transition-transform transform hover:scale-105 p-1">Home</Link>
          <Link to="/about" className="transition-transform transform hover:scale-105 p-1">About Us</Link>
          <Link to="/contact" className="transition-transform transform hover:scale-105 p-1">Contact</Link>
          <Link to="/travel-services" className="transition-transform transform hover:scale-105 p-1">Travel Services</Link>
          <Link to="/product-service" className="transition-transform transform hover:scale-105 p-1">Product Service</Link>
          <Link to="/auth">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>

        {/* Mobile Menu: Login and triple dot */}
        <div className="flex items-center lg:hidden gap-4">
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>

          {/* Triple Dot Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost">
            <HiOutlineDotsVertical size={25} color="white" />
          </button>
        </div>
      </div>

      {/* Completely separate dropdown: outside navbar flow */}
      {isOpen && (
        <ul
          ref={dropdownRef}
          className="absolute right-6 mt-2 bg-white rounded-lg shadow-xl border w-52 z-50 p-2 space-y-1"
        >
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to="/travel-services" onClick={() => setIsOpen(false)}>Travel Services</Link></li>
          <li><Link to="/product-service" onClick={() => setIsOpen(false)}>Product Service</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
