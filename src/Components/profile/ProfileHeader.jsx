import React from "react";

const ProfileHeader = ({ name, coverImage, profileImage }) => {
  return (
    <div className="h-screen flex flex-col justify-center relative">
      {/* Cover Image */}
      <div
        className="bg-cover bg-center h-64 relative"
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        {/* Profile Image */}
        <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden flex justify-center items-end">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <div className="h-full w-12 bg-white transform rotate-45 origin-bottom-right"></div>
            <img
              src={profileImage}
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
            <div className="h-full w-12 bg-white transform -rotate-45 origin-top-right"></div>
          </div>
        </div>
      </div>
      {/* User Name */}
      <div className="text-2xl font-bold text-center mt-4">{name}</div>
    </div>
  );
};

export default ProfileHeader;
