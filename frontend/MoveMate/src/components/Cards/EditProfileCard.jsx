import React, { useState } from "react";
import ImageInput from "../inputs/ImageInput";

const EditProfileCard = () => {
  const [profile, setProfile] = useState({
    userName: "",
    email: "",
    city: "",
    state: "",
    phoneNo: "",
    profilePicture: "",
    previewUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
  };

  return (
    <div className="bg-slate-100 border-gray-200 rounded-[30px] shadow-[0_-4px_12px_rgba(0,0,0,0.5)] border p-6 sm:p-10 w-full">
      <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row gap-10 w-full">
          {/* Left side inputs */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <div className="flex flex-col gap-1">
              <label className="text-lg font-medium">Username</label>
              <input
                type="text"
                name="userName"
                value={profile.userName}
                onChange={handleChange}
                className="bg-white text-black px-4 py-2 rounded-full border border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-lg font-medium">City</label>
              <input
                type="text"
                name="city"
                value={profile.city}
                onChange={handleChange}
                className="bg-white text-black px-4 py-2 rounded-full border border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-lg font-medium">State</label>
              <input
                type="text"
                name="state"
                value={profile.state}
                onChange={handleChange}
                className="bg-white text-black px-4 py-2 rounded-full border border-gray-300"
              />
            </div>
          </div>

          {/* Right side: image and other inputs */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2 items-center">
            <div className="w-40 h-40">
              <ImageInput
                image={profile.profilePicture}
                setImage={(val) =>
                  setProfile((prev) => ({ ...prev, profilePicture: val }))
                }
                setPreview={(val) =>
                  setProfile((prev) => ({ ...prev, previewUrl: val }))
                }
                preview={profile.previewUrl}
              />
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-1">
                <label className="text-lg font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="bg-white text-black px-4 py-2 rounded-full border border-gray-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-lg font-medium">Phone No.</label>
                <input
                  type="text"
                  name="phoneNo"
                  value={profile.phoneNo}
                  onChange={handleChange}
                  className="bg-white text-black px-4 py-2 rounded-full border border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 w-1/2 md:w-1/4 mx-auto bg-gray-700 text-white py-2 rounded-full hover:bg-gray-900 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfileCard;
