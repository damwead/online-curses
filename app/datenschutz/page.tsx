import Link from "next/link";

export default function Datenschutz() {
  return (
    <div
      className="min-h-screen py-16 px-6"
      style={{ background: "linear-gradient(160deg, #0d0d14 0%, #12101a 60%, #0a0a10 100%)" }}
    >
      <div
        className="max-w-2xl mx-auto"
        style={{
          background: "rgba(20, 14, 35, 0.85)",
          border: "1px solid rgba(154, 111, 206, 0.2)",
          borderRadius: "6px",
          padding: "48px 44px",
          backdropFilter: "blur(6px)",
        }}
      >
        {/* Header */}
        <p
          className="tracking-[0.4em] uppercase mb-2"
          style={{ fontFamily: "Georgia, serif", fontSize: "0.58rem", color: "#7a5aaa" }}
        >
          Online Curses™ &nbsp;·&nbsp; Rechtliches
        </p>
        <h1
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "1.9rem",
            fontWeight: 700,
            color: "#e8d8ff",
            letterSpacing: "0.04em",
            marginBottom: "8px",
          }}
        >
          Datenschutzerklärung
        </h1>
        <div style={{ width: "60px", height: "1px", background: "rgba(154,111,206,0.5)", marginBottom: "36px" }} />

        {/* Body */}
        <div
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "0.93rem",
            lineHeight: "1.9",
            color: "#c8b8e0",
          }}
        >
          <Section title="1. Verantwortliche Stelle">
            <p>
              Online Curses™ betreibt diese Website zu rein mystisch-unterhaltsamen Zwecken.
              Anfragen zum Datenschutz können uns jederzeit über die üblichen okkulten Kanäle erreichen.
            </p>
          </Section>

          <Section title="2. Erhebung und Speicherung personenbezogener Daten">
            <p>
              Wir erheben, speichern oder verarbeiten <strong style={{ color: "#e0c8ff" }}>keinerlei personenbezogene Daten</strong> unserer Nutzerinnen und Nutzer.
            </p>
            <p className="mt-3">
              Sämtliche Angaben, die im Rahmen unserer Fluchübermittlung, Sündenbefreiung oder
              Ältestenberatung eingetragen werden, verbleiben ausschließlich in Ihrem Browser und
              werden zu keinem Zeitpunkt an einen Server übertragen, gespeichert oder an Dritte weitergegeben.
            </p>
            <p className="mt-3">
              Wir betreiben weder Analyse-Tracking noch verwenden wir Cookies, Logfiles,
              Pixel oder sonstige Technologien zur Datenerfassung. Was in der mystischen Sphäre bleibt,
              bleibt in der mystischen Sphäre.
            </p>
          </Section>

          <Section title="3. Formulardaten">
            <p>
              Die auf dieser Website eingegebenen Informationen (Name, Geburtsdatum, Fluchgrund,
              Sünde o. ä.) werden ausschließlich clientseitig verarbeitet und dienen allein der
              lokalen Darstellung der Verfluchungsbestätigung. Es findet <strong style={{ color: "#e0c8ff" }}>keine Übermittlung</strong> statt.
            </p>
          </Section>

          <Section title="4. Rechtsgrundlage (DSGVO)">
            <p>
              Da keine personenbezogenen Daten erhoben werden, entfällt eine Rechtsgrundlage
              gemäß Art. 6 DSGVO. Diese Website ist vollständig datenschutzkonform im Sinne
              der Datenschutz-Grundverordnung (EU) 2016/679.
            </p>
          </Section>

          <Section title="5. Betroffenenrechte">
            <p>
              Da wir keine Ihrer Daten besitzen, können wir auch keine auskunften, berichtigen,
              löschen oder einschränken. Ihre Rechte nach Art. 15–22 DSGVO sind damit
              de facto vollständig gewahrt — es gibt schlicht nichts zu tun.
            </p>
          </Section>

          <Section title="6. Änderungen dieser Erklärung">
            <p>
              Diese Datenschutzerklärung ist gültig ab dem Moment, in dem Sie sie lesen,
              und gilt bis auf Widerruf durch die Geister des Internets.
            </p>
          </Section>

          {/* Effective date */}
          <p
            className="mt-10 pt-6"
            style={{
              borderTop: "1px solid rgba(154,111,206,0.15)",
              fontSize: "0.72rem",
              color: "#7a5aaa",
              letterSpacing: "0.08em",
            }}
          >
            Stand: Salzburg, im Jahr der Schlange &nbsp;·&nbsp; Online Curses™
          </p>
        </div>

        {/* Back links */}
        <div className="flex gap-6 mt-10" style={{ flexWrap: "wrap" }}>
          {[
            { href: "/", label: "🌑 Curses" },
            { href: "/indulgence", label: "🔥 Indulgence" },
            { href: "/elders", label: "✦ Elders" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.6rem",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "#7a5aaa",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              className="hover:text-[#c49ef0]"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <h2
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "0.78rem",
          fontWeight: 700,
          color: "#b48fff",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
