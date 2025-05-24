import React, { useState } from "react";
import { FaArrowUp, FaIntercom } from "react-icons/fa";
import { finCopilotAnswer } from "../utils/FinCopilotChat";
import { SyncLoader } from "react-spinners";
import { randomStaticQuestion } from "../static-data";

export default function CopilotChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [isAnswering, setIsAnswering] = useState(false);
  const [randomQuestion, setRandomQuestion] = useState(randomStaticQuestion);

  async function handleSend(ques) {
    if (!ques.trim()) return;
    setIsAnswering(true);

    try {
      const response = await finCopilotAnswer(ques);
      setAnswer(response);
    } catch (error) {
      setAnswer("Oops, something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsAnswering(false);
    }

    setQuestion("");
  }

  if (isAnswering) {
    return (
      <div className="flex flex-col h-full w-full overflow-y-auto">
        <div className="flex flex-col flex-grow items-center justify-center text-center">
          <SyncLoader color="#6a7282" size={8} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full overflow-y-auto">
      {!answer && (
        <div className="flex flex-col flex-grow items-center justify-center text-center">
          <FaIntercom size={40} />
          <p className="font-semibold mt-2">Hi, I'm Fin AI Copilot</p>
          <p className="text-sm mt-1">
            Ask me anything about this conversation.
          </p>
        </div>
      )}

      {answer && (
        <div className="flex-grow p-4 overflow-auto bg-transparent rounded-lg mb-4 overflow-y-auto">
          <p className="text-left whitespace-pre-wrap">{answer}</p>
        </div>
      )}
      <div className="mb-2">
        <div
          className="cursor-pointer inline-block bg-white hover:scale-[1.02] transition-all duration-300 text-sm text-blacks px-3 py-1 rounded-md "
          onClick={() => {
            handleSend(randomQuestion);
          }}
        >
          💡 <span className="font-semibold">Suggested:</span> {randomQuestion}
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-[#fcfcfc] w-full">
        <textarea
          name="copilot"
          id="copilot-question"
          placeholder="Ask a question..."
          className="flex resize-none w-full h-16 md:h-10 border-none outline-none px-3 py-1 md:py-2 placeholder:text-xs lg:placeholder:text-sm overflow-y-auto scrollbar-hide"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          disabled={isAnswering}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault(); // prevent newline on Enter
              if (!isAnswering && question.trim().length > 0) {
                handleSend(question);
              }
            }
          }}
        />
        <FaArrowUp
          size={16}
          className={`me-4 outline-none ${
            isAnswering || !question.trim()
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-500 hover:cursor-pointer"
          }`}
          onClick={() => {
            if (!isAnswering && question.trim()) {
              handleSend(question);
            }
          }}
          aria-label="Send question"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (
              (e.key === "Enter" || e.key === " ") &&
              !isAnswering &&
              question.trim()
            ) {
              e.preventDefault();
              handleSend(question);
            }
          }}
        />
      </div>
    </div>
  );
}
