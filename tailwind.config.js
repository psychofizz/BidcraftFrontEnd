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
        'bidcraft-dark': '#0f172a',  // Unchanged
        'bidcraft-modal-bg': '#1a2235',
        'bidcraft-grey': '#2c3548',
        'bidcraft-grey-2': '#3d4659',
        'bidcraft-bg-page': '#e2e5e9',
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

