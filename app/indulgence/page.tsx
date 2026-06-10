"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

type Phase = "form" | "relieved";

export default function Indulgence() {
  const [phase, setPhase] = useState<Phase>("form");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [sin, setSin] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setPhase("relieved");
  }

  function reset() {
    setName("");
    setBirthDate("");
    setSin("");
    setPhase("form");
  }

  return (
    <div
      className="min-h-screen relative flex flex-col items-center justify-center py-12 px-4"
      style={{
        backgroundImage: "url(/bg-indulgence.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Light warm overlay */}
      <div className="absolute inset-0 bg-amber-50/30 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-5">

        {/* Meet our Elders link */}
        <div className="text-center fade-up">
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.58rem",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "#8a7050",
              marginBottom: "4px",
            }}
          >
            ✦ &nbsp; Ancient Circle &nbsp; ✦
          </p>
          <Link
            href="/elders"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "#7a5a2a",
              textDecoration: "none",
              letterSpacing: "0.06em",
            }}
          >
            Click Here to - Meet Our Elders
          </Link>
        </div>

        {/* ── Latin proclamation ── */}
        <div className="fire-border-outer w-full fade-up">
          <div className="fire-border-inner">
            <p
              className="latin-text"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Indulgentia plenaria perpetua quotidiana toties quoties pro vivis
              et defunctis.
            </p>
          </div>
        </div>

        {/* ── Form / Relieved card ── */}
        <div className="indulgence-card fade-up" style={{ animationDelay: "0.15s" }}>

          {phase === "form" ? (
            <>
              <h2
                className="text-center mb-6"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "0.62rem",
                  letterSpacing: "0.38em",
                  textTransform: "uppercase",
                  color: "#8b5e30",
                }}
              >
                Confess Your Sin
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Full name */}
                <div>
                  <label className="indulgence-label">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    required
                    className="indulgence-input"
                  />
                </div>

                {/* Date of birth */}
                <div>
                  <label className="indulgence-label">Date of Birth</label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    required
                    className="indulgence-input"
                    style={{ colorScheme: "light" }}
                  />
                </div>

                {/* Sin */}
                <div>
                  <label className="indulgence-label">Your Sin</label>
                  <textarea
                    value={sin}
                    onChange={(e) => setSin(e.target.value)}
                    placeholder="Confess in detail…"
                    required
                    rows={3}
                    className="indulgence-input resize-none"
                  />
                </div>

                <button type="submit" className="relieve-btn mt-1">
                  Relieve the Sin
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center gap-5">
              {/* Ornament */}
              <span style={{ fontSize: "2rem", lineHeight: 1 }}>✝</span>

              <p className="absolution-msg">
                Your sin is relieved. A prayer might help to receive salvation.
                <br /><br />
                Don&rsquo;t upset your Angel and don&rsquo;t do bad next time.
              </p>

              <div className="w-full flex flex-col gap-2 mt-1">
                <button className="ghost-btn-light" onClick={reset}>
                  ← Relieve Another Sin
                </button>
                <Link href="/curses" className="indulgence-link text-center block">
                  🌑 Back to Curses
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Back link (shown only on form phase) */}
        {phase === "form" && (
          <Link
            href="/curses"
            className="indulgence-link fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            🌑 Back to Curses
          </Link>
        )}
      </div>
    </div>
  );
}
