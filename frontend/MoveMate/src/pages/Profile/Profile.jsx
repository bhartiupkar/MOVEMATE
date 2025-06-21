import React, { useState } from "react";
import FullBgLayout from "../../components/Layout/FullBgLayout";
import flight from "../../assets/images/reviewUser.jpg";
import Container3D1 from "../../components/Animations/Container3d1";
import { FaEdit, FaEraser, FaUserEdit } from "react-icons/fa";
import { FaCross, FaCrosshairs, FaSkullCrossbones } from "react-icons/fa6";
import { LuCross } from "react-icons/lu";
import ProfileInfoCard from "../../components/Cards/ProfileInfoCard";
import EditProfileCard from "../../components/Cards/EditProfileCard";
import TravallerHistoryCard from "../../components/Cards/TravallerHistoryCard";
const Profile = () => {
  const [activePage, setActivePage] = useState("travellerHistory");
  const [isEditProfile, setIsEditProfile] = useState(false);
  return (
    <div className="">
      <div className="flex w-full h-full  mt-10 ">
        <div className=" gap-5  flex flex-col  w-[25%]">
          <div className="  cursor-pointer ml-20 rounded-l-[100px] px-14 text-white bg-black py-2 ">
            <div className=" text-2xl">Profile</div>
          </div>
          <div className=" cursor-pointer  ml-20 rounded-l-[100px] px-14 text-white bg-black py-2 ">
            <div className=" text-2xl">Settings</div>
          </div>
          <div className=" cursor-pointer  ml-20 rounded-l-[100px] px-14 text-white bg-black py-2 ">
            <div className=" text-2xl">Traveller History</div>
          </div>
          <div className=" cursor-pointer  ml-20 rounded-l-[100px] px-14 text-white bg-black py-2 ">
            <div className=" text-2xl">Sender History</div>
          </div>
        </div>

        <div className="w-[75%] flex flex-col px-4 py-6  ">
         {
             activePage=="profile" &&
          <>

          <div className="flex  justify-between ">
          <div className="text-8xl font-light underline"> Profile </div>
          <div className="flex flex-col mr-10 mb-6 gap-2">

          <div className=" py-1 px-3 bg-red-400 rounded-full self-end ">Today,we work together with you to make use better tomorrow</div>
          <div className="py-1 px-3 bg-yellow-400 rounded-full self-end"> Lorem ipsum dolor sit amet.</div>
          <div className="py-1 px-3 bg-green-400 rounded-full self-end">You are not a customer You are a team</div></div>
          </div>
            {!isEditProfile? 
            <div className="flex  justify-end gap-4 mb-4 mr-10">

            <FaUserEdit onClick={()=>setIsEditProfile(prev=>!prev)}  className="text-4xl cursor-pointer "/>
            <div onClick={() => setIsEditProfile(prev => !prev)} className="border-1 px-6 text-white cursor-pointer bg-black py-2 rounded-full">

            Edit Profile 
            </div>
            </div>
            :<>
               <div className="flex  justify-end gap-4 mb-4 mr-10">

            <div onClick={() => setIsEditProfile(prev => !prev)} className="border-1 px-6 text-white cursor-pointer bg-black py-2 rounded-full">

            Cancel Edit
            </div>
            </div> 
            </>
            }

          {!isEditProfile ? (

            <ProfileInfoCard/>
          ) : (
            <EditProfileCard/>
          )}
          </>
         }
         {
          activePage=="travellerHistory" &&
          <>
            <TravallerHistoryCard/>
          </>
         }
         {
          activePage=="senderHistory" &&
          <>

          </>
         }
         {
          activePage=="settings" &&
          <>

          </>
         }
         {

         }
        </div>
      </div>
    </div>
  );
};

export default FullBgLayout()(Profile);
