/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-mystic': '#0B0914',
        'purple-glow': '#1E1035',
        'gold-accent': '#D4AF37',
        'astral-cyan': '#00E5FF',
      },
    },
  },
  plugins: [],
}
