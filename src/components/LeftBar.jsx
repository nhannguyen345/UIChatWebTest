import { useDispatch, useSelector } from "react-redux";
import { setShowChat } from "../features/showchat/showchatSlice";
import ChatPanel from "./LeftBarPanels/ChatPanel";
// import HeaderOfLeftBar from "./HeaderOfLeftBar";
// import ResponsiveMenu from "./ResponsiveMenu";

const LeftBar = () => {
  const dispatch = useDispatch();
  const showChat = useSelector((state) => state.showchat);

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
      <ChatPanel />
    </div>
  );
};

export default LeftBar;
