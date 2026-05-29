"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "article";
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = "div",
}: ScrollRevealProps) {
  const Component = as === "article" ? motion.article : motion.div;

  return (
    <Component
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

export function SectionAura({ side = "right" }: { side?: "left" | "right" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-16 h-72 w-72 rounded-full bg-purple-400/[0.075] blur-3xl ${
        side === "left" ? "-left-24" : "-right-24"
      }`}
    />
  );
}
