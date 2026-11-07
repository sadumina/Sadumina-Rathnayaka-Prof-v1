declare module "@/components/LogoLoop" {
  import type { ReactNode } from "react";

  type LogoLoopItem = {
    node: ReactNode;
    title?: string;
    href?: string;
    hoverColor?: string;
  };

  type LogoLoopProps = {
    logos: LogoLoopItem[];
    speed?: number;
    direction?: "left" | "right" | "up" | "down";
    logoHeight?: number;
    gap?: number;
    hoverSpeed?: number;
    scaleOnHover?: boolean;
    ariaLabel?: string;
    className?: string;
  };

  const LogoLoop: (props: LogoLoopProps) => ReactNode;
  export default LogoLoop;
}
