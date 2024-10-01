/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('images/hero1.jpg')",
      },
      fontFamily: {
        'briem': 'Briem Hand'
      },
      colors: {
        'red': '#B8001F',
        'gray1': '#507687',
        'gray2': '#384B70',
      }
    },
  },
  plugins: [],
}

