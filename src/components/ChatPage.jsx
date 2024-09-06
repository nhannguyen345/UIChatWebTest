import { useDispatch, useSelector } from "react-redux";
import { setShowChat } from "../features/showchat/showchatSlice";
import WelcomeChatContent from "./WelcomeChatContent";
import ChatInfo from "./ChatInfo";
import ChatContent from "./ChatContentComps/ChatContent";
import ProfileSettingContent from "./ProfileSettingComps/ProfileSettingContent";

const ChatPage = () => {
  const dispatch = useDispatch();
  const showChat = useSelector((state) => state.showchat);
  const menu = useSelector((state) => state.menu.activeTab);
  console.log(showChat);
  return (
    <div
      className={
        "inline-block w-full h-screen max-sm:w-full " +
        (showChat
          ? "max-sm:z-10 max-sm:animate-slide-left"
          : "max-sm:z-10 max-sm:animate-slide-right max-sm:absolute")
      }
    >
      {/* <button
        className="border-2 hover:cursor-pointer"
        onClick={() => dispatch(setShowChat(!showChat))}
      >
        Back to SideBar
      </button> */}
      {/* <WelcomeChatContent /> */}
      {menu !== "profile" && <ChatContent />}
      {menu === "profile" && <ProfileSettingContent />}
    </div>
  );
};

export default ChatPage;
