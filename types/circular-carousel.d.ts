declare module "@/components/CircularCarousel" {
  import type { CSSProperties, ComponentType } from "react";

  type CircularCarouselItem = {
    src: string;
    alt: string;
    title?: string;
    subtitle?: string;
  };

  type CircularCarouselProps = {
    items?: CircularCarouselItem[];
    preset?: "cylinder" | "orbit" | "wheel" | "flat";
    intro?: "rise" | "fade" | "none";
    cardWidth?: number;
    aspectRatio?: number;
    gap?: number;
    curve?: number;
    tilt?: number;
    perspective?: number;
    autoplay?: "drift" | "spin" | "none";
    speed?: number;
    interval?: number;
    direction?: "left" | "right";
    draggable?: boolean;
    momentum?: number;
    snap?: boolean;
    pauseOnHover?: boolean;
    focusOnClick?: boolean;
    parallax?: number;
    stretch?: number;
    depthFade?: number;
    fadeColor?: string;
    innerShade?: number;
    cornerRadius?: number;
    captions?: boolean;
    className?: string;
    style?: CSSProperties;
  };

  const CircularCarousel: ComponentType<CircularCarouselProps>;
  export default CircularCarousel;
}
