import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a1110",
        navy: "#0e2733",
        petrol: "#163f45",
        olive: "#3b4a34",
        oliveDeep: "#1c2818",
        beige: "#d9cdb3",
        graphite: "#2a2e31",
        ice: "#f3f5f0",
      },
      fontFamily: {
        serif: ["Georgia", "Iowan Old Style", "Times New Roman", "serif"],
        mono: ["ui-monospace", "SF Mono", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
