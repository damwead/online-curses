"use client";

import Link from "next/link";
import { useState, useEffect, FormEvent } from "react";

type Phase = "loading" | "form" | "cursed";

function CursedWord() {
  return (
    <svg
      viewBox="0 0 380 82"
      width="380"
      height="82"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: "block", margin: "0 auto" }}
    >
      <defs>
        <filter id="liquid" x="-12%" y="-35%" width="124%" height="170%">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.016 0.085"
            numOctaves="3"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              values="0.016 0.085; 0.028 0.13; 0.016 0.085"
              dur="3.8s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="14"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        <linearGradient id="cursed-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#7fff7f" />
          <stop offset="55%"  stopColor="#28d428" />
          <stop offset="100%" stopColor="#0a7a0a" />
        </linearGradient>
      </defs>

      <text
        x="50%"
        y="68%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="url(#cursed-grad)"
        filter="url(#liquid)"
        fontSize="70"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="bold"
        letterSpacing="4"
      >
        cursed
      </text>
    </svg>
  );
}

export default function Home() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [reason, setReason] = useState("");
  const [additional, setAdditional] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setPhase("form"), 200);
    return () => clearTimeout(t);
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setPhase("cursed");
  }

  /* ── LOADING ── */
  if (phase === "loading") {
    return (
      <div className="min-h-screen bg-[#030d03] flex flex-col items-center justify-center select-none">
        <div className="pentagram-spin">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/pentagram.svg" alt="" width={300} height={300} />
        </div>

        <div className="mt-10 flex gap-3">
          {([0, 0.22, 0.44] as const).map((d, i) => (
            <span
              key={i}
              className="pulse-dot"
              style={{ animationDelay: `${d}s` }}
            />
          ))}
        </div>

        <p
          className="mt-5 text-[#2a6a2a] text-xs tracking-[0.38em] uppercase"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Preparing your curse&hellip;
        </p>
      </div>
    );
  }

  /* ── CURSED ── */
  if (phase === "cursed") {
    return (
      <div className="min-h-screen bg-[#020802] flex flex-col items-center justify-center gap-6 px-4 fade-in">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/racoon.gif"
          alt="Chaos raccoon"
          className="racoon-in w-60 h-auto"
        />

        <h1
          className="title-in text-center text-[#d4f0d4] tracking-[0.12em] uppercase"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: 700,
          }}
        >
          Your victim is
          <br />
          <CursedWord />
        </h1>
        <div className="flex flex-col items-center gap-3 w-full max-w-xs mt-2">
          <button className="ghost-btn" onClick={() => setPhase("form")}>
            ← Cast Another Curse
          </button>
          <Link href="/indulgence" className="indulgence-link">
            🔥 Seek Indulgence
          </Link>
        </div>
      </div>
    );
  }

  /* ── FORM ── */
  return (
    <div
      className="min-h-screen relative flex flex-col items-center justify-center py-12 px-4 fade-in"
      style={{
        backgroundImage: "url(/bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-md">

        {/* Meet our Elders link */}
        <div className="w-full text-center mb-5 slide-up">
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.58rem",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "#3a6a3a",
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
              color: "#7ac47a",
              textDecoration: "none",
              letterSpacing: "0.06em",
              textShadow: "0 0 12px rgba(80,160,80,0.5)",
            }}
          >
            Meet Our Elders
          </Link>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="form-glow slide-up w-full bg-[rgba(3,14,3,0.90)] border border-[#1a4a1a] px-8 py-8"
          style={{ animationDelay: "0.12s", backdropFilter: "blur(6px)" }}
        >
          <h2
            className="text-[#3d7a3d] text-[0.65rem] tracking-[0.4em] uppercase mb-7 text-center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Submit a Curse Request
          </h2>

          {/* Full name */}
          <div className="mb-4">
            <label
              className="block text-[#365e36] text-[0.62rem] tracking-[0.3em] uppercase mb-1.5"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Full Name of Victim
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Michael Smith"
              required
              className="curse-input"
            />
          </div>

          {/* Birth date */}
          <div className="mb-4">
            <label
              className="block text-[#365e36] text-[0.62rem] tracking-[0.3em] uppercase mb-1.5"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Full Date of Birth
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
              className="curse-input"
              style={{ colorScheme: "dark" }}
            />
          </div>

          {/* Reason */}
          <div className="mb-4">
            <label
              className="block text-[#365e36] text-[0.62rem] tracking-[0.3em] uppercase mb-1.5"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Reason for Curse
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Describe the offense in detail…"
              required
              rows={3}
              className="curse-input resize-none"
            />
          </div>

          {/* Optional */}
          <div className="mb-7">
            <label
              className="block text-[#365e36] text-[0.62rem] tracking-[0.3em] uppercase mb-1.5"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Anything Else We Should Know{" "}
              <span
                className="normal-case tracking-normal text-[#2a4a2a]"
                style={{ fontSize: "0.7rem" }}
              >
                (optional)
              </span>
            </label>
            <textarea
              value={additional}
              onChange={(e) => setAdditional(e.target.value)}
              placeholder="Fears, allergies, recurring nightmares…"
              rows={2}
              className="curse-input resize-none"
            />
          </div>

          <button type="submit" className="curse-btn">
            Cast the Curse
          </button>
        </form>
        <div className="w-full mt-4 flex flex-col items-center gap-0">
          <h3 className="sin-heading">🔥 Feeling sinful?</h3>
          <Link href="/indulgence" className="indulgence-link">
            Seek Indulgence
          </Link>
        </div>
      </div>
    </div>
  );
}
