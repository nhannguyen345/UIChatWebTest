import React from "react";
import { BsTelephone, BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
const HeaderOfChatContent = () => {
  return (
    <div className="h-[70px] w-full border-b flex items-center pl-8">
      {/* Avatar */}
      <img
        className="h-[52px] w-[52px] shadow object-cover rounded-full my-auto"
        src="https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg"
        alt=""
      />

      {/* Name & text info */}
      <div className="ml-3 w-fit">
        <h4 className="col-span-6 font-semibold text-[#495057]">Cathana</h4>
        <span className="col-span-2 text-sm text-[#adb5bd] cursor-pointer hover:text-[#665dfe]">
          Click here for more information
        </span>
      </div>

      {/* Search & call & others */}
      <div className="flex-1 mr-10 flex justify-end gap-3">
        <IoIosSearch className="text-[22px] stroke-1 my-auto mr-2 fill-[#adb5bd] cursor-pointer" />
        <BsTelephone className="text-[18px] my-auto mr-2 text-[#adb5bd] cursor-pointer" />
        <BsThreeDotsVertical className="text-[#adb5bd] text-[20px]" />
      </div>
    </div>
  );
};

export default HeaderOfChatContent;
