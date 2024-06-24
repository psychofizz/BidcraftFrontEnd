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
        'parallax':'url("img/h-1.jpg")'
      }
    },
  },
  
  plugins: [],
}

