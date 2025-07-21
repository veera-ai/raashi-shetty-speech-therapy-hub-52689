import React, { useState, useRef, useEffect } from "react";
import "./AIChat.css";

/**
 * Helper function to fetch OpenAI API response securely.
 * Uses the environment variable REACT_APP_OPENAI_API_KEY from .env.
 * Users must set REACT_APP_OPENAI_API_KEY in .env (never clientside hard-coded).
 */
async function fetchOpenAIChatResponse(userMessage) {
  // Never expose your API key directly in production apps.
  // This references REACT_APP_OPENAI_API_KEY set in the .env file at build time.
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  if (!apiKey) {
    return "OpenAI API key not configured. Please contact site administrator.";
  }
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant giving friendly, concise answers about speech and language development, milestones, and therapy. Respond clearly for a broad audience, but avoid medical diagnoses."
          },
          {
            role: "user",
            content: userMessage
          }
        ],
        max_tokens: 256,
        temperature: 0.6
      })
    });
    if (!response.ok) {
      return "Sorry, I couldn't get a response from the AI right now. Please try again later.";
    }
    const json = await response.json();
    const aiMessage = json.choices?.[0]?.message?.content;
    return aiMessage
      ? aiMessage.trim()
      : "Sorry, something went wrong. Try again.";
  } catch (err) {
    return "Error reaching OpenAI. Check your internet connection.";
  }
}

// PUBLIC_INTERFACE
function AIChat() {
  /**
   * AI-powered chatbot for queries.
   */
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi! Ask me anything about speech and language." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  // PUBLIC_INTERFACE
  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { from: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    // Show typing/AI is responding...
    setMessages(prev => [...prev, { from: "ai", text: "..." }]);
    try {
      const aiReply = await fetchOpenAIChatResponse(userMsg);
      setMessages(prev => [
        ...prev.slice(0, prev.length - 1), // remove "..." placeholder
        { from: "ai", text: aiReply }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section className="sb-ai-chat-page">
      <h1>Ask the AI Chat</h1>
      <div className="sb-chat-bubble-box">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={
              "sb-chat-bubble " +
              (msg.from === "user" ? "sb-chat-bubble-user" : "sb-chat-bubble-ai")
            }
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatRef}></div>
      </div>
      <form
        className="sb-chat-input-row"
        onSubmit={e => {
          e.preventDefault();
          sendMessage();
        }}
        autoComplete="off"
      >
        <input
          aria-label="Type your message"
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          placeholder="Type your question here..."
          disabled={loading}
        />
        <button className="sb-btn" type="submit" disabled={loading || !input.trim()}>
          {loading ? "..." : "Send"}
        </button>
      </form>
      <p className="sb-ai-disclaimer">
        *AI does not replace professional consultation. For specific concerns, schedule a session.
      </p>
    </section>
  );
}
export default AIChat;
