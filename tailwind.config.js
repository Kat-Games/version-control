/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './public/**/*.{html,js}', // Ensure the path matches your structure
    './src/**/*.{html,js,css}', // Include your src folder if needed
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': '#240750',
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
