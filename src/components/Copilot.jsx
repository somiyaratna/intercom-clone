import React, { useState } from "react";
import { FaAngleUp, FaArrowUp, FaIntercom } from "react-icons/fa";

export default function Copilot() {
  const [activeTab, setActiveTab] = useState("copilot");
  return (
    <div className="h-full shadow-lg px-3 py-3 rounded-e-2xl">
      <div className="flex items-center gap-6 font-semibold pb-2 border-b-[1px] border-gray-400">
        <button
          onClick={() => setActiveTab("copilot")}
          className={`hover:cursor-pointer`}
        >
          AI Copilot
        </button>
        <button
          onClick={() => setActiveTab("details")}
          className={`hover:cursor-pointer`}
        >
          Details
        </button>
      </div>
      <div className="h-full w-full flex flex-col flex-grow justify-center items-center">
        {activeTab === "copilot" && (
          <div className="flex flex-col flex-grow justify-center items-center w-full px-4">
            {/* Centered content */}
            <div className="flex flex-col items-center justify-center flex-grow text-center">
              <FaIntercom size={40} />
              <p className="font-semibold mt-2">Hi, I'm Fin AI Copilot</p>
              <p className="text-sm mt-1">
                Ask me anything about this conversation.
              </p>
            </div>

            {/* Bottom textarea */}
            <div className="flex items-center gap-2 my-10 rounded-lg shadow-xl mt-auto w-full">
              <textarea
                name="copilot"
                id="copilot-question"
                placeholder="Ask a question..."
                className="flex resize-none w-full h-10 border-none outline-none border px-3 py-2 placeholder:text-sm"
              ></textarea>

              <FaArrowUp className="me-4 text-gray-500 hover:cursor-pointer" />
            </div>
          </div>
        )}

        {activeTab === "details" && <div>Details</div>}
      </div>
    </div>
  );
}
