import Chat from "./components/Chat";
import Copilot from "./components/Copilot";
import Inbox from "./components/Inbox";
import { messages } from "./static-data";

function App() {
  return (
    <main className="h-screen transition-colors duration-300 flex justify-center items-center min-w-fit mx-auto max-w-5/6 lg:max-w-3/4 xl:max-w-2/3">
      <div className="grid shadow-2xl h-[90vh] min-w-full rounded-2xl grid-cols-1 sm:grid-cols-[60%_40%] lg:grid-cols-[25%_45%_30%] bg-[#fcfcfc] text-#111827">
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
