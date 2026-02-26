import React from "react";
import { Link } from "react-router";
import chatImg from "../../assets/imgs/memoji-smiling.webp";

const ChatHeader = ({ hasMessages, onNewChat }) => {
  return (
    <div className="chat_header">
      <Link to="/" className="chat_back_btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back
      </Link>
      <div className="chat_header_info">
        <img src={chatImg} alt="Sheraz" className="chat_header_avatar" />
        <div>
          <h2 className="chat_header_name">Ask Sheraz</h2>
          <span className="chat_header_status">AI-powered assistant</span>
        </div>
      </div>
      {hasMessages && (
        <button className="chat_new_chat_btn" onClick={onNewChat}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
          New Chat
        </button>
      )}
    </div>
  );
};

export default ChatHeader;
