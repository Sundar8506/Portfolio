/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor :{
        'primary':'blueviolet' ,
        'secondary':'cornflowerblue'
      }
    },
    fontFamily:{
      'hero-font':'Boldonse'
    }
  },
  plugins: [],
}

