/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'ffc327': '#FFC327',
      },
      backgroundImage: {
        'parallax1':'url("img/h-1.jpg")',
        'parallax2':'url("img/au-1.jpg")'
      }
    },
  },
  
  plugins: [],
}

