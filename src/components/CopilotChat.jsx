import React from "react";
import { FaArrowUp, FaIntercom } from "react-icons/fa";

export default function CopilotChat() {
  return (
    <>
      <div className="flex flex-col flex-grow items-center justify-center text-center">
        <FaIntercom size={40} />
        <p className="font-semibold mt-2">Hi, I'm Fin AI Copilot</p>
        <p className="text-sm mt-1">Ask me anything about this conversation.</p>
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-[#fcfcfc] w-full ">
        <textarea
          name="copilot"
          id="copilot-question"
          placeholder="Ask a question..."
          className="flex resize-none w-full h-16 md:h-10 border-none outline-none border px-3 py-1 md:py-2 placeholder:text-xs lg:placeholder:text-sm overflow-y-auto scrollbar-hide"
        ></textarea>

        <FaArrowUp
          size={12}
          className="me-4 text-gray-500 hover:cursor-pointer"
        />
      </div>
    </>
  );
}
