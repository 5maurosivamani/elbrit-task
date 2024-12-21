import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003569", // Blue
          light: "#60A5FA",
          dark: "#1E40AF",
        },
        secondary: {
          DEFAULT: "#17414f", // Green
          light: "#4ADE80",
          dark: "#166534",
        },
        accent: {
          DEFAULT: "#e2f2fb", // Sky
          light: "#7DD3FC",
          dark: "#0EA5E9",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
