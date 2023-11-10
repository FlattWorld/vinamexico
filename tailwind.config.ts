import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
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
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  darkMode: ['class'],
}
export default config
