import Link from "next/link";

export default function Elders() {
  return (
    <div
      className="min-h-screen py-16 px-6"
      style={{
        backgroundImage: "url(/bg-elders.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-14">

        {/* ── Heading ── */}
        <div className="text-center">
          <p
            className="tracking-[0.45em] uppercase mb-2"
            style={{ fontFamily: "Georgia, serif", fontSize: "0.62rem", color: "#b48fff" }}
          >
            ✦ &nbsp; Order of the Ancient Circle &nbsp; ✦
          </p>
          <h1
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "#f0e6ff",
              letterSpacing: "0.08em",
              textShadow: "0 2px 24px rgba(160, 80, 255, 0.45)",
            }}
          >
            Meet Our Elders
          </h1>
          <div
            className="mx-auto mt-3"
            style={{
              width: "80px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, #9b6fce, transparent)",
            }}
          />
        </div>

        {/* ── Two Elders ── */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT — Vuivra */}
          <div className="flex flex-col items-center gap-5">
            {/* Framed photo — frame extends beyond photo edges */}
            <div style={{ position: "relative", width: "100%", maxWidth: "280px", padding: "9%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/elder_1.jpeg"
                alt="Vuivra"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/frame-elder1.png"
                alt=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  mixBlendMode: "multiply",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Info */}
            <div className="text-center flex flex-col gap-2"
              style={{
                background: "rgba(10, 5, 20, 0.55)",
                borderRadius: "6px",
                padding: "16px 20px",
                backdropFilter: "blur(4px)",
              }}
            >
              <h2
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "1.7rem",
                  fontWeight: 700,
                  color: "#e8d0ff",
                  letterSpacing: "0.06em",
                  textShadow: "0 1px 14px rgba(160, 80, 255, 0.5)",
                }}
              >
                Vuivra
              </h2>
              <h3
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "0.88rem",
                  fontStyle: "italic",
                  color: "#c49ef0",
                  letterSpacing: "0.08em",
                }}
              >
                Serpent Queen
              </h3>
              <div
                className="flex justify-center gap-4 my-1"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#a87de0",
                }}
              >
                <span>Domain: Earth</span>
                <span>·</span>
                <span>Spirit: Snake</span>
              </div>
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "0.88rem",
                  lineHeight: "1.85",
                  color: "#d0b8f0",
                  maxWidth: "300px",
                }}
              >
                She controls forests and reptiles, as well as the emotions of people — their past and future. If you need help finding your true purpose or who you are, Vuivra will guide you. She works with women, men, and children alike.
                <br /><br />
                As a champion of the Battle of the Psychics ("Битва экстрасенсов 2026"), Vuivra brings prosperity and peace to those in need.
              </p>
            </div>
          </div>

          {/* RIGHT — Liola */}
          <div className="flex flex-col items-center gap-5">
            {/* Framed photo — frame extends beyond photo edges */}
            <div style={{ position: "relative", width: "100%", maxWidth: "260px", padding: "9%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/elder_2.jpeg"
                alt="Mari"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/frame-elder2.png"
                alt=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  mixBlendMode: "multiply",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Info */}
            <div className="text-center flex flex-col gap-2"
              style={{
                background: "rgba(10, 5, 20, 0.55)",
                borderRadius: "6px",
                padding: "16px 20px",
                backdropFilter: "blur(4px)",
              }}
            >
              <h2
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "1.7rem",
                  fontWeight: 700,
                  color: "#e8d0ff",
                  letterSpacing: "0.06em",
                  textShadow: "0 1px 14px rgba(160, 80, 255, 0.5)",
                }}
              >
                Liola
              </h2>
              <h3
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "0.88rem",
                  fontStyle: "italic",
                  color: "#c49ef0",
                  letterSpacing: "0.08em",
                }}
              >
                The Princess of Light and Night
              </h3>
              <div
                className="flex justify-center gap-4 my-1"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#a87de0",
                }}
              >
                <span>Light &amp; Shadow</span>
                <span>·</span>
                <span>Beyond</span>
              </div>
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "0.88rem",
                  lineHeight: "1.85",
                  color: "#d0b8f0",
                  maxWidth: "300px",
                }}
              >
                If you ever wondered what lies beyond good and bad, or whether there is anything after death — the Princess of Light and Night will answer thine questions. She saw what lies beyond death and found her own way to light and God.
                <br /><br />
                The Princess will see thy past, future, and nature. If nothing has helped thee, then The Princess will.
              </p>
            </div>
          </div>

        </div>

        {/* ── Navigation ── */}
        <div
          className="w-full flex justify-center gap-8 pt-4"
          style={{
            borderTop: "1px solid rgba(154, 111, 206, 0.3)",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.62rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#9b6fce",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            className="hover:text-[#c49ef0]"
          >
            🌑 Curses
          </Link>
          <Link
            href="/indulgence"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.62rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#9b6fce",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            className="hover:text-[#c49ef0]"
          >
            🔥 Indulgence
          </Link>
        </div>

      </div>
    </div>
  );
}
