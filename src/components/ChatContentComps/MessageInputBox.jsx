import React, { useState } from "react";
import { BsFileEarmarkArrowUp } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import Picker from "emoji-picker-react";
const MessageInputBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatContent, setChatContent] = useState([]);
  const [displayEmoji, setDisplayEmoji] = useState(false);
  const onEmojiClick = (emojiData, event) => {
    console.log(event);
    setInputValue((prevInput) => prevInput + emojiData.emoji);
  };

  const handleSendImage = (e) => {
    const img = e.target.files[0];
    if (img) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setChatContent((prevChat) => [
          ...prevChat,
          {
            messageType: "image",
            message: e.target.result,
            date: "3:00 pm",
            sender: 1,
            receiver: 2,
          },
        ]);
      };
      reader.readAsDataURL(img);
    }
  };
  return (
    <div className="relative max-h-[100px] w-full px-4 py-4 gap-2 flex items-center border">
      <div
        className={
          displayEmoji ? "block absolute bottom-[60px] left-[10px]" : "hidden"
        }
      >
        <Picker onEmojiClick={onEmojiClick} />
      </div>
      <BsEmojiSmile
        className="inline-block h-[40px] w-[22px] text-[#535558] cursor-pointer"
        onClick={() => setDisplayEmoji(!displayEmoji)}
      />
      <div className="relative">
        <BsFileEarmarkArrowUp className="inline-block h-[40px] w-[24px] my-auto text-[#535558]" />
        <input
          className="absolute left-0 file:cursor-pointer w-[30px] opacity-0"
          type="file"
          multiple={false}
          onChange={handleSendImage}
        />
      </div>
      {/* <div class="file-upload relative inline-block">
        <input type="file" id="file-input" className="hidden" />
        <label
          for="file-input"
          class="bg-green-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-green-600 inline-flex items-center"
        >
          <i class="fas fa-upload mr-2"></i> Chọn tệp
        </label>
      </div> */}
      <textarea
        className="resize-none flex-1 h-[50px] p-3 rounded-md outline-none font-sans dark:bg-[#2c373d] dark:text-white"
        placeholder="Type a message"
        type="text"
        value={""}
        onChange={(e) => {}}
      />
      <IoIosArrowRoundForward className="h-[44px] w-[44px] rounded-full bg-[#665dfe] text-[#ffffff] cursor-pointer hover:bg-[#4237fe]" />
    </div>
  );
};

export default MessageInputBox;
