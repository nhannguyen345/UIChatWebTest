import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import PopoverMenuOptionsMessage from "./PopoverMenuOptionsMessage";
import TextMessageRightSide from "./TextMessageRightSide";
import TextMessageLeftSide from "./TextMessageLeftSide";
const ListMessage = [
  {
    messId: 1,
    senderId: "1",
    receiverId: "2",
    contentType: "text",
    content:
      "I have to give a presentation on global warming on Friday, and I am so nervous.",
    urlFile: "",
    sendAt: "9:12am",
  },
  {
    messId: 2,
    senderId: "2",
    receiverId: "1",
    contentType: "text",
    content:
      "First of all, you need to understand the subject matter thoroughly. You need to know what is global warming, what causes global warming, and what people should do to abate the effects of global warming.",
    urlFile: "",
    sendAt: "9:12am",
  },
  {
    messId: 3,
    senderId: "2",
    receiverId: "1",
    contentType: "text",
    content:
      "I have done a lot of research on the subject, and I know I can answer any questions I will receive from the audience.",
    urlFile: "",
    sendAt: "9:12am",
  },
  {
    messId: 4,
    senderId: "1",
    receiverId: "2",
    contentType: "text",
    content: "Yes, what you should present first, second and third…",
    urlFile: "",
    sendAt: "9:12am",
  },
  {
    messId: 5,
    senderId: "2",
    receiverId: "1",
    contentType: "file",
    content: "baitaphoa.xlsx-345.23",
    urlFile: "http://...",
    sendAt: "9:12am",
  },
  {
    messId: 6,
    senderId: "2",
    receiverId: "1",
    contentType: "text",
    content:
      "If that is the case, then I already have an outline. To make it easy for my audience to follow the presentation, I intend to post the outline on the board at all time during my speech.",
    urlFile: "",
    sendAt: "9:12am",
  },
  {
    messId: 7,
    senderId: "2",
    receiverId: "1",
    contentType: "file",
    content: "baitap.png",
    urlFile: "http://...",
    sendAt: "9:12am",
  },
];
const MessageContainer = () => {
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (idx) => {
    if (openMenuId === idx) {
      setOpenMenuId(null); // Đóng menu nếu nó đang mở
    } else {
      setOpenMenuId(idx); // Mở menu của mục này
    }
  };

  return (
    <div className="flex-1 w-full overflow-y-hidden custom-scrollbar hover:overflow-y-auto focus:overflow-y-auto">
      {ListMessage.map((item, idx) => {
        if (item.senderId === "1") {
          return (
            <TextMessageRightSide
              item={item}
              key={idx}
              index={idx}
              toggleMenu={toggleMenu}
              openMenuId={openMenuId}
            />
          );
        } else {
          return (
            <TextMessageLeftSide
              item={item}
              key={idx}
              index={idx}
              toggleMenu={toggleMenu}
              openMenuId={openMenuId}
            />
          );
        }
      })}
    </div>
  );
};

export default MessageContainer;
