import HeaderOfChatContent from "./HeaderOfChatContent";
import MessageContainer from "./MessageContainer";
import MessageInputBox from "./MessageInputBox";

const ChatContent = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <HeaderOfChatContent />
      <MessageContainer />
      <MessageInputBox />
    </div>
  );
};

export default ChatContent;
