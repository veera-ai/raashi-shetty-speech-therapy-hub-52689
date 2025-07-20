import React, { useState, useRef, useEffect } from "react";
import "./AIChat.css";

// Example function for AI Response (simulate with pre-set advice).
const getAIResponse = (message) => {
  if (message.toLowerCase().includes("late")) return "It's common for children to vary. If your child isn't meeting milestones, a consult can help!";
  if (message.toLowerCase().includes("stutter")) return "Stuttering can often be improved with early exercises and guided therapy. Would you like some practice tips?";
  return "Thanks for your query! For personalized advice, please describe your child's age and main concern.";
};

// PUBLIC_INTERFACE
function AIChat() {
  /**
   * AI-powered chatbot for queries.
   */
  const [messages, setMessages] = useState([{from: "ai", text: "Hi! Ask me anything about speech and language."}]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  // PUBLIC_INTERFACE
  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, {from: "user", text: input.trim()}]);
    setTimeout(() => {
      setMessages(prev => [...prev, {from: "ai", text: getAIResponse(input.trim())}]);
    }, 800);
    setInput("");
  };

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section className="sb-ai-chat-page">
      <h1>Ask the AI Chat</h1>
      <div className="sb-chat-bubble-box">
        {messages.map((msg,i) => (
          <div key={i} className={"sb-chat-bubble " + (msg.from === "user" ? "sb-chat-bubble-user":"sb-chat-bubble-ai")}>
            {msg.text}
          </div>
        ))}
        <div ref={chatRef}></div>
      </div>
      <form className="sb-chat-input-row" onSubmit={e => {e.preventDefault(); sendMessage();}}>
        <input
          aria-label="Type your message"
          value={input}
          onChange={e=>setInput(e.target.value)}
          type="text"
          placeholder="Type your question here..."
        />
        <button className="sb-btn" type="submit">Send</button>
      </form>
      <p className="sb-ai-disclaimer">*AI does not replace professional consultation. For specific concerns, schedule a session.</p>
    </section>
  );
}
export default AIChat;
