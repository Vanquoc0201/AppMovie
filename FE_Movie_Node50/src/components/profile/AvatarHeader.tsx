import React from "react";

const AvatarHeader = ({ name }: { name: string }) => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-red-700 h-36 relative">
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
        <img
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
            name
          )}&background=FF0000&color=FFFFFF`}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default AvatarHeader;
