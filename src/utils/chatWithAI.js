const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

export async function chatWithAI(userMessage) {
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
            "You are a customer who replies with a short, one-liner question or feedback directly related to the company message you receive. Be concise and relevant.",
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
    }),
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "No response from AI.";
}
