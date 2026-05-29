"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function useMouseParallax(strength = 26) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 90, damping: 22 });
  const springY = useSpring(y, { stiffness: 90, damping: 22 });

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const nextX = (event.clientX / window.innerWidth - 0.5) * strength;
      const nextY = (event.clientY / window.innerHeight - 0.5) * strength;
      x.set(nextX);
      y.set(nextY);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [strength, x, y]);

  return { x: springX, y: springY };
}
