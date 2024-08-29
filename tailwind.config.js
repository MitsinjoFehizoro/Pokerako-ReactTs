/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C5201A",
        secondary: "#15182A",
        tertiary : "#22263D",
        background: "#0A0B16",
        white: "#ffffff",
        gray: "#AEB2C9"
      }
    },
  },
  plugins: [],
}