/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor :{
        'primary':'black' ,
        'secondary':'white'
      }
    },
    fontFamily:{
      'hero-font':'Boldonse'
    },
    
    keyframes: {
      shake: {
        "0%, 100%": { transform: "translateX(0)" },
        "20%, 60%": { transform: "translateX(-5px)" },
        "40%, 80%": { transform: "translateX(5px)" },
      },
    },
    animation: {
      shake: "shake 0.5s ease-in-out",
    }
    
  },
  plugins: [],
}

