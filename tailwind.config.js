/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pulse-dark': '#0B0C10',
        'pulse-card': '#14161D',
        'pulse-citrus': '#EAF900',
        'pulse-berry': '#FF2E75',
        'pulse-tropic': '#FF7E27',
        'pulse-botanic': '#10B981',
        'pulse-peach': '#FF9A76',
        'pulse-zero': '#00E5FF',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
    },
  },
  plugins: [],
}
