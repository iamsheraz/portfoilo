import React from "react";

const SuggestedQuestions = ({ onSelect }) => {
  return (
    <div className="chat_welcome">
      <div className="chat_welcome_emoji">👋</div>
      <h3 className="chat_welcome_title">Hey, I'm Sheraz!</h3>
      <p className="chat_welcome_text">
        Well, an AI version of me. I know everything about my skills,
        experience, and projects. How would you like to get started?
      </p>

      <div className="chat_welcome_choices">
        <button
          className="chat_welcome_choice_btn chat_welcome_choice_tour"
          onClick={() => onSelect("Give me a quick overview of who you are")}
        >
          <span className="chat_welcome_choice_icon">⚡</span>
          <span className="chat_welcome_choice_label">Quick Tour</span>
          <span className="chat_welcome_choice_desc">The highlights in 30 seconds</span>
        </button>
        <button
          className="chat_welcome_choice_btn chat_welcome_choice_story"
          onClick={() => onSelect("Tell me your career story from the beginning")}
        >
          <span className="chat_welcome_choice_icon">📖</span>
          <span className="chat_welcome_choice_label">Full Story</span>
          <span className="chat_welcome_choice_desc">The journey, with all the good parts</span>
        </button>
      </div>

      <div className="chat_suggestions">
        <p className="chat_suggestions_label">Or ask me anything:</p>
        <div className="chat_suggestions_list">
          {[
            "What's your tech stack?",
            "Tell me about AuditGPT",
            "What makes you unique?",
            "How can I hire you?",
          ].map((q) => (
            <button
              key={q}
              className="chat_suggestion_chip"
              onClick={() => onSelect(q)}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      <p className="chat_easter_hint">
        psst... try <code>/hire-me</code>, <code>/joke</code>, or <code>/terminal</code>
      </p>
    </div>
  );
};

export default SuggestedQuestions;
