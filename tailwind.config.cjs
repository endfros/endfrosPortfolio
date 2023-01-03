/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'spring-leaves': {
        '50': '#f2f7f3',
        '100': '#e1eae2',
        '200': '#c4d6c8',
        '300': '#9cb9a5',
        '400': '#70977d',
        '500': '#598669',
        '600': '#3c5f49',
        '700': '#304c3b',
        '800': '#283d30',
        '900': '#213328',
    },    
    },
    extend: {
      scale: {
        '250': '2.50',
      }
    },
  },
  plugins: [],
}
