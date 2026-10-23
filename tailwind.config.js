/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Anton', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#C8102E',
          'red-dark': '#8B0A1E',
          'red-light': '#FF3B5C',
          green: '#10B981',
          'green-dark': '#059669',
          'green-light': '#34D399',
          cream: '#FFF8E7',
          charcoal: '#1A0F0F',
          gold: '#F5B700',
          'gold-light': '#FFD60A',
        },
      },
    },
  },
  plugins: [],
};
