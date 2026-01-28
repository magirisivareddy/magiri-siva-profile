import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: {
            dark: "#0B1220",
            mid: "#0E1730",
            light: "#1A2458",
          },
          primary: "#2563EB",
          secondary: "#6366F1",
          accent: "#A5B4FC",
          surface: "#F8FAFC",
        },
      },
    },
  },
  plugins: [],
};

export default config;
