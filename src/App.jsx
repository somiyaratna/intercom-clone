import { useState } from "react";
import Chat from "./components/Chat";
import Copilot from "./components/Copilot";
import Inbox from "./components/Inbox";
import { staticMessages } from "./static-data";
import { chatWithAI } from "./utils/chatWithAI";
import { getRandomSource } from "./utils/getRandomSource";

function App() {
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeChatId, setActiveChatId] = useState(staticMessages[0].chatId);
  const [messages, setMessages] = useState(staticMessages);
  const activeChat = messages.find((m) => m.chatId === activeChatId);

  async function handleSend(userMessage, sender) {
    if (!userMessage.trim()) return;
    const userTimestamp = new Date().toISOString();
    const chatId = activeChatId;
    const sentVia = getRandomSource();

    const userEntry = {
      chatId,
      sender,
      message: userMessage,
      timestamp: userTimestamp,
      sentVia,
      from: "bot",
    };
    setMessages((prev) =>
      prev.map((chat) =>
        chat.chatId === chatId
          ? {
              ...chat,
              messages: [...(chat.messages || []), userEntry],
            }
          : chat
      )
    );
    setInput("");

    setIsGenerating(true);
    const aiReply = await chatWithAI(userMessage);
    const botEntry = {
      chatId,
      sender: "Fin Assistant",
      message: aiReply,
      timestamp: new Date().toISOString(),
      sentVia: "Fin AI",
      from: "user",
    };
    setMessages((prev) =>
      prev.map((chat) =>
        chat.chatId === chatId
          ? {
              ...chat,
              messages: [...(chat.messages || []), botEntry],
            }
          : chat
      )
    );

    setIsGenerating(false);
  }

  return (
    <main className="h-screen transition-colors duration-300 flex justify-center items-center mx-auto max-w-5/6 lg:max-w-3/4 xl:max-w-2/3">
      <div className="grid shadow-2xl h-[90vh] min-w-full rounded-2xl grid-cols-1 sm:grid-cols-[60%_40%] lg:grid-cols-[25%_45%_30%] bg-[#fcfcfc] text-#111827">
        <div className="hidden lg:block">
          <Inbox
            messages={messages}
            activeChatId={activeChatId}
            setActiveChatId={setActiveChatId}
          />
        </div>
        <Chat
          isGenerating={isGenerating}
          input={input}
          chat={activeChat}
          handleSend={handleSend}
          setInput={setInput}
        />
        <div className="hidden sm:block">
          <Copilot />
        </div>
      </div>
    </main>
  );
}

export default App;
