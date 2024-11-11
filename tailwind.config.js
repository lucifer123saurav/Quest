/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#F54F35',
        customRedHover: '#D5432B', 
        customBrown: '#873e23'
      },
    },
  },
  plugins: [],
}

