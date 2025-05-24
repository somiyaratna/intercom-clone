import { FaChevronDown } from "react-icons/fa";
import InboxMessage from "./InboxMessage";

export default function Inbox({ messages, activeChatId, setActiveChatId }) {
  return (
    <div className="py-2 px-4 ">
      <h1 className=" text-xl md:text-2xl font-semibold">Your Inbox</h1>
      {messages.length > 0 ? (
        <>
          <div className="flex justify-between mt-8">
            <div className="flex items-center lg:gap-1 text-sm font-semibold">
              {messages?.length} Open <FaChevronDown size={10} />
            </div>
            <div className="flex items-center lg:gap-1 text-sm font-semibold">
              Waiting longest <FaChevronDown size={10} />
            </div>
          </div>
          <ul className="my-2">
            {messages.map((msg) => {
              const lastMessage = msg.messages?.[msg.messages.length - 1];
              return (
                <InboxMessage
                  key={msg.chatId}
                  name={msg.name}
                  message={lastMessage?.message || ""}
                  sentVia={lastMessage?.sentVia || ""}
                  time={lastMessage?.timestamp || ""}
                  read={msg.read}
                  isActive={msg.chatId === activeChatId}
                  onClick={() => setActiveChatId(msg.chatId)}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <p className="mt-4">No messages as of yet</p>
      )}
    </div>
  );
}
