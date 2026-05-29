"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedCursor() {
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 280, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 280, damping: 30 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setVisible(true);
      mouseX.set(event.clientX - 14);
      mouseY.set(event.clientY - 14);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[99] hidden h-7 w-7 rounded-full border border-purple-200/70 mix-blend-difference md:block"
      style={{
        x: springX,
        y: springY,
        opacity: visible ? 1 : 0,
      }}
    />
  );
}
