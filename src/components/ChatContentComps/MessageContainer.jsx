import React from "react";
const ListMessage = [
  {
    senderId: "1",
    receiverId: "2",
    contentType: "text",
    content:
      "I have to give a presentation on global warming on Friday, and I am so nervous.",
    urlFile: "",
    sendAt: "9:12am",
  },
  {
    senderId: "2",
    receiverId: "1",
    contentType: "text",
    content:
      "First of all, you need to understand the subject matter thoroughly. You need to know what is global warming, what causes global warming, and what people should do to abate the effects of global warming.",
    urlFile: "",
    sendAt: "9:12am",
  },
  {
    senderId: "2",
    receiverId: "1",
    contentType: "text",
    content:
      "I have done a lot of research on the subject, and I know I can answer any questions I will receive from the audience.",
    urlFile: "",
    sendAt: "9:12am",
  },
  {
    senderId: "1",
    receiverId: "2",
    contentType: "text",
    content: "Yes, what you should present first, second and third…",
    urlFile: "",
    sendAt: "9:12am",
  },
  {
    senderId: "2",
    receiverId: "1",
    contentType: "file",
    content: "baitaphoa.xlsx-345.23",
    urlFile: "http://...",
    sendAt: "9:12am",
  },
  {
    senderId: "2",
    receiverId: "1",
    contentType: "text",
    content:
      "If that is the case, then I already have an outline. To make it easy for my audience to follow the presentation, I intend to post the outline on the board at all time during my speech.",
    urlFile: "",
    sendAt: "9:12am",
  },
  {
    senderId: "2",
    receiverId: "1",
    contentType: "file",
    content: "baitap.png-hoatieu.png-cuadong.png",
    urlFile: "http://...",
    sendAt: "9:12am",
  },
];
const MessageContainer = () => {
  return (
    <div className="flex-1 w-full overflow-y-hidden custom-scrollbar hover:overflow-y-auto focus:overflow-y-auto">
      {ListMessage.map((item, idx) => {
        if (item.senderId === "1") {
          return (
            <div className="w-full h-fit text-right my-[26px]" key={idx}>
              <div className="inline-block text-left max-w-[400px] bg-[#665dfe] text-[#ffffff] mr-[20px] px-[36px] py-[16px] rounded-[20px]">
                <span>{item.content}</span>
              </div>
            </div>
          );
        } else
          return (
            <div key={idx} className="w-full flex h-fit text-left my-[26px]">
              <div className="inline-block relative text-left max-w-[400px] bg-[#f5f6fa] text-[#8094ae] ml-[30px] px-[36px] py-[16px] rounded-[20px]">
                <span>{item.content}</span>
                <img
                  className="absolute -left-4 -bottom-4 h-[36px] w-[36px] object-cover box-content shadow-custom rounded-full my-auto"
                  src="https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg"
                  alt=""
                />
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default MessageContainer;
