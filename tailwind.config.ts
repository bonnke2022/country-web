import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",

        bgElement: {
          DEFAULT: "hsl(var(--bgElement))",
        },
        colorText: {
          DEFAULT: "hsl(var(--colorText))",
        },
        border: "hsl(var(--border))",
        bgInput: "hsl(var(--bgInput))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontWeight: {
        light: "300",
        bold: "600",
        extrabold: "800",
      },
      fontSize: {
        sm: "14px",
        lg: "16px",
      },
      fontFamily: {
        DEFAULT: "var(--fontFamily)",
      },
    },
  },
  plugins: [require("tailwindcss-animate", "daisyui")],
};
export default config;
