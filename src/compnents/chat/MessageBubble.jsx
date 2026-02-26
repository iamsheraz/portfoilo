import React from "react";

const MessageBubble = ({ role, content }) => {
  return (
    <div className={`chat_message chat_message_${role}`}>
      <div className={`chat_bubble chat_bubble_${role}`}>
        <p className="chat_bubble_text">{content}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
