import type { Metadata } from "next";
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
      <body className="min-h-full bg-[#030d03]">{children}</body>
    </html>
  );
}
