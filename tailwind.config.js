/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#50C878",
        primaryDark: "#023020",
        darkGray: "#1a1f25",
        lightGray: "#272c35"
      },
      container: {
        center: true,
        paddinf: {
          DEFAULT: "1rem",
          sm: "2rem"
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          // Add more custom font families as needed
        },

      },
    },
  },
  plugins: [],
}

