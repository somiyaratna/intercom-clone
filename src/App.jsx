import "./App.css";
import Chat from "./components/Chat";
import Copilot from "./components/Copilot";
import Inbox from "./components/Inbox";
import { messages } from "./static-data";

function App() {
  return (
    <main className="min-h-screen transition-colors duration-300 flex justify-center items-center min-w-fit mx-auto max-w-[1280px]">
      <div className="grid p-2 h-[90vh] min-w-full rounded-lg  grid-cols-[20%_50%_30%] bg-[var(--bg-color)] text-[var(--text-color)]">
        <Inbox messages={messages} />
        <Chat />
        <Copilot />
      </div>
    </main>
  );
}

export default App;
