import { FaRegWindowClose } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import ChatWidget from "./ChatWidget";

export default function Chat({ name = "Chat" }) {
  return (
    <div className="py-1 px-2 h-full flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold">{name}</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-gray-200 text-black rounded-md hover:cursor-pointer">
            ...
          </button>
          <ThemeToggle />
          <button className="px-4 py-2 bg-black text-white rounded-md hover:cursor-pointer">
            <div className="flex items-center gap-1">
              <FaRegWindowClose size={15} />
              <span className="hidden md:block text-sm">Close</span>
            </div>
          </button>
        </div>
      </div>
      <ChatWidget />
    </div>
  );
}
