import React from "react";
import Markdown from "react-markdown";

const MessageBubble = ({ role, parts }) => {
  const text = parts
    .filter((p) => p.type === "text")
    .map((p) => p.text)
    .join("");

  if (!text) return null;

  return (
    <div className={`chat_message chat_message_${role}`}>
      <div className={`chat_bubble chat_bubble_${role}`}>
        {role === "assistant" ? (
          <div className="chat_bubble_text chat_markdown">
            <Markdown>{text}</Markdown>
          </div>
        ) : (
          <p className="chat_bubble_text">{text}</p>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
