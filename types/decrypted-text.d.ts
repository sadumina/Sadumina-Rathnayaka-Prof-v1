declare module "@/components/DecryptedText" {
  import type { ComponentType } from "react";

  type DecryptedTextProps = {
    text: string;
    speed?: number;
    maxIterations?: number;
    sequential?: boolean;
    revealDirection?: "start" | "end" | "center" | "random";
    useOriginalCharsOnly?: boolean;
    characters?: string;
    className?: string;
    parentClassName?: string;
    encryptedClassName?: string;
    animateOn?: "hover" | "click" | "view" | "inViewHover";
    clickMode?: "once" | "toggle";
    effect?: "scramble" | "fade" | "flip";
    scrambleColor?: string;
    loop?: boolean;
    loopDelay?: number;
    hoverRadius?: number;
  };

  const DecryptedText: ComponentType<DecryptedTextProps>;
  export default DecryptedText;
}
