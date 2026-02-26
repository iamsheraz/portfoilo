import React, { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import ChatHeader from "../compnents/chat/ChatHeader";
import MessageBubble from "../compnents/chat/MessageBubble";
import SuggestedQuestions from "../compnents/chat/SuggestedQuestions";

const Chat = () => {
  const { messages, sendMessage, status, error } = useChat({
    api: "/api/chat",
  });

  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSuggestionClick = (question) => {
    sendMessage({ text: question });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  };

  return (
    <section className="chat_page">
      <div className="chat_container">
        <ChatHeader />

        <div className="chat_messages">
          {messages.length === 0 && (
            <div className="chat_welcome">
              <h3 className="chat_welcome_title">Hey there!</h3>
              <p className="chat_welcome_text">
                I'm an AI assistant for Sheraz's portfolio. Ask me anything about his skills, experience, or projects.
              </p>
              <SuggestedQuestions onSelect={handleSuggestionClick} />
            </div>
          )}

          {messages.map((msg) => (
            <MessageBubble key={msg.id} role={msg.role} parts={msg.parts} />
          ))}

          {isLoading && messages[messages.length - 1]?.role === "user" && (
            <div className="chat_message chat_message_assistant">
              <div className="chat_bubble chat_bubble_assistant">
                <div className="chat_typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="chat_error">
              Something went wrong. Please try again or email Sheraz at sherazztariq@gmail.com
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form className="chat_input_form" onSubmit={handleSubmit}>
          <input
            className="chat_input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about Sheraz..."
            disabled={isLoading}
          />
          <button className="chat_send_btn" type="submit" disabled={isLoading || !input.trim()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Chat;
