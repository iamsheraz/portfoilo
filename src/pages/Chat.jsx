import React from "react";
import { Link } from "react-router";

const Chat = () => {
  return (
    <section className="chat_page container-lg p-5">
      <div className="d-flex flex-column align-items-center justify-content-center py-5">
        <h1 className="hero_txt text-center">Ask Sheraz</h1>
        <p className="sub_txt my-4 text-center">
          AI-powered chat coming soon. Ask me anything about my experience, skills, and projects.
        </p>
        <Link to="/" className="chat">
          Back to Portfolio
        </Link>
      </div>
    </section>
  );
};

export default Chat;
