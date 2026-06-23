/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'medical-blue': '#0B2C5F',
        'royal-blue': '#1E63D5',
        'sky-blue': '#EAF4FF',
        'text-dark': '#0F172A',
        'text-muted': '#475569',
        'border-color': '#E2E8F0',
        'success': '#16A34A',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '20px',
      }
    },
  },
  plugins: [],
}