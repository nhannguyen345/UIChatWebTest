import { useDispatch, useSelector } from "react-redux";
import { setInfoChat } from "../features/showinfo/showinfoSlice";
import HeaderOfChatInfo from "./ChatInfoComps/HeaderOfChatInfo";
import ProfileSummary from "./ChatInfoComps/ProfileSummary";
import UserInformation from "./ChatInfoComps/UserInformation";

const ChatInfo = () => {
  const dispatch = useDispatch();
  const showInfo = useSelector((state) => state.showinfo);
  return (
    <div
      className={
        "min-w-[400px] max-sm:w-full max-sm:h-[calc(100vh-64px)] h-screen bg-white border-l overflow-y-scroll no-scrollbar " +
        (showInfo ? "" : "hidden")
      }
    >
      {/* <button onClick={() => dispatch(setInfoChat(false))}>ChatInfo</button> */}
      <HeaderOfChatInfo />
      <ProfileSummary />
      <UserInformation />
    </div>
  );
};

export default ChatInfo;
