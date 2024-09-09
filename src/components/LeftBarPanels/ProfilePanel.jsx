import React from "react";
import { useSelector } from "react-redux";
import { BiLogOut } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const ProfilePanel = () => {
  return (
    <div className="max-w-md w-full flex flex-col bg-[#f8f9fa] shadow-lg rounded-lg">
      <div
        className={
          "sticky top-0 w-[full] px-4 pt-4 pb-4 shadow-sm border-b border-b-[#e0e0e0] bg-[#fff]"
        }
      >
        <h4 className="text-[18px] leading-[1.2] font-semibold text-[#495057] mb-3">
          Profile
        </h4>
        <p className="text-[#adb5bd] text-[14px] ">
          Personal Information & Settings
        </p>
      </div>
      <div className="flex-grow divide-gray-200 overflow-y-scroll no-scrollbar px-4">
        {/* Avatar & Name & button Logout */}
        <div className="relative flex flex-col items-center bg-[#fff] break-words p-5 mt-5 border rounded-[4px]">
          <img
            className="h-[80px] w-[80px] rounded-full mb-3"
            src="https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg"
            alt=""
          />
          <p className="text-[20px] text-[#495057] mb-[12px] font-medium leading-[1.2]">
            Martin Beter
          </p>
          <button className="flex items-center gap-1 text-[14px] text-[#495057] px-4 py-2 mx-[6px] border border-[#e5e9f2] hover:border-[#FF0000] group rounded-[4px] bg-transparent">
            <BiLogOut className="inline-block h-[18px] w-[18px] group-hover:text-[#FF0000]" />
            <span className="group-hover:text-[#FF0000]">Logout</span>
          </button>
          <div className="absolute top-3 right-3">
            <BsThreeDotsVertical className="text-[#adb5bd] text-[20px]" />
          </div>
        </div>

        {/* Birthday & Phone & Email & Address */}
        <div className="relative flex flex-col items-center bg-[#fff] break-words mt-6 border rounded-[4px]">
          <ul className="w-full rounded-t-[4px] list-none">
            <li className="flex items-center border-b border-[#e5e9f2] py-[12px] px-[20px] bg-[#fff]">
              <div className="flex-1 flex flex-col">
                <p className="text-[13px] leading-[1.5] text-[#adb5bd]">
                  Birthdate
                </p>
                <p className="text-[14px] leading-[1.5] text-[#495057]">
                  20/11/1992
                </p>
              </div>
              <MdOutlineCalendarToday className="h-4 w-4 text-[#adb5bd]" />
            </li>
            <li className="flex items-center border-b border-[#e5e9f2] py-[12px] px-[20px] bg-[#fff]">
              <div className="flex-1 flex flex-col">
                <p className="text-[13px] leading-[1.5] text-[#adb5bd]">
                  Phone
                </p>
                <p className="text-[14px] leading-[1.5] text-[#495057]">
                  09937473784
                </p>
              </div>
              <FiPhone className="h-4 w-4 text-[#adb5bd]" />
            </li>
            <li className="flex items-center border-b border-[#e5e9f2] py-[12px] px-[20px] bg-[#fff]">
              <div className="flex-1 flex flex-col">
                <p className="text-[13px] leading-[1.5] text-[#adb5bd]">
                  Email
                </p>
                <p className="text-[14px] leading-[1.5] text-[#495057]">
                  nhandzzkkk@gmail.com
                </p>
              </div>
              <MdOutlineEmail className="h-5 w-5 text-[#adb5bd]" />
            </li>
            <li className="flex items-center gap-4 border-b border-[#e5e9f2] py-[12px] px-[20px] bg-[#fff]">
              <div className="flex-1 flex flex-col">
                <p className="text-[13px] leading-[1.5] text-[#adb5bd]">
                  Address
                </p>
                <p className="text-[14px] leading-[1.5] text-[#495057]">
                  1134 Ridder Park Road, San Fransisco, CA 94851
                </p>
              </div>
              <AiOutlineHome className="h-5 w-5 text-[#adb5bd]" />
            </li>
          </ul>
        </div>

        {/* Facebook & Twitter & Instagram */}
        <div className="relative flex flex-col items-center bg-[#fff] break-words my-6 border rounded-[4px]">
          <ul className="w-full rounded-t-[4px] list-none">
            <li className="flex items-center border-b border-[#e5e9f2] py-[12px] px-[20px] bg-[#fff]">
              <div className="flex-1 flex flex-col">
                <p className="text-[13px] leading-[1.5] text-[#adb5bd]">
                  Facebook
                </p>
                <a
                  className="text-[14px] leading-[1.5] font-medium text-[#665dfe] no-underline"
                  href="#"
                >
                  @Facebook Account
                </a>
              </div>
              <FiFacebook className="h-5 w-5 text-[#adb5bd]" />
            </li>
            <li className="flex items-center border-b border-[#e5e9f2] py-[12px] px-[20px] bg-[#fff]">
              <div className="flex-1 flex flex-col">
                <p className="text-[13px] leading-[1.5] text-[#adb5bd]">
                  Twitter
                </p>
                <a
                  className="text-[14px] leading-[1.5] font-medium text-[#665dfe] no-underline"
                  href="#"
                >
                  @Twitter Account
                </a>
              </div>
              <FiTwitter className="h-5 w-5 text-[#adb5bd]" />
            </li>
            <li className="flex items-center border-b border-[#e5e9f2] py-[12px] px-[20px] bg-[#fff]">
              <div className="flex-1 flex flex-col">
                <p className="text-[13px] leading-[1.5] text-[#adb5bd]">
                  Instagram
                </p>
                <a
                  className="text-[14px] leading-[1.5] font-medium text-[#665dfe] no-underline"
                  href="#"
                >
                  @Instagram Account
                </a>
              </div>
              <FiInstagram className="h-5 w-5 text-[#adb5bd]" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
