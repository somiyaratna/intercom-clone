import Chat from "./components/Chat";
import Copilot from "./components/Copilot";
import Inbox from "./components/Inbox";
import { messages } from "./static-data";

function App() {
  return (
    <main className="h-screen  transition-colors duration-300 flex justify-center items-center min-w-fit mx-auto max-w-3/4">
      <div className="grid shadow-2xl h-[90vh] min-w-full rounded-2xl grid-cols-1 sm:grid-cols-[70%_30%] lg:grid-cols-[20%_50%_30%] bg-[#fcfcfc] text-#111827">
        <div className="hidden lg:block">
          <Inbox messages={messages} />
        </div>
        <Chat />
        <div className="hidden sm:block">
          <Copilot />
        </div>
      </div>
    </main>
  );
}

export default App;
