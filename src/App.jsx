import ChatPage from "./components/ChatPage";
import LeftBar from "./components/LeftBar";
import ResponsiveMenu from "./components/ResponsiveMenu";

function App() {
  return (
    <div className="flex flex-row overflow-hidden w-screen max-sm:relative">
      <ResponsiveMenu />
      <LeftBar />
      <ChatPage />
    </div>
  );
}

export default App;
