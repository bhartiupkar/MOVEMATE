import React from 'react';
import Container3D1 from '../Animations/Container3d1';
import flight from '../../assets/images/reviewUser.jpg';

const ProfileInfoCard = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-100 border-gray-200 rounded-[40px] shadow-[0_-4px_12px_rgba(0,0,0,0.5)] p-6 md:p-10 gap-6 md:gap-0">
      
      {/* Image Section */}
      <div className="w-full md:w-1/3 flex justify-center items-center py-4 md:py-8">
        <Container3D1>
          <div className="w-40 h-40 md:w-48 md:h-48 border border-gray-400 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={flight}
              alt="Profile"
            />
          </div>
        </Container3D1>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:flex w-px bg-gray-300 mx-6" />

      {/* Details Section */}
      <div className="w-full md:w-2/3">
        <div className="flex flex-col gap-6">
          {/* Name */}
          <div>
            <p className="text-lg font-semibold mb-1 underline">Name</p>
            <p className="text-xl bg-black text-white px-4 py-2 rounded-full inline-block">Aditya Bharti</p>
          </div>

          {/* State & City */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <div>
              <p className="text-lg font-semibold mb-1 underline">State</p>
              <p className="text-md bg-black text-white px-3 py-1.5 rounded-full inline-block">Bihar</p>
            </div>
            <div>
              <p className="text-lg font-semibold mb-1 underline">City</p>
              <p className="text-md bg-black text-white px-3 py-1.5 rounded-full inline-block">Patna</p>
            </div>
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <div>
              <p className="text-lg font-semibold mb-1 underline">Email ID</p>
              <p className="text-md bg-black text-white px-3 py-1.5 rounded-full inline-block">aditya@email.com</p>
            </div>
            <div>
              <p className="text-lg font-semibold mb-1 underline">Phone No.</p>
              <p className="text-md bg-black text-white px-3 py-1.5 rounded-full inline-block">+91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoCard;
