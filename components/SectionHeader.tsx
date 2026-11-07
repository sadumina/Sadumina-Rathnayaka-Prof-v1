"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <div className="mb-5 flex items-center gap-4">
        <motion.span
          aria-hidden="true"
          className="h-px w-14 origin-left bg-[#17212b] sm:w-20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7d7198]"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          {eyebrow}
        </motion.p>
      </div>
      <motion.h2
        className="font-display text-4xl font-normal tracking-[-0.035em] text-white sm:text-6xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
      >
        {title}
      </motion.h2>
      {children ? (
        <motion.p
          className="mt-5 text-base leading-8 text-white/[0.58] sm:text-lg"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.65, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.p>
      ) : null}
    </div>
  );
}
