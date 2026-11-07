declare module "@/components/Shuffle" {
  import type { CSSProperties, ComponentType } from "react";

  type ShuffleProps = {
    text: string;
    className?: string;
    style?: CSSProperties;
    shuffleDirection?: "right" | "left" | "up" | "down";
    duration?: number;
    maxDelay?: number;
    ease?: string;
    threshold?: number;
    rootMargin?: string;
    tag?: "p" | "h1" | "h2" | "h3" | "h4" | "span";
    textAlign?: "left" | "center" | "right";
    shuffleTimes?: number;
    animationMode?: "evenodd" | "random";
    loop?: boolean;
    loopDelay?: number;
    stagger?: number;
    scrambleCharset?: string;
    triggerOnce?: boolean;
    respectReducedMotion?: boolean;
    triggerOnHover?: boolean;
    effect?: "slide" | "flip" | "blur";
    hoverRadius?: number;
    motionBlur?: boolean;
  };

  const Shuffle: ComponentType<ShuffleProps>;
  export default Shuffle;
}
