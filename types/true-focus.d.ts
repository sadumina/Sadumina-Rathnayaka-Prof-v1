declare module "@/components/TrueFocus" {
  import type { CSSProperties, ComponentType } from "react";

  export type TrueFocusProps = {
    sentence?: string;
    separator?: string;
    manualMode?: boolean;
    focusStyle?: "brackets" | "box" | "underline" | "highlight";
    order?: "sequential" | "random";
    easing?: "smooth" | "spring";
    blurAmount?: number;
    focusScale?: number;
    borderColor?: string;
    highlightColor?: string;
    glowColor?: string;
    animationDuration?: number;
    pauseBetweenAnimations?: number;
    cornerSize?: number;
    borderWidth?: number;
    unfocusedOpacity?: number;
    className?: string;
    style?: CSSProperties;
  };

  const TrueFocus: ComponentType<TrueFocusProps>;
  export default TrueFocus;
}
