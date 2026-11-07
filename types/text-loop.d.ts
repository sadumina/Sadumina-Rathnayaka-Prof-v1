declare module "@/components/TextLoop" {
  import type { CSSProperties, ComponentType } from "react";

  type TextLoopProps = {
    text?: string;
    shape?: "circle" | "infinity" | "arch" | "line" | "wave";
    path?: string;
    speed?: number;
    direction?: "forward" | "backward";
    separator?: string;
    curviness?: number;
    tilt?: number;
    fontSize?: number;
    fontWeight?: number;
    letterSpacing?: number;
    uppercase?: boolean;
    color?: string;
    ribbon?: boolean;
    ribbonColor?: string;
    ribbonWidth?: number;
    edgeFade?: number;
    pauseOnHover?: boolean;
    cross?: boolean;
    crossColor?: string;
    crossAngle?: number;
    draggable?: boolean;
    scrollBoost?: number;
    outline?: boolean;
    outlineWidth?: number;
    className?: string;
    style?: CSSProperties;
  };

  const TextLoop: ComponentType<TextLoopProps>;
  export default TextLoop;
}
