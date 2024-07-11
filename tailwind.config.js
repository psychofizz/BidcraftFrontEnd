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
        'bidcraft-main-2': '#0093CB',
        'bidcraft-main-3': '#007BA5',
        'bidcraft-modal-bg': '#2a2b3d',
        'bidcraft-grey': '#3b3c4d',
        'bidcraft-grey-2': '#5a5b6c',
        'bidcraft-dark': '#0f172a',
        'bidcraft-bg-page': '#f2f3f4',
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

  plugins: [require("./node_modules/tw-elements/plugin.cjs")],
  darkMode: "class"

}

