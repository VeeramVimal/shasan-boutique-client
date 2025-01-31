import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // montserrat: ["Montserrat", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transparent: "transparent",
        primary: "#3761EE",
        textcolor: "#22314F",
        bordercolor: "#DADFF8",
        secondary: "#EE85B5",
        violet: "#883677",
        congo: "##FF958C",
        success: "#5FC790",
        warning: "#FFA600",
        danger: "#FF5630",
        dark: "#2E3A44",
        info: "#1CA7EC",
        // black: "#2E3A44",
        black: {
          200: "#2E3A44",
          500: "#4F5665",
          600: "#0B132A",
        },
        grey: {
          100: "#A0AABF",
          300: "#C0C6D4",
          500: "#E3E8F1",
        },
        // grey1: "#A0AABF",
        // grey2: "#C0C6D4",
        // grey3: "#E3E8F1",
        light: "#F9FBFC",
        white: {
          300: "#F8F8F8",
          500: "#fff",
        },
        blue: {
          100: "#A1A8CA",
        },
        ...defaultTheme.colors,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cover-gradient":
          "linear-gradient(169.4deg, rgba(57, 132, 244, 0.04) -6.01%, rgba(12, 211, 255, 0.04) 36.87%, rgba(47, 124, 240, 0.04) 78.04%, rgba(14, 101, 232, 0.04) 103.77%)",
        "cover-gradient-2":
          "linear-gradient(169.4deg, rgba(57, 132, 244, 0.1) -6.01%, rgba(12, 211, 255, 0.1) 36.87%, rgba(47, 124, 240, 0.1) 78.04%, rgba(14, 101, 232, 0.1) 103.77%)",
        "cover-gradient-n1":
          "linear-gradient(169.4deg, rgba(57, 132, 244, 0.04) -6.01%, rgba(12, 211, 255, 0.04) 36.87%)",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [],
} satisfies Config;
