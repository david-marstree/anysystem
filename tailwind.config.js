/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

delete colors.trueGray;
delete colors.lightBlue;
delete colors.warmGray;
delete colors.coolGray;
delete colors.blueGray;

export default {
  darkMode: "media",
  content: [
    "./index.html",
    "./lib/**/*.{js,ts,jsx,tsx,yml,yaml}",
    "./src/**/*.{js,ts,jsx,tsx,yml,yaml}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: colors.blue,
    },
    extend: {},
  },
  plugins: [],
};
