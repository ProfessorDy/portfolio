/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Public Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'cyan': '#5FB4A2',
        'dark-blue': '#203A4C',
        'grayish-dark-blue': '#33323D',
        'very-light-grey': '#FAFAFA',
        'light-grey': '#EAEAEB',
      },
      fontFamily: {
        'ibarra': ['Ibarra Real Nova', 'serif']
      }
    },
  },
  plugins: [],
}
