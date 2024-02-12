/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // landing page bg images
      backgroundImage: {
        'ellipse' : "url('/ellipse2.png')",
        'ellipse-2' : "url('/ellipse3.png')",
        'contact' : "url('/contact.gif')"
      },
      screens: {
        'nv' : '890px',
        'ft' : '840px'
        
      },
      // landing page colors
      colors : {
        'primary' : '#ff9a55',
        'secondary': '#FFA478',
        'tertiary' : '#FFB09C',
        'tertiary-2' : '#FFBFC0' 
      }
    },
  },
  plugins: [],
}