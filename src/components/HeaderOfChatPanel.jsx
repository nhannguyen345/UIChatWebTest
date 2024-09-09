import { TbBell } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import ChatFilter from "./ChatFilter";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { GoPlus } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import {
  openNotificationModal,
  closeNotificationModal,
} from "../features/modal/modalSlice";
import { useState } from "react";
const HeaderOfChatPanel = () => {
  // Create state for showing/hiding menu popover menu under three dot
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // Get menu (state global) for setting probraly content header
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.activeTab);

  // Get title function
  const getTitle = () => {
    switch (menu) {
      case "profile":
        return "Profile";
      case "chats":
        return "Chats";
      case "contacts":
        return "Contacts";
      case "calls":
        return "Calls";
      default:
        break;
    }
  };
  return (
    <div
      className={
        "sticky top-0 w-[full] px-4 pt-4 pb-4 shadow-sm border-b border-b-[#e0e0e0]"
      }
    >
      {/* Header & notification & setting */}
      <div className="w-full flex flex-row justify-between">
        <h4 className="text-[18px] leading-[1.2] font-semibold text-[#495057]">
          {getTitle()}
        </h4>
        <ul className="flex flex-row justify-around items-center gap-4 mr-2">
          <li>
            {(menu === "chats" || menu === "contacts" || menu === "calls") && (
              <TbBell
                className="text-[#adb5bd] text-[20px] cursor-pointer hover:text-[#495057]"
                onClick={() => dispatch(openNotificationModal())}
              />
            )}
          </li>
          <li>
            {menu === "chats" && (
              <BsThreeDotsVertical className="text-[#adb5bd] text-[20px] cursor-pointer hover:text-[#495057]" />
            )}
            {menu === "contacts" && (
              <button className="p-[6px] rounded-full bg-[#665dfe] text-white hover:bg-[#4237fe]">
                <GoPlus className="text-[16px]" />
              </button>
            )}
          </li>
        </ul>
      </div>

      {/* Menu dropdown & Search bar */}
      <div className="w-full mt-3 flex flex-row justify-between">
        {/* Menu dropdown */}
        {(menu === "chats" || menu === "calls") && <ChatFilter />}
        {(menu === "chats" || menu === "calls") && <SearchBar />}
        {menu === "contacts" && (
          <div className="w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Contacts.."
                className="w-full pl-10 pr-4 py-2 text-[15px] border rounded-lg bg-[#f9fafb] focus:outline-none focus:border-blue-500"
              />
              <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#adb5bd]">
                <IoIosSearch className="text-[20px]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderOfChatPanel;
