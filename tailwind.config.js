/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "Poppins",
    },
    colors: {
      darker: "#132B46",
      dark: "#0C386C",
      lighter: "#FFFFFF",
      light: "#F8FBFF",
    },
    extend: {},
  },
  plugins: [],
};
