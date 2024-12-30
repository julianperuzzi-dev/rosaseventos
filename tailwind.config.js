/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37', // Color dorado principal
        'gold-dark': '#b68c2e', // Versión más oscura del dorado para efectos hover
      },
    },
  },
  plugins: [],
}
