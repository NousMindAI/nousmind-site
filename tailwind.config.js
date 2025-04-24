/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cobre: '#c67c32', // tom de cobre elegante
        fundo: '#0d0d0d', // fundo neutro escuro
        textoClaro: '#f1f1f1',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
      boxShadow: {
        cobre: '0 4px 14px 0 rgba(198, 124, 50, 0.39)',
      },
    },
  },
  plugins: [],
}
