/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#24D86F"
      },
      fontFamily: {
        "fsinlitimes": ["Seymour One", "sams-serif"]
      }
    },
  },
  plugins: [],
}

/* USAR font-fsinlitimes */