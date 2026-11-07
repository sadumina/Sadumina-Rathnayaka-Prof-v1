declare module "@/components/GridScan" {
  import type { CSSProperties, ComponentType } from "react";

  type GridScanProps = {
    linesColor?: string;
    scanColor?: string;
    cells?: number;
    lineThickness?: number;
    lineStyle?: "solid" | "dashed" | "dotted";
    depth?: number;
    depthFade?: number;
    parallax?: number;
    points?: boolean;
    reflection?: number;
    shading?: number;
    scanDirection?: "forward" | "backward";
    scanDuration?: number;
    scanDelay?: number;
    scanWidth?: number;
    trail?: number;
    glow?: number;
    autoScan?: boolean;
    interactive?: boolean;
    clickEffect?: "ping" | "ripple" | "none";
    enableWebcam?: boolean;
    showPreview?: boolean;
    intro?: boolean;
    lightMode?: boolean;
    className?: string;
    style?: CSSProperties;
  };

  const GridScan: ComponentType<GridScanProps>;
  export default GridScan;
}
