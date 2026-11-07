import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        void: "#fcfaf6",
        ink: "#24323a",
        amethyst: "#7d7198",
        ultraviolet: "#9bb6c9",
        pearl: "#24323a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 40px rgba(214, 255, 75, 0.16)",
        panel: "12px 12px 0 rgba(23, 24, 22, 0.08)",
      },
      outlineColor: {
        ring: "hsl(var(--ring))",
      },
      backgroundImage: {
        "radial-purple": "radial-gradient(circle at center, rgba(214, 255, 75, 0.12), transparent 48%)",
      },
    },
  },
  plugins: [],
};

export default config;
