import React from "react";
import { useSelector } from "react-redux";

const ProfilePanel = () => {
  return (
    <div className="max-w-md w-full flex flex-col mx-auto bg-white shadow-lg rounded-lg">
      <div
        className={
          "sticky top-0 w-[full] px-4 pt-4 pb-4 shadow-sm border-b border-b-[#e0e0e0]"
        }
      >
        <h4 className="text-[18px] leading-[1.2] font-semibold text-[#495057] mb-3">
          Profile
        </h4>
        <p className="text-[#adb5bd] text-[14px] ">
          Personal Information & Settings
        </p>
      </div>
    </div>
  );
};

export default ProfilePanel;
