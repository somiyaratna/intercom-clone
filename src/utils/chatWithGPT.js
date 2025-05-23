import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // only for demos, NOT production
});

export async function getBotReply(userMessage) {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a customer who has questions or feedbacks about a product.",
      },
      {
        role: "user",
        content: userMessage,
      },
    ],
  });

  return chatCompletion.choices[0].message.content;
}
