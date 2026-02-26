import React, { useState } from "react";

const TOPIC_LABELS = {
  skills: "Skills",
  experience: "Experience",
  projects: "Projects",
  education: "Education",
  contact: "Contact",
  aiml: "AI/ML",
  certifications: "Certs",
  interests: "Interests",
};

const ExplorationTracker = ({ exploredTopics, topicKeys, badges, earnedBadges }) => {
  const [expanded, setExpanded] = useState(false);
  const total = Object.keys(topicKeys).length;
  const explored = exploredTopics.size;

  if (explored === 0) return null;

  return (
    <div className="chat_explorer">
      <button className="chat_explorer_toggle" onClick={() => setExpanded(!expanded)}>
        <div className="chat_explorer_bar_container">
          <div
            className="chat_explorer_bar"
            style={{ width: `${(explored / total) * 100}%` }}
          />
        </div>
        <span className="chat_explorer_label">
          {explored}/{total} topics explored
          {earnedBadges.size > 0 && ` \u00b7 ${earnedBadges.size} badge${earnedBadges.size !== 1 ? "s" : ""}`}
        </span>
      </button>

      {expanded && (
        <div className="chat_explorer_details">
          <div className="chat_explorer_topics">
            {Object.keys(topicKeys).map((key) => (
              <span
                key={key}
                className={`chat_explorer_topic ${exploredTopics.has(key) ? "chat_explorer_topic_found" : ""}`}
              >
                {TOPIC_LABELS[key] || key}
              </span>
            ))}
          </div>
          {earnedBadges.size > 0 && (
            <div className="chat_explorer_badges">
              {badges
                .filter((b) => earnedBadges.has(b.id))
                .map((b) => (
                  <span key={b.id} className="chat_explorer_badge" title={b.desc}>
                    {b.icon} {b.label}
                  </span>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExplorationTracker;
