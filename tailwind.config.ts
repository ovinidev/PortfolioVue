import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.vue"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FFF",
        background: "#13141f",
      },
      fontFamily: {
        sans: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
