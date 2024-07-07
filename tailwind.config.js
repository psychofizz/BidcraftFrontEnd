/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],

  theme: {
    extend: {
      colors: {
        'ffc327': '#232f3e',
        'bidcraft-main': '#05A3DB',
        'bidcraft-modal-bg': '#1f1e26',
      },
      backgroundImage: {
        'parallax1': 'url("img/h-1.jpg")',
        'parallax2': 'url("img/au-1.jpg")'
      },
      screens: {
        xs: '240px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },

  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"

}

