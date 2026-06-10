import Link from "next/link";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", position: "relative" }}>

      {/* ── Heading ── */}
      <div
        style={{
          position:      "absolute",
          top:           "clamp(24px, 6vh, 72px)",
          left:          0,
          right:         0,
          zIndex:        10,
          textAlign:     "center",
          pointerEvents: "none",
          padding:       "0 20px",
        }}
      >
        <p
          style={{
            fontFamily:    "Georgia, serif",
            fontSize:      "0.6rem",
            letterSpacing: "0.42em",
            textTransform: "uppercase",
            color:         "rgba(255,255,255,0.45)",
            marginBottom:  "10px",
          }}
        >
          ✦ &nbsp; Online Curses™ &nbsp; ✦
        </p>
        <h1
          style={{
            fontFamily:   "Georgia, 'Times New Roman', serif",
            fontSize:     "clamp(1.4rem, 3.5vw, 2.8rem)",
            fontWeight:   700,
            color:        "#ffffff",
            letterSpacing:"0.05em",
            lineHeight:   1.25,
            textShadow:   "0 2px 24px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.6)",
          }}
        >
          What it would be today:
          <br />
          <span style={{ fontStyle: "italic" }}>Curse or Indulgence?</span>
        </h1>
      </div>

      {/* ── LEFT — Curses ── */}
      <Link href="/curses" className="home-left">
        <div className="home-panel-content">
          <span style={{ fontSize: "2.2rem", lineHeight: 1 }}>🌑</span>
          <h2
            style={{
              fontFamily:    "Georgia, 'Times New Roman', serif",
              fontSize:      "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight:    700,
              color:         "#c8f0c8",
              letterSpacing: "0.08em",
              textShadow:    "0 0 30px rgba(80,200,80,0.55)",
              marginTop:     "14px",
              marginBottom:  0,
            }}
          >
            Curse
          </h2>
          <p
            style={{
              fontFamily:    "Georgia, serif",
              fontSize:      "0.65rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color:         "#5a9a5a",
              marginTop:     "10px",
            }}
          >
            Cast your darkness
          </p>
        </div>
      </Link>

      {/* ── RIGHT — Indulgence ── */}
      <Link href="/indulgence" className="home-right">
        <div className="home-panel-content">
          <span style={{ fontSize: "2.2rem", lineHeight: 1 }}>🔥</span>
          <h2
            style={{
              fontFamily:    "Georgia, 'Times New Roman', serif",
              fontSize:      "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight:    700,
              color:         "#4a2808",
              letterSpacing: "0.08em",
              textShadow:    "0 0 20px rgba(255,210,130,0.6)",
              marginTop:     "14px",
              marginBottom:  0,
            }}
          >
            Indulgence
          </h2>
          <p
            style={{
              fontFamily:    "Georgia, serif",
              fontSize:      "0.65rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color:         "#8a6040",
              marginTop:     "10px",
            }}
          >
            Cleanse your soul
          </p>
        </div>
      </Link>

    </div>
  );
}
