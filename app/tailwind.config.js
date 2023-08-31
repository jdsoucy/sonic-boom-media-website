/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#151F28',
        light: '#D6D3C7',
        lighter: '#F9F6EB',
        primary: '#F55139',
      },
      backgroundImage: {
        'noise': "url('./assets/noise.png')",
      }
    },
  },
  plugins: [],
}

