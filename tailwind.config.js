/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./lib/**/*.{js,ts,jsx,tsx,yml,yaml}",
    "./src/**/*.{js,ts,jsx,tsx,yml,yaml}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
