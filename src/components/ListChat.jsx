const chats = [
  {
    avatarUrl:
      "https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg",
    username: "Martin Helen",
    time: "Just now",
    lastMessage: "Hello, you look handsome",
  },
  {
    avatarUrl:
      "https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg",
    username: "Martin Helen",
    time: "Just now",
    lastMessage:
      "Hello, you look handsome Hello, you look handsome Hello, you look handsome",
  },
  {
    avatarUrl:
      "https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg",
    username: "Martin Helen",
    time: "Just now",
    lastMessage: "Hello, you look handsome",
  },
  {
    avatarUrl:
      "https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg",
    username: "Martin Helen",
    time: "Just now",
    lastMessage: "Hello, you look handsome",
  },
  {
    avatarUrl:
      "https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg",
    username: "Martin Helen",
    time: "Just now",
    lastMessage: "Hello, you look handsome",
  },
  {
    avatarUrl:
      "https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg",
    username: "Martin Helen",
    time: "Just now",
    lastMessage: "Hello, you look handsome",
  },
  {
    avatarUrl:
      "https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg",
    username: "Martin Helen",
    time: "Just now",
    lastMessage: "Hello, you look handsome",
  },
  {
    avatarUrl:
      "https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg",
    username: "Martin Helen",
    time: "Just now",
    lastMessage: "Hello, you look handsome",
  },
  {
    avatarUrl:
      "https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg",
    username: "Martin Helen",
    time: "Just now",
    lastMessage: "Hello, you look handsome",
  },
];
const ListChat = () => {
  return (
    <div className="flex-grow py-3 px-4 overflow-y-scroll no-scrollbar max-sm:mb-[60px]">
      {chats.map((item, idx) => (
        <div
          key={idx}
          className="py-4 my-3 w-full flex flex-row overflow-hidden justify-evenly border rounded-sm shadow-sm transition-all duration-300 ease-in-out hover:border-[#665dfe] cursor-pointer"
        >
          {/* Avatar */}
          <div>
            <img
              className="h-[52px] w-[52px] shadow object-cover rounded-full"
              src={item.avatarUrl}
              alt=""
            />
          </div>

          {/* Name & lastMessgae */}
          <div className="w-9/12 grid grid-cols-8 gap-[2px] overflow-hidden">
            <h4 className="col-span-6 font-semibold text-[#495057]">
              {item.username}
            </h4>
            <span className="col-span-2 text-[#adb5bd]">{item.time}</span>
            <p className="col-span-8 whitespace-nowrap overflow-hidden overflow-ellipsis text-[#adb5bd]">
              {item.lastMessage}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListChat;
