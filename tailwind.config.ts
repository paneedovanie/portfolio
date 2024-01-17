import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2c3e50",
        success: {
          100: colors.green[100],
          DEFAULT: colors.green[900],
        },
        error: {
          100: colors.red[100],
          DEFAULT: colors.red[900],
        },
        info: {
          100: colors.blue[100],
          DEFAULT: colors.blue[900],
        },
        warning: {
          100: colors.yellow[100],
          DEFAULT: colors.yellow[900],
        },
        field: {
          DEFAULT: colors.gray[300],
        },
        "text-default": {
          DEFAULT: colors.gray[900],
        },
        "text-secondary": {
          DEFAULT: colors.gray[500],
        },
      },
    },
  },
};
export default config;
