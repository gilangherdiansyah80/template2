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
        'baseColor1': '#FAF7F0',
        'baseColor2': '#D8D2C2',
        'baseColor3': '#B17457',
        'baseColor4': '#4A4947',
      }
    },
  },
  plugins: [],
}

