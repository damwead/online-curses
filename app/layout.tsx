import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Online Curses™ — Official Curse Delivery Services",
  description: "Professional hex and curse delivery since the dawn of time. Fast. Reliable. Eternal.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#030d03]">
        {children}
        <footer
          style={{
            position:      "fixed",
            bottom:        0,
            left:          0,
            right:         0,
            zIndex:        50,
            textAlign:     "center",
            padding:       "10px 0",
            background:    "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
            pointerEvents: "none",
          }}
        >
          <Link
            href="/datenschutz"
            style={{
              fontFamily:      "Georgia, serif",
              fontSize:        "0.55rem",
              letterSpacing:   "0.32em",
              textTransform:   "uppercase",
              color:           "rgba(255,255,255,0.3)",
              textDecoration:  "none",
              transition:      "color 0.2s",
              pointerEvents:   "auto",
            }}
            className="hover:text-white/60"
          >
            Datenschutzerklärung
          </Link>
        </footer>
      </body>
    </html>
  );
}
