import React from "react";

const MessageBubble = ({ role, parts }) => {
  const text = parts
    .filter((p) => p.type === "text")
    .map((p) => p.text)
    .join("");

  if (!text) return null;

  return (
    <div className={`chat_message chat_message_${role}`}>
      <div className={`chat_bubble chat_bubble_${role}`}>
        <p className="chat_bubble_text">{text}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
