import { useState } from "react";
import { FaIntercom } from "react-icons/fa";
import { LuPanelLeft, LuSquareArrowOutUpRight } from "react-icons/lu";
import CopilotChat from "./CopilotChat";
import CopilotDetails from "./CopilotDetails";

export default function Copilot() {
  const [activeTab, setActiveTab] = useState("copilot");

  return (
    <div
      className={`h-full min-h-fit border-l-[1px] flex-grow flex flex-col border-gray-100 px-3 rounded-e-2xl overflow-hidden text-xs lg:text-sm ${
        activeTab === "copilot"
          ? "bg-gradient-to-b from-blue-50 via-white to-rose-200"
          : ""
      } `}
    >
      <div className="flex transition-all duration-300 px-1 pt-3 items-center gap-6 font-semibold pb-2">
        <button
          onClick={() => setActiveTab("copilot")}
          className={`hover:cursor-pointer flex items-center gap-1 pb-3 ${
            activeTab === "copilot"
              ? "bg-gradient-to-r from-blue-700 to-rose-300 bg-clip-text text-transparent border-blue-700 z-10 border-b-2"
              : "text-gray-400"
          }`}
        >
          <FaIntercom
            size={12}
            className={`hidden md:block ${
              activeTab === "copilot" ? "text-blue-700" : "text-gray-400"
            }`}
          />
          <span>AI Copilot</span>
        </button>
        <button
          onClick={() => setActiveTab("details")}
          className={`hover:cursor-pointer pb-3 ${
            activeTab === "details"
              ? "bg-gradient-to-r z-10 from-blue-700 to-rose-300 bg-clip-text text-transparent border-b-2 border-blue-700"
              : "text-gray-400"
          }`}
        >
          Details
        </button>
        <div className="ml-auto me-2 mb-3 text-gray-800 flex items-center gap-4">
          {activeTab === "details" && (
            <LuSquareArrowOutUpRight size={15} strokeWidth={3} />
          )}
          <LuPanelLeft strokeWidth={3} size={15} />
        </div>
      </div>
      <div
        className={`w-full flex flex-col justify-center items-center ${
          activeTab === "copilot" && "flex-grow"
        } pb-4 `}
      >
        {activeTab === "copilot" && <CopilotChat />}

        {activeTab === "details" && <CopilotDetails />}
      </div>
    </div>
  );
}
