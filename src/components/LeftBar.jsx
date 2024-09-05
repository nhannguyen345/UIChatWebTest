import { useDispatch, useSelector } from "react-redux";
// import { setShowChat } from "../features/showchat/showchatSlice";
import ChatPanel from "./LeftBarPanels/ChatPanel";
import ProfilePanel from "./LeftBarPanels/ProfilePanel";
import ContactsPanel from "./LeftBarPanels/ContactsPanel";
import CallsPanel from "./LeftBarPanels/CallsPanel";
// import HeaderOfLeftBar from "./HeaderOfLeftBar";
// import ResponsiveMenu from "./ResponsiveMenu";

const LeftBar = () => {
  const showChat = useSelector((state) => state.showchat);
  const menu = useSelector((state) => state.menu.activeTab);

  return (
    <div
      className={
        "flex flex-row max-w-[600px] min-w-[420px] h-screen border-r max-sm:w-screen" +
        (showChat
          ? " max-sm:absolute max-sm:left-0 max-sm:animate-hidden-page"
          : " ")
      }
    >
      {/* <button
        className="border-2 hover:cursor-pointer h-[40px] w-[120px] mt-3"
        onClick={() => dispatch(setShowChat(!showChat))}
      >
        Show main chat
      </button> */}
      {/* <HeaderOfLeftBar /> */}
      {menu === "profile" && <ProfilePanel />}
      {menu === "chats" && <ChatPanel />}
      {menu === "contacts" && <ContactsPanel />}
      {menu === "calls" && <CallsPanel />}
    </div>
  );
};

export default LeftBar;
