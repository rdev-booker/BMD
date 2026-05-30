/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,html}',
  ],
  theme: {
    extend: {
      colors: {
        bmd: {
          red:      '#CC0000',
          'red-d':  '#A30000',
          black:    '#0A0A0A',
          charcoal: '#171717',
          slate:    '#262626',
          mid:      '#404040',
          gray:     '#737373',
          silver:   '#A3A3A3',
          light:    '#F5F5F5',
          mist:     '#EBEBEB',
        },
      },
      fontFamily: {
        condensed: ['"Barlow Condensed"', 'Impact', 'sans-serif'],
        barlow:    ['Barlow', 'sans-serif'],
        inter:     ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
