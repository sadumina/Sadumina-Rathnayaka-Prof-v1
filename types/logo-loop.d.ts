declare module "@/components/LogoLoop" {
  import type { ReactNode } from "react";

  type LogoLoopItem = {
    node: ReactNode;
    title?: string;
    ariaLabel?: string;
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
    labels?: "none" | "inline" | "below" | "hover";
    ariaLabel?: string;
    className?: string;
  };

  const LogoLoop: (props: LogoLoopProps) => ReactNode;
  export default LogoLoop;
}
