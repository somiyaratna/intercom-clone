import { FaAngleDown, FaBookmark, FaSmile } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { MdChat } from "react-icons/md";

export default function ChatWidget() {
  return (
    <div className="shadow-lg w-full rounded-2xl px-4 py-2 my-4">
      <div className="flex items-center gap-1">
        <MdChat size={12} />
        <span className="font-semibold text-sm">Chat</span>
        <FaAngleDown size={12} />
      </div>
      <textarea
        name="chat-widget"
        id="chat-widget"
        placeholder="Use ⌘K for shortcuts"
        className="min-w-full placeholder:text-sm placeholder:text-#111827 bg-transparent border-none outline-none resize-none h-16 text-sm text-#111827"
      ></textarea>
      <div className="flex items-center gap-2 p-2">
        <FaBoltLightning size={12} className="hover:cursor-pointer" />
        <span className="text-xs font-light mb-1">|</span>
        <FaBookmark size={12} className="hover:cursor-pointer" />
        <FaSmile size={12} className="hover:cursor-pointer" />
        <button className="flex items-center gap-3 ml-auto text-gray-500 hover:cursor-pointer">
          Send <FaAngleDown size={12} />
        </button>
      </div>
    </div>
  );
}
