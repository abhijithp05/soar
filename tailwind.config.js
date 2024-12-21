/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Lato', 'sans-serif'], // Default sans-serif font stack (Inter first, then Lato)
        lato: ['Lato', 'sans-serif'], // A separate class for Lato font if needed
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'light-gray': '#f5f7fa',
        'light-gray-100': '#718EBF',
      },
    },
  },
  plugins: [],
};
