/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#000000',
        'bg-secondary': '#1C1C1E',
        'bg-card': '#2C2C2E',
        'bg-elevated': '#3A3A3C',
      },
    },
  },
  plugins: [],
}
