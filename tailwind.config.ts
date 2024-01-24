import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Gambarino-Regular", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        white: "#eee",
        black: "#111",
        gold: {
          "50": "#ffffe7",
          "100": "#ffffc1",
          "200": "#fffb86",
          "300": "#fff041",
          "400": "#ffe00d",
          "500": "#ffd100",
          "600": "#d19900",
          "700": "#a66d02",
          "800": "#89550a",
          "900": "#74450f",
          "950": "#442404",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
export default config;
