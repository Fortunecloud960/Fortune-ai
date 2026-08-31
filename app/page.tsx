"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  async function sendMessage() {
    if (!message.trim()) return;

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    setReply(data.reply || data.error);
  }

  return (
    <main>
      <div className="card">
        <div className="logo">✨</div>

        <h1>Fortune AI</h1>

        <p>Your intelligent AI assistant.</p>

        <input
          type="text"
          placeholder="Ask Fortune AI anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={sendMessage}>Start Chatting</button>

        {reply && <div className="reply">{reply}</div>}
      </div>
    </main>
  );
}
