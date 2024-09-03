import React from "react";
import ResponsiveMenu from "../components/ResponsiveMenu";
import LeftBar from "../components/LeftBar";
import ChatPage from "../components/ChatPage";

const Dashboard = () => {
  return (
    <div className="flex flex-row overflow-hidden w-screen max-sm:relative">
      <ResponsiveMenu />
      <LeftBar />
      <ChatPage />
    </div>
  );
};

export default Dashboard;
