import React, { useState, useRef, useEffect, useCallback } from "react";
import { useChat } from "@ai-sdk/react";
import ChatHeader from "../compnents/chat/ChatHeader";
import MessageBubble from "../compnents/chat/MessageBubble";
import SuggestedQuestions from "../compnents/chat/SuggestedQuestions";
import FollowUpChips from "../compnents/chat/FollowUpChips";
import ExplorationTracker from "../compnents/chat/ExplorationTracker";

const TOPIC_KEYWORDS = {
  skills: ["skills", "technologies", "programming", "languages", "framework", "java", "python", "react", "spring boot"],
  experience: ["experience", "nextgear", "work history", "job", "career", "cox automotive", "employee of the quarter"],
  projects: ["project", "auditgpt", "triage", "portfolio", "autocheck", "hackathon"],
  education: ["education", "university", "degree", "master", "ut austin", "bachelor", "coursework"],
  contact: ["contact", "email", "linkedin", "reach out", "hire"],
  aiml: ["machine learning", "deep learning", "nlp", "llm", "rag", "fine-tun", "transformer", "faiss", "pytorch"],
  certifications: ["certification", "aws certified", "azure certified", "cloud practitioner"],
  interests: ["interest", "passion", "hobby", "leadership", "strength", "unique"],
};

const BADGES = [
  { id: "first_question", label: "First Question", icon: "\ud83c\udfaf", desc: "Asked your first question" },
  { id: "deep_diver", label: "Deep Diver", icon: "\ud83e\udd3f", desc: "Asked 5+ questions" },
  { id: "explorer", label: "Explorer", icon: "\ud83d\uddfa\ufe0f", desc: "Explored 5+ topics" },
  { id: "night_owl", label: "Night Owl", icon: "\ud83e\udd89", desc: "Chatting after midnight" },
  { id: "secret_agent", label: "Secret Agent", icon: "\ud83d\udd75\ufe0f", desc: "Found an easter egg" },
  { id: "completionist", label: "Completionist", icon: "\ud83c\udfc6", desc: "Explored all topics" },
];

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

const TECH_JOKES = [
  "Why do programmers prefer dark mode? Because light attracts bugs! \ud83e\udeb2",
  "There are only 10 types of people in the world: those who understand binary and those who don't.",
  "A SQL query walks into a bar, sees two tables, and asks... 'Can I JOIN you?'",
  "Why was the JavaScript developer sad? Because he didn't Node how to Express himself! \ud83d\ude05",
  "What's a developer's favorite hangout place? Foo Bar! \ud83c\udf7b",
];

function parseMessage(parts) {
  const text = parts
    .filter((p) => p.type === "text")
    .map((p) => p.text)
    .join("");
  const marker = "<<FOLLOWUPS>>";
  const idx = text.indexOf(marker);
  if (idx === -1) return { displayText: text, followUps: [] };
  const displayText = text.substring(0, idx).trim();
  const followUps = text
    .substring(idx + marker.length)
    .trim()
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);
  return { displayText, followUps };
}

const Chat = () => {
  const { messages, setMessages, sendMessage, status, error } = useChat({
    api: "/api/chat",
  });

  const [input, setInput] = useState("");
  const [terminalMode, setTerminalMode] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [exploredTopics, setExploredTopics] = useState(new Set());
  const [earnedBadges, setEarnedBadges] = useState(new Set());
  const [newBadge, setNewBadge] = useState(null);
  const konamiRef = useRef(0);
  const messagesEndRef = useRef(null);
  const isLoading = status === "streaming" || status === "submitted";

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Topic tracking
  useEffect(() => {
    if (messages.length === 0) return;
    const lastMsg = messages[messages.length - 1];
    if (lastMsg.role !== "assistant") return;

    const text =
      lastMsg.parts
        ?.filter((p) => p.type === "text")
        .map((p) => p.text)
        .join("")
        .toLowerCase() || "";

    const newTopics = new Set(exploredTopics);
    for (const [topic, keywords] of Object.entries(TOPIC_KEYWORDS)) {
      if (keywords.some((kw) => text.includes(kw))) {
        newTopics.add(topic);
      }
    }
    if (newTopics.size !== exploredTopics.size) {
      setExploredTopics(newTopics);
    }
  }, [messages]);

  // Badge checking
  useEffect(() => {
    const newBadges = new Set(earnedBadges);
    const userMsgCount = messages.filter((m) => m.role === "user").length;

    if (userMsgCount >= 1) newBadges.add("first_question");
    if (userMsgCount >= 5) newBadges.add("deep_diver");
    if (exploredTopics.size >= 5) newBadges.add("explorer");
    if (exploredTopics.size >= Object.keys(TOPIC_KEYWORDS).length)
      newBadges.add("completionist");
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 5) newBadges.add("night_owl");

    if (newBadges.size !== earnedBadges.size) {
      for (const b of newBadges) {
        if (!earnedBadges.has(b)) {
          const badge = BADGES.find((bd) => bd.id === b);
          if (badge) setNewBadge(badge);
          break;
        }
      }
      setEarnedBadges(newBadges);
    }
  }, [messages, exploredTopics]);

  // Clear badge toast
  useEffect(() => {
    if (newBadge) {
      const timer = setTimeout(() => setNewBadge(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [newBadge]);

  // Konami code listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      const expected = KONAMI[konamiRef.current];
      if (e.key === expected || e.key.toLowerCase() === expected) {
        konamiRef.current += 1;
        if (konamiRef.current === KONAMI.length) {
          konamiRef.current = 0;
          setEarnedBadges((prev) => new Set([...prev, "secret_agent"]));
          setNewBadge(BADGES.find((b) => b.id === "secret_agent"));
        }
      } else {
        konamiRef.current = e.key === KONAMI[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Confetti cleanup
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const addLocalMessages = useCallback(
    (userText, assistantText) => {
      const ts = Date.now();
      setMessages((prev) => [
        ...prev,
        {
          id: `cmd-${ts}`,
          role: "user",
          parts: [{ type: "text", text: userText }],
        },
        {
          id: `resp-${ts}`,
          role: "assistant",
          parts: [{ type: "text", text: assistantText }],
        },
      ]);
    },
    [setMessages]
  );

  const handleEasterEgg = (command) => {
    if (command === "/terminal") {
      const wasTerminal = terminalMode;
      setTerminalMode(!wasTerminal);
      addLocalMessages(
        "/terminal",
        wasTerminal
          ? "Switching back to normal mode. That was fun! \ud83d\ude04"
          : "```\nsheraz@portfolio:~$ echo 'Terminal mode activated'\nTerminal mode activated \ud83d\udda5\ufe0f\nType /terminal again to switch back.\n```"
      );
      setEarnedBadges((prev) => new Set([...prev, "secret_agent"]));
      return true;
    }
    if (command === "/hire-me") {
      setShowConfetti(true);
      addLocalMessages(
        "/hire-me",
        "\ud83c\udf89 **You want to hire me? Let's make it happen!**\n\n\ud83d\udce7 Email: sherazztariq@gmail.com\n\ud83d\udd17 LinkedIn: [linkedin.com/in/mstariq](https://linkedin.com/in/mstariq)\n\ud83d\udcc4 Resume: Available on [hiresheraz.com](https://hiresheraz.com)\n\nI'm actively looking for roles in Software Engineering, AI/ML, and Cloud Engineering. Let's chat! \ud83d\ude80"
      );
      setEarnedBadges((prev) => new Set([...prev, "secret_agent"]));
      return true;
    }
    if (command === "/joke") {
      const joke = TECH_JOKES[Math.floor(Math.random() * TECH_JOKES.length)];
      addLocalMessages("/joke", joke);
      setEarnedBadges((prev) => new Set([...prev, "secret_agent"]));
      return true;
    }
    return false;
  };

  const handleSuggestionClick = (question) => {
    sendMessage({ text: question });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const trimmed = input.trim();

    if (trimmed.startsWith("/")) {
      if (handleEasterEgg(trimmed.toLowerCase())) {
        setInput("");
        return;
      }
    }

    sendMessage({ text: trimmed });
    setInput("");
  };

  // Parse follow-ups from the last assistant message
  const lastAssistantMsg = [...messages].reverse().find((m) => m.role === "assistant");
  const lastFollowUps =
    lastAssistantMsg && !isLoading
      ? parseMessage(lastAssistantMsg.parts || []).followUps
      : [];

  return (
    <section className={`chat_page ${terminalMode ? "chat_terminal" : ""}`}>
      <div className="chat_container">
        <ChatHeader />

        <ExplorationTracker
          exploredTopics={exploredTopics}
          topicKeys={TOPIC_KEYWORDS}
          badges={BADGES}
          earnedBadges={earnedBadges}
        />

        <div className="chat_messages">
          {messages.length === 0 && (
            <SuggestedQuestions onSelect={handleSuggestionClick} />
          )}

          {messages.map((msg) => {
            const { displayText } = parseMessage(msg.parts || []);
            return (
              <MessageBubble
                key={msg.id}
                role={msg.role}
                displayText={displayText}
                terminalMode={terminalMode}
              />
            );
          })}

          {!isLoading && lastFollowUps.length > 0 && (
            <FollowUpChips
              followUps={lastFollowUps}
              onSelect={handleSuggestionClick}
            />
          )}

          {isLoading && messages[messages.length - 1]?.role === "user" && (
            <div className="chat_message chat_message_assistant">
              <div className="chat_bubble chat_bubble_assistant">
                <div className="chat_typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="chat_error">
              Something went wrong. Please try again or email Sheraz at
              sherazztariq@gmail.com
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form className="chat_input_form" onSubmit={handleSubmit}>
          <input
            className="chat_input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              terminalMode
                ? "sheraz@portfolio:~$ "
                : "Ask me anything about Sheraz..."
            }
            disabled={isLoading}
          />
          <button
            className="chat_send_btn"
            type="submit"
            disabled={isLoading || !input.trim()}
          >
            {terminalMode ? (
              <span style={{ fontSize: "16px", fontFamily: "monospace" }}>
                &gt;
              </span>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            )}
          </button>
        </form>
      </div>

      {/* Badge Toast */}
      {newBadge && (
        <div className="chat_badge_toast">
          <span className="chat_badge_toast_icon">{newBadge.icon}</span>
          <div>
            <strong>Badge Earned!</strong>
            <p>{newBadge.label}</p>
          </div>
        </div>
      )}

      {/* Confetti */}
      {showConfetti && (
        <div className="confetti_container">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="confetti_piece"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                backgroundColor: [
                  "#60a5fa",
                  "#a78bfa",
                  "#34d399",
                  "#fbbf24",
                  "#f472b6",
                ][i % 5],
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Chat;
