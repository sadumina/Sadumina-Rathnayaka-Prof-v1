import type { Metadata } from "next";
import { MusicToggle } from "@/components/MusicToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sadumina Rathnayaka | Software Engineer",
  description:
    "Professional portfolio of Sadumina Rathnayaka, a full stack software engineer building scalable software, AI-powered systems, and enterprise solutions.",
  keywords: [
    "Sadumina Rathnayaka",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "FastAPI",
    "React",
    "AI Systems",
  ],
  authors: [{ name: "Sadumina Rathnayaka" }],
  creator: "Sadumina Rathnayaka",
  openGraph: {
    title: "Sadumina Rathnayaka | Software Engineer",
    description:
      "Building scalable software, AI-powered systems, and enterprise solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <MusicToggle />
      </body>
    </html>
  );
}
