/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0c0b08',
        dusk: '#12140f',
        brass: '#be9a63',
        roseclay: '#cf9a8b',
        parchment: '#f4ecd8'
      },
      boxShadow: {
        glow: '0 18px 60px rgba(0, 0, 0, 0.45)'
      },
      fontFamily: {
        display: ['Crimson Text', 'Georgia', 'Times New Roman', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
