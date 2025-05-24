import { FaRegWindowClose } from "react-icons/fa";
import ChatWidget from "./ChatWidget";
import { BsThreeDots } from "react-icons/bs";
import { GiNightSleep } from "react-icons/gi";
import ChatMessage from "./ChatMessage";

export default function Chat({
  name = "Chat",
  isGenerating,
  input,
  setInput,
  chat,
  handleSend,
}) {
  if (!chat) {
    return (
      <div className="p-4">
        <p className="text-gray-500">Select a chat to view messages</p>
      </div>
    );
  }
  return (
    <div className="py-2 px-4 rounded-xl bg-[#fcfcfc] h-full flex flex-col justify-between overflow-y-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold">{name}</h1>
        <div className="flex gap-2">
          <button className="px-2 bg-gray-200 text-black rounded-md hover:cursor-pointer">
            <BsThreeDots />
          </button>
          <button className="px-2 bg-gray-200 text-black rounded-md hover:cursor-pointer">
            <GiNightSleep strokeWidth={4} />
          </button>

          <button className="px-2 py-1 bg-black text-white rounded-md hover:cursor-pointer">
            <div className="flex items-center gap-1">
              <FaRegWindowClose size={15} />
              <span className="hidden md:block text-sm">Close</span>
            </div>
          </button>
        </div>
      </div>
      <ChatMessage
        messages={chat?.messages}
        input={input}
        isGenerating={isGenerating}
      />
      <ChatWidget
        isGenerating={isGenerating}
        setInput={setInput}
        input={input}
        handleSend={handleSend}
      />
    </div>
  );
}
