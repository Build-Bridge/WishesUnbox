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
        ellipse: "url('/ellipse2.png')",
        "ellipse-2": "url('/ellipse3.png')",
        contact: "url('/contact.gif')",
      },
      screens: {
        nv: "890px",
        ft: "840px",
      },
      // landing page colors
      colors : {
        'primary' : '#ff9a55',
        'secondary': '#FFA478',
        'tertiary' : '#FFB09C',
        'tertiary-2' : '#FFBFC0',
        'main-orange':'#FF9A55',
        'light-orange':'#FFA478',
        'beige':'#FFB09C',
        'light-pink':'#FFBFC0',
        'white':'#ffffff',
        'black':'#000000',
      },
      fontSize: {
        'lg-main': '34px',
        'lg-sub' : '24px',
        'lg-body': '16px'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Notable', 'serif'],
        'montez': ['Montez', 'monospace']
      }
    },
  },
  plugins: [],
};
