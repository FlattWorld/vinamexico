/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        vina: {
          'blue-dark': '#0d2b45',
          'blue-medium': '#203c56',
          'purple-dark': '#544e68',
          'purple-medium': '#8d697a',
          'orange-dark': '#d08159',
          'orange-medium': '#ffaa5e',
          'yellow-dark': '#ffd4a3',
          'yellow-medium': '#ffecd6',
        },
      },
    },
  },
  plugins: [],
  darkMode: ['class'],
};
