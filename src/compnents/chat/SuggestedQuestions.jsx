import React from "react";

const questions = [
  "What skills does Sheraz have?",
  "What kind of roles is Sheraz looking for?",
  "Tell me about Sheraz's experience",
  "How can I contact Sheraz?",
];

const SuggestedQuestions = ({ onSelect }) => {
  return (
    <div className="chat_suggestions">
      <p className="chat_suggestions_label">Try asking:</p>
      <div className="chat_suggestions_list">
        {questions.map((q) => (
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
  );
};

export default SuggestedQuestions;
