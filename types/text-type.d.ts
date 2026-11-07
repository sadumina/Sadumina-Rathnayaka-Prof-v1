declare module "@/components/TextType" {
  import type { ComponentType, ReactNode } from "react";

  type TextTypeProps = {
    text: string | string[];
    as?: keyof JSX.IntrinsicElements;
    typingSpeed?: number;
    initialDelay?: number;
    pauseDuration?: number;
    deletingSpeed?: number;
    deleteMode?: "backspace" | "select";
    loop?: boolean;
    className?: string;
    showCursor?: boolean;
    hideCursorWhileTyping?: boolean;
    cursorStyle?: "character" | "underscore";
    cursorCharacter?: string;
    cursorColor?: string;
    cursorClassName?: string;
    cursorBlinkDuration?: number;
    cursorGlide?: boolean;
    typeEffect?: "none" | "fade" | "blur" | "rise";
    mistakes?: number;
    prefix?: string;
    prefixColor?: string;
    children?: ReactNode;
  };

  const TextType: ComponentType<TextTypeProps>;
  export default TextType;
}
