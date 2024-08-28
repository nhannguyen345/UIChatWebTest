import HeaderOfChatPanel from "../HeaderOfChatPanel";
import ListChat from "../ListChat";

const ChatPanel = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <HeaderOfChatPanel />
      <ListChat />
    </div>
  );
};

export default ChatPanel;
