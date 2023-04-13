/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily :{
      'sans' : ['Roboto', 'Arial']
    },
    backgroundImage:{
      'hero-image' : "url('src/assets/header-bg.jpeg')"
    },
    extend: {},
  },
  plugins: [],
}

