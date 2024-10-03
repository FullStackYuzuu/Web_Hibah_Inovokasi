/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      screens: {
        '3xl': '1920px',  // Custom breakpoint for screens larger than 1920px
        '4xl': '2560px',  // Custom breakpoint for 4K displays
      },
    },
    plugins: [

    ],
  }
}

