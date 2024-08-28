import { TbBell } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import ChatFilter from "./ChatFilter";
import SearchBar from "./SearchBar";
const HeaderOfChatPanel = () => {
  return (
    <div className="sticky top-0 w-[full] px-4 pt-4 pb-4 border-b shadow-sm border-b-[#e0e0e0]">
      {/* Header & notification & setting */}
      <div className="w-full flex flex-row justify-between">
        <h4 className="text-xl font-semibold text-[#495057]">Chats</h4>
        <ul className="flex flex-row justify-around items-center gap-4 mr-2">
          <li>
            <TbBell className="text-[#adb5bd] text-[20px]" />
          </li>
          <li>
            <BsThreeDotsVertical className="text-[#adb5bd] text-[20px]" />
          </li>
        </ul>
      </div>

      {/* Menu dropdown & Search bar */}
      <div className="w-full mt-3 flex flex-row justify-between">
        {/* Menu dropdown */}
        <ChatFilter />
        <SearchBar />
      </div>
    </div>
  );
};

export default HeaderOfChatPanel;
