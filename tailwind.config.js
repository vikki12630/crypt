/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: 
    {
      fontFamily:{
        'roboto1':['Roboto Slab', 'serif']
      }
    },
  },
  plugins: [],
}

