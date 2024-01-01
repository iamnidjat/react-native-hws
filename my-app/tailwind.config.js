/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'crayola': '#5DB075',
        'platinum': '#E8E8E8'
      },
      margin: {
        '7.5': '30px',
        '1.25': '5px'
      },
      fontFamily: {
        'inter': 'Inter'
      }
    },
  },
  plugins: [],
}

