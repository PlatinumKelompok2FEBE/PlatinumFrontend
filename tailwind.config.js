/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend:{
      screens: {
        '3xl': '1600px',
      },
      colors: {
        'primary-purple-05' : '#4B1979',
        'primary-purple-04' : '#7126B5',
        'primary-purple-03' : '#A06ECE',
        'primary-purple-02' : '#D0B7E6',
        'primary-purple-01' : '#E2D4F0',
        'primary-cream-05' : '#AA9B87',
        'primary-cream-04' : '#D4C2A8',
        'primary-cream-03' : '#FFE9CA',
        'primary-cream-02' : '#FFF0DC',
        'primary-cream-01' : '#FFF8ED',
        'alert-danger' : '#FA2C5A',
        'alert-warning' : '#F9CC00',
        'alert-success' : '#73CA5C',
        'neutral-05' : '#151515',
        'neutral-04' : '#3C3C3C',
        'neutral-03' : '#8A8A8A',
        'neutral-02' : '#D0D0D0',
        'gray' : '#EEEEEE',
        'gray-bg' : 'rgba(0, 0, 0, 0.6)'
      },
    },
  },
  plugins: [],
}
