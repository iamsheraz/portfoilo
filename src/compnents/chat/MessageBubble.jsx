import React, { useState } from "react";
import Markdown from "react-markdown";

const REACTIONS = ["\ud83d\udc4d", "\ud83d\udd25", "\ud83d\udca1", "\u2764\ufe0f"];

const MessageBubble = ({ role, displayText, terminalMode }) => {
  const [reaction, setReaction] = useState(null);
  const [showReactions, setShowReactions] = useState(false);

  if (!displayText) return null;

  return (
    <div
      className={`chat_message chat_message_${role}`}
      onMouseEnter={() => role === "assistant" && setShowReactions(true)}
      onMouseLeave={() => setShowReactions(false)}
    >
      <div className={`chat_bubble chat_bubble_${role}`}>
        {role === "assistant" ? (
          <div className="chat_bubble_text chat_markdown">
            <Markdown>{displayText}</Markdown>
          </div>
        ) : (
          <p className="chat_bubble_text">{displayText}</p>
        )}
      </div>

      {role === "assistant" && (showReactions || reaction) && (
        <div className="chat_reactions">
          {reaction ? (
            <button
              className="chat_reaction_selected"
              onClick={() => setReaction(null)}
            >
              {reaction}
            </button>
          ) : (
            REACTIONS.map((emoji) => (
              <button
                key={emoji}
                className="chat_reaction_btn"
                onClick={() => {
                  setReaction(emoji);
                  setShowReactions(false);
                }}
              >
                {emoji}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
