import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiUnlock } from "react-icons/tfi";
import { SlLogout } from "react-icons/sl";
import { useEffect, useRef } from "react";

const PopoverMenu = ({ closeMenu, avatarRef }) => {
  const menuRef = useRef();

  useEffect(() => {
    // Định nghĩa hàm xử lý sự kiện nhấn ra ngoài
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        avatarRef.current &&
        !avatarRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    // Gán sự kiện nhấn ra ngoài menu
    document.addEventListener("mousedown", handleClickOutside);

    // Hủy bỏ sự kiện khi component bị hủy
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <div
      ref={menuRef}
      className="absolute -top-44 -left-2 w-[190px] h-fit flex flex-col py-3 bg-white rounded-md shadow-[0_15px_90px_5px_rgba(0,0,0,0.3)] max-sm:left-auto max-sm:right-0 max-sm:-top-40"
    >
      <a
        className="px-5 py-1 flex flex-row justify-between items-center text-[#495057] text-[15px] max-sm:text-[14px]"
        href="#"
      >
        Profile
        <CgProfile style={{ fontSize: "14px" }} />
      </a>
      <a
        className="px-5 py-1 flex flex-row justify-between items-center text-[#495057] text-[15px] max-sm:text-[14px]"
        href="#"
      >
        Setting
        <IoSettingsOutline style={{ fontSize: "14px" }} />
      </a>
      <a
        className="px-5 py-1 flex flex-row justify-between items-center text-[#495057] text-[15px] max-sm:text-[14px]"
        href="#"
      >
        Changing Password
        <TfiUnlock style={{ fontSize: "13px" }} />
      </a>
      <div className="border-t-[0.8px] h-0 my-2 border-gray-200 dark:border-neutral-700"></div>
      <a
        className="px-5 py-1 flex flex-row justify-between items-center text-[#495057] text-[15px] max-sm:text-[14px]"
        href="#"
      >
        Log out
        <SlLogout style={{ fontSize: "13px", marginRight: "2px" }} />
      </a>
    </div>
  );
};

export default PopoverMenu;
