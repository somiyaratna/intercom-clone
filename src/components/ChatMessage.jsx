import { SyncLoader } from "react-spinners";
import { formatRelativeTime } from "../utils/formatTime";

export default function ChatMessage({ messages, isGenerating }) {
  if (!messages || messages.length === 0) {
    return <p className="text-gray-500">No messages yet</p>;
  }

  return (
    <div className="flex flex-col gap-3 overflow-y-auto my-4 px-2">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${
            msg.from === "user" ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`max-w-[75%] px-3 py-2 rounded-lg shadow-md break-words ${
              msg.from === "user" ? "bg-blue-200" : "bg-gray-100"
            }`}
          >
            <p className="text-sm">{msg.message}</p>
            <span className="text-[10px] text-gray-500">
              {formatRelativeTime(msg.timestamp)}
            </span>
          </div>
        </div>
      ))}
      {isGenerating && (
        <div className="flex justify-start">
          <div className="max-w-[75%] px-3 py-2 rounded-lg shadow-md bg-gray-100">
            <SyncLoader color="#6a7282" size={8} />
          </div>
        </div>
      )}
    </div>
  );
}
