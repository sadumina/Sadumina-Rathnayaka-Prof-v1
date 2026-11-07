import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sadumina Rathnayaka | Software Engineer",
  description:
    "Portfolio of Sadumina Rathnayaka, a full stack software engineer building reliable products, cloud systems, and practical AI features.",
  keywords: [
    "Sadumina Rathnayaka",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "FastAPI",
    "React",
    "Cloud Engineering",
    "Applied AI",
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
    <html lang="en" className={cn(inter.variable)}>
      <body>
        {children}
      </body>
    </html>
  );
}
