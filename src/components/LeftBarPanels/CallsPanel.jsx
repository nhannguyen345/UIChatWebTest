import React from "react";
import HeaderOfChatPanel from "../HeaderOfChatPanel";
import { BsTelephone } from "react-icons/bs";

const callData = [
  {
    id: 1,
    name: "Catherine Richardson",
    time: "Just now",
    avatar:
      "https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg",
  },
  { id: 2, name: "Eva Walker", time: "5 mins ago", initials: "EW" },
  {
    id: 3,
    name: "Christopher Garcia",
    time: "20 mins ago",
    avatar:
      "https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg",
    missed: true,
  },
  {
    id: 4,
    name: "Christina Turner",
    time: "4 hour ago",
    avatar:
      "https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg",
  },
  {
    id: 5,
    name: "Tammy Martinez",
    time: "Yesterday",
    avatar:
      "https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg",
  },
  {
    id: 6,
    name: "Bonnie Torres",
    time: "12/06/2020",
    avatar:
      "https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg",
  },
];

const CallItem = ({ call }) => (
  <div className="flex items-center p-4 my-3 hover:bg-gray-100 border">
    <div className="mr-3 flex-shrink-0">
      {call.avatar ? (
        <img
          src={call.avatar}
          alt={call.name}
          className="w-[52px] h-[52px] rounded-full object-cover"
        />
      ) : (
        <div className="w-[52px] h-[52px] rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
          {call.initials}
        </div>
      )}
    </div>
    <div className="flex-grow">
      <h3 className="font-semibold text-sm mb-1">{call.name}</h3>
      <p
        className={`mt-1 text-xs ${
          call.missed ? "text-red-500" : "text-gray-500"
        }`}
      >
        <span className="inline-block mr-1">{call.missed ? "↙" : "↗"}</span>
        {call.time}
      </p>
    </div>
    <BsTelephone className="text-gray-400 w-5 h-5" />
  </div>
);

const CallList = () => {
  return (
    <div className="max-w-md w-full rounded-lg py-3 px-4">
      {callData.map((call) => (
        <CallItem key={call.id} call={call} />
      ))}
    </div>
  );
};

const CallsPanel = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <HeaderOfChatPanel />

      <CallList />
    </div>
  );
};

export default CallsPanel;
