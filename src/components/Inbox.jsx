import { FaChevronDown } from "react-icons/fa";
import InboxMessage from "./InboxMessage";

export default function Inbox({ messages }) {
  return (
    <div className="px-4">
      <h1 className="text-xl md:text-2xl font-semibold">Your Inbox</h1>
      <div className="flex justify-between mt-8">
        <div className="flex items-center gap-1 text-sm font-semibold">
          {messages?.length} Open <FaChevronDown size={10} />
        </div>
        <div className="flex items-center gap-1 text-sm font-semibold">
          Waiting longest <FaChevronDown size={10} />
        </div>
      </div>
      <ul>
        {messages.map((message) => (
          <InboxMessage key={message.name} {...message} />
        ))}
      </ul>
    </div>
  );
}
