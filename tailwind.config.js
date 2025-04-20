const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#F9FAFB',
        foreground: '#1E293B',
        primary: '#2563EB',
        secondary: '#64748B',
        accent: '#E5E7EB',
        muted: '#94A3B8',
      },
    },
  },
  plugins: [],
}