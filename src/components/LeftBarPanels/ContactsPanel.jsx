import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import HeaderOfChatPanel from "../HeaderOfChatPanel";

const ContactsPanel = () => {
  const contacts = [
    { letter: "A", name: "Alvarez Luna", initials: "AL", color: "bg-pink-500" },
    {
      letter: "C",
      name: "Carla Serrano",
      image:
        "https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg",
    },
    {
      letter: "D",
      name: "Dean Vargas",
      initials: "DV",
      color: "bg-purple-500",
    },
    {
      letter: "D",
      name: "Donaldson Riddle",
      image:
        "https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg",
    },
    {
      letter: "D",
      name: "Daniels Webster",
      initials: "DW",
      color: "bg-blue-500",
    },
    {
      letter: "E",
      name: "Earnestine Sears",
      image:
        "https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg",
    },
    {
      letter: "F",
      name: "Faulkner Benjamin",
      image:
        "https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg",
    },
  ];

  return (
    <div className="max-w-md w-full flex flex-col bg-white shadow-lg rounded-lg">
      {/* <div className="px-4 py-4 bg-gray-50 flex justify-between items-center">
        <h4 className="text-xl font-semibold text-[#495057]">Contacts</h4>
        <button className="p-2 rounded-full bg-[#665dfe] text-white hover:bg-[#4237fe]">
          <GoPlus className="text-[20px]" />
        </button>
      </div> */}
      <HeaderOfChatPanel />
      <div className="flex-grow divide-gray-200 overflow-y-scroll no-scrollbar">
        {contacts.map((contact, index) => (
          <React.Fragment key={contact.name}>
            {(index === 0 || contact.letter !== contacts[index - 1].letter) && (
              <div className="px-4 pb-2 pt-4 gap-2 bg-gray-50 text-sm font-medium text-gray-500 border-y">
                {contact.letter}
              </div>
            )}
            <div className="pl-8 pr-4 py-3 flex items-center justify-between">
              <div className="flex items-center">
                {contact.image ? (
                  <img
                    src={contact.image}
                    alt={contact.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                ) : (
                  <div
                    className={`w-10 h-10 rounded-full mr-3 flex items-center justify-center text-white ${contact.color}`}
                  >
                    {contact.initials}
                  </div>
                )}
                <span className="text-sm font-medium text-gray-900">
                  {contact.name}
                </span>
              </div>
              <button className="text-gray-400 hover:text-gray-500">
                <BsThreeDotsVertical className="text-[20px]" />
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ContactsPanel;
