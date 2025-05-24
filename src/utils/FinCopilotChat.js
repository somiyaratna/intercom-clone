const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

export async function finCopilotAnswer(userQuestion) {
  const response = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama3-8b-8192",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful business assistant who provides clear, concise and brief answers about business policies such as refunds, returns, and purchases.",
        },
        {
          role: "user",
          content: userQuestion,
        },
      ],
    }),
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "No response from AI.";
}
