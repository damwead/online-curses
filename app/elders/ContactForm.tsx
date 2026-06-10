"use client";

import { useState, FormEvent } from "react";
import { sendContactEmail } from "../actions/contact";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus]   = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendContactEmail({ name, email, message });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="w-full"
      style={{
        background:     "rgba(10, 5, 20, 0.6)",
        border:         "1px solid rgba(154, 111, 206, 0.2)",
        borderRadius:   "6px",
        padding:        "36px 32px",
        backdropFilter: "blur(5px)",
      }}
    >
      <p
        className="tracking-[0.4em] uppercase mb-2"
        style={{ fontFamily: "Georgia, serif", fontSize: "0.58rem", color: "#7a5aaa" }}
      >
        ✦ &nbsp; Ancient Circle &nbsp; ✦
      </p>
      <h2
        style={{
          fontFamily:    "Georgia, 'Times New Roman', serif",
          fontSize:      "1.5rem",
          fontWeight:    700,
          color:         "#e8d0ff",
          letterSpacing: "0.06em",
          textShadow:    "0 1px 14px rgba(160, 80, 255, 0.4)",
          marginBottom:  "6px",
        }}
      >
        Ask Elders a question
      </h2>
      <div style={{ width: "50px", height: "1px", background: "rgba(154,111,206,0.45)", marginBottom: "28px" }} />

      {status === "sent" ? (
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontStyle:  "italic",
            color:      "#c49ef0",
            fontSize:   "0.95rem",
            lineHeight: "1.8",
          }}
        >
          Your message has been sent.
          <br /><br />
          The Elders will answer your call.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="elder-label">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Full name"
              required
              disabled={status === "sending"}
              className="elder-input"
            />
          </div>

          <div>
            <label className="elder-label">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === "sending"}
              className="elder-input"
            />
          </div>

          <div>
            <label className="elder-label">Message</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Speak your mind to the Elders…"
              required
              rows={4}
              disabled={status === "sending"}
              className="elder-input resize-none"
            />
          </div>

          {status === "error" && (
            <p style={{ color: "#f08080", fontFamily: "Georgia, serif", fontSize: "0.8rem" }}>
              Something went wrong. Please try again.
            </p>
          )}

          <button type="submit" disabled={status === "sending"} className="elder-btn mt-1">
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
