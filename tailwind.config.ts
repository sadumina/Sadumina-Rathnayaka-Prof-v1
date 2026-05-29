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
        void: "#050407",
        ink: "#090711",
        amethyst: "#8b5cf6",
        ultraviolet: "#a855f7",
        pearl: "#f4f0ff",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 40px rgba(168, 85, 247, 0.32)",
        panel: "0 30px 90px rgba(0, 0, 0, 0.45)",
      },
      backgroundImage: {
        "radial-purple": "radial-gradient(circle at center, rgba(168, 85, 247, 0.22), transparent 48%)",
      },
    },
  },
  plugins: [],
};

export default config;
