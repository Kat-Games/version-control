/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './public/*.html', // Ensure the path matches your structure
    './src/**/*.{js,css}', // Include your src folder if needed
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': '#240750',
        'color-primary-5': '#36117F',
        'color-primary-10': '#4F17BC',
        'color-secondary': '#FF204E',
        'color-secondary-5': '#231F20',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        kumbh: ['Kumbh Sans', 'sans-serif']
      },
      container:{
        center: true,
        padding: {
          DEFAULT: '30px',
          md: "100px"
        }
      }
    },
  },
  plugins: [],
};
