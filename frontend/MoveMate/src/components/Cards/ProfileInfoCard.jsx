import React,{useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';

import { useNavigate } from 'react-router-dom';
const ProfileInfoCard = ({  logo, text}) => {
  const { user, clearUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate('/');

    };

  return (
    <div className="p-4 ">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-lg text-white font-bold">
          {logo || user.name?.charAt(0)?.toUpperCase() || "?"}
        </div>
        <div>
          <div className="text-[15px] font-bold text-amber-300 leading-5">{user.name || "Anonymous"}</div>
          <button
            className="text-purple-600 text-sm font-semibold cursor-pointer hover:underline"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoCard;
