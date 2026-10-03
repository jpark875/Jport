import type { Config } from "tailwindcss";

// Colors live in the class names (bg-[#0D0E11] etc.), not in the theme, so the
// tokens stay exactly as the design system states them.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "monospace"],
        mono: ["var(--font-body)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
