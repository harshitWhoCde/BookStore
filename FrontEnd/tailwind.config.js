/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   
  ],
  darkMode: 'class',
  theme: {
    
    extend: {
      colors:{
        peach:'#fed9b8',
        blood:'#f07167'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}