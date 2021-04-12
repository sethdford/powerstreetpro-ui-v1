// const colors = require('tailwindcss/colors')
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: false,
  theme: {
    extend: {
      cursor: {
        help: 'help',
      },
      fontFamily: {
        sans: ['Nunito'],
      },
      colors: {
        'mango-orange': {
          DEFAULT: '#DFAB01',
          dark: '#CB9C01',
        },
        'mango-yellow': '#F2C94C',
        'mango-red': '#E54033',
        'mango-green': '#AFD803',
        'mango-dark': {
          lighter: '#332F46',
          light: '#262337',
          DEFAULT: '#141026',
        },
        'mango-med': {
          light: '#C2BDD9',
          DEFAULT: '#9490A6',
          dark: '#706C81',
        },
        'mango-light': {
          light: '#FCFCFF',
          DEFAULT: '#F0EDFF',
          dark: '#B9B5CE',
        },
        'mango-grey': {
          lighter: '#f7f7f7',
          light: '#e6e6e6',
          dark: '#092e34',
          darker: '#072428',
          darkest: '#061f23',
        },
        'light-theme': {
          orange: '#DFAB01',
          red: '#E54033',
          green: '#AFD803',
          'bkg-1': '#F7F7F7',
          'bkg-2': '#FFFFFF',
          'bkg-3': '#E7E7E7',
          'fgd-1': '#061f23',
          'fgd-2': '#0C3F45',
          'fgd-3': '#446065',
          'fgd-4': '#A0AFB1',
        },
        'dark-theme': {
          orange: '#DFAB01',
          red: '#E54033',
          green: '#AFD803',
          'bkg-1': '#061f23',
          'bkg-2': '#0F282D',
          'bkg-3': '#0F3339',
          'fgd-1': '#FFFFFF',
          'fgd-2': '#F7F7F7',
          'fgd-3': '#E7E7E7',
          'fgd-4': '#A0AFB1',
        },
        'mango-theme': {
          yellow: '#F2C94C',
          red: '#E54033',
          green: '#AFD803',
          'bkg-1': '#141026',
          'bkg-2': '#1D1832',
          'bkg-3': '#262337',
          'fgd-1': '#F0EDFF',
          'fgd-2': '#FCFCFF',
          'fgd-3': '#B9B5CE',
          'fgd-4': '#706C81',
        },
        'th-bkg-1': 'var(--bkg-1)',
        'th-bkg-2': 'var(--bkg-2)',
        'th-bkg-3': 'var(--bkg-3)',
        'th-fgd-1': 'var(--fgd-1)',
        'th-fgd-2': 'var(--fgd-2)',
        'th-fgd-3': 'var(--fgd-3)',
        'th-fgd-4': 'var(--fgd-4)',
        'th-primary': 'var(--primary)',
        'th-red': 'var(--red)',
        'th-green': 'var(--green)',
      },
    },
  },
  variants: {
    extend: {
      cursor: ['hover', 'focus', 'disabled'],
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [],
}
