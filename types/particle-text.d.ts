declare module "@/components/ParticleText" {
  import type { CSSProperties, ComponentType } from "react";

  type ParticleTextProps = {
    text?: string;
    particleSize?: number;
    density?: number;
    color?: string;
    highlightColor?: string;
    highlightMode?: "motion" | "pointer" | "none";
    shape?: "circle" | "square";
    intro?: "gather" | "rain" | "spiral" | "scan";
    scatter?: number;
    gatherDuration?: number;
    stagger?: number;
    clickBurst?: boolean;
    burstStrength?: number;
    pointerRepel?: number;
    repelRadius?: number;
    idleDrift?: number;
    trigger?: "mount" | "inView" | "hover" | "click";
    fontSize?: string | number;
    fontWeight?: number;
    fontFamily?: string;
    glow?: boolean;
    className?: string;
    style?: CSSProperties;
  };

  const ParticleText: ComponentType<ParticleTextProps>;
  export default ParticleText;
}
