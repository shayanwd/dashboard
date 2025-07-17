/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: 'black',
        sidebar: '#23263A',
        card: '#23263A',
        accent: '#F6C177',
        accent2: '#171717',
        text: '#FFFFFF',
        textSecondary: '#A0AEC0',
        border: '#252525',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

