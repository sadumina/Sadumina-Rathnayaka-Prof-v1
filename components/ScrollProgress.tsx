"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-[3px] w-full origin-left bg-gradient-to-r from-purple-400 via-fuchsia-300 to-white"
      style={{ scaleX }}
    />
  );
}
