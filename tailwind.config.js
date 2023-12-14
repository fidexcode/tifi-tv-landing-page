/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B2B2B",
        dimWhite: "#FFFFFF",
        lightGray: "rgba(236, 236, 236, 0.6)",
        lightPink: "#FFFBF9",
        dimBrown: "#B7410E",
        faintPink: "#F1D9CF"
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "769px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}