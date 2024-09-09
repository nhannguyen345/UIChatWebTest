import React from "react";
import ResponsiveMenu from "../components/ResponsiveMenu";
import LeftBar from "../components/LeftBar";
import ChatPage from "../components/ChatPage";
import ModalNotification from "../components/ModalNotification";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const modal = useSelector((state) => state.modal.isNotificationModalOpen);
  return (
    <div className="flex flex-row overflow-hidden w-screen max-sm:relative">
      <ResponsiveMenu />
      <LeftBar />
      <ChatPage />
      {modal && <ModalNotification></ModalNotification>}
    </div>
  );
};

export default Dashboard;
