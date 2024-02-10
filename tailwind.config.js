/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      'lg-main': '34px',
      'lg-sub' : '24px',
      'lg-body': '16px'
    },
    colors:{
      'main-orange':'#FF9A55',
      'light-orange':'#FFA478',
      'beige':'#FFB09C',
      'light-pink':'#FFBFC0',
      'white':'#ffffff',
      'black':'#000000',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Notable', 'serif'],
      'montez': ['Montez', 'monospace']
    }
  },
  plugins: [],
}