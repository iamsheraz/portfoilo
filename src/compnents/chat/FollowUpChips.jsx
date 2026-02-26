import React from "react";

const FollowUpChips = ({ followUps, onSelect }) => {
  if (!followUps || followUps.length === 0) return null;

  return (
    <div className="chat_followups">
      {followUps.map((q) => (
        <button
          key={q}
          className="chat_followup_chip"
          onClick={() => onSelect(q)}
        >
          {q}
        </button>
      ))}
    </div>
  );
};

export default FollowUpChips;
