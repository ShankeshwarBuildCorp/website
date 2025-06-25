/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF5DD',
        'sage-teal': '#A6CDC6',
        'deep-teal': '#16404D',
        'amber-gold': '#DDA853',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  safelist: [
    'bg-cream',
    'bg-sage-teal',
    'bg-deep-teal',
    'bg-amber-gold',
    'text-cream',
    'text-sage-teal',
    'text-deep-teal',
    'text-amber-gold',
    'border-cream',
    'border-sage-teal',
    'border-deep-teal',
    'border-amber-gold',
    'hover:bg-cream',
    'hover:bg-sage-teal',
    'hover:bg-deep-teal',
    'hover:bg-amber-gold',
    'hover:text-cream',
    'hover:text-sage-teal',
    'hover:text-deep-teal',
    'hover:text-amber-gold',
  ],
  plugins: [],
} 