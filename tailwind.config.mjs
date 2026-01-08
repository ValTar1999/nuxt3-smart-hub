/** @type {import('tailwindcss').Config} */
// import formsPlugin from "@tailwindcss/forms";
import plugin from 'tailwindcss/plugin'
// import { Colors as BadgeColors } from './src/enums/Badge'
// import { Colors as InfoBoxColors } from './src/enums/UNVERIFIED/InfoBox'
// import { Colors as CardColors } from './src/enums/UNVERIFIED/-Card'
import twColors from 'tailwindcss/colors'

// const classBadgeColors = BadgeColors.map((color) => `text-${color}-800 text-${color}-400 bg-${color}-100 border-${color}-200 ring-${color}-200`)
// const classInfoBoxColors = InfoBoxColors.map((color) => `text-${color}-800 text-${color}-700 text-${color}-500 text-${color}-400 bg-${color}-50 border-${color}-400`)
// const classCardColors = CardColors.map(color => `text-${color}-900 text-balck`)

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './enums/**/*.{js,ts}'
  ],
  safelist: [
    'flex-grow',
    'flex-shrink-0',
    'shadow-sm',
    'h-4',
    'w-4',
    'h-5',
    'w-5',
    'w-6',
    'h-6',
    'w-7',
    'h-7',
    'w-8',
    'h-8',
    'w-9',
    'h-9',
    'w-96',
    'w-60',
    'w-3',
    'h-3',
    'w-3.5',
    'h-3.5',
    'ring-smart-secondary',
    'ring-smart-main',
    'bg-yellow-100'
    // ...classBadgeColors,
    // ...classInfoBoxColors,
    // ...classCardColors,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"'],
        mono: ['"Roboto Mono"']
      },
      colors: {
        'smart-main': '#2563EB',
        'smart-main-darken': '#1D4ED8',

        'smart-secondary': '#2563EB',
        'smart-secondary-lighten': '#EFF6FF',
        'smart-secondary-darken': '#1D4ED8',

        green: twColors.emerald,
        yellow: twColors.amber,
        purple: twColors.violet,
        blue: twColors.blue
      },
      minWidth: {
        '1px': '1px',
        4.5: '18px',
        13: '3.25rem',
        26: '6.5rem',
        31: '7.75rem',
        33: '8.25rem',
        35: '8.75rem',
        37: '9.25rem',
        38: '9.5rem',
        39: '9.75rem',
        43: '10.75rem',
        50: '12.5rem',
        86: '21.5rem',
        90: '22.5rem',
        94: '24.75rem',
        96: '25.25rem',
        100: '26.75rem',
        128: '32rem',
        150: '37.5rem',
        160: '40rem',
        175: '42.5rem',
        200: '61.25rem'
      },
      width: {
        '1px': '1px',
        4.5: '18px',
        13: '3.25rem',
        19: '4.75rem',
        26: '6.5rem',
        31: '7.75rem',
        33: '8.25rem',
        35: '8.75rem',
        37: '9.25rem',
        38: '9.5rem',
        39: '9.75rem',
        43: '10.75rem',
        50: '12.5rem',
        74: '18.5rem',
        76: '19rem',
        86: '21.5rem', // 350px
        88: '22rem', // 352px
        90: '22.5rem', // 360px
        94: '24.75rem', // 375px
        96: '25.25rem', // 384px
        100: '26.75rem', // 450px
        128: '32rem', // 512px
        150: '37.5rem', // 600px
        160: '40rem', // 640px
        175: '42.5rem', // 700px
        200: '61.25rem' // 1000px
      },
      maxWidth: {
        86: '21.5rem',
        94: '24.75rem', // 375px
        95: '25rem', // 380px
        96: '25.25rem', // 384px
        256: '64rem', // 1024px
        '7xl': '80rem',
        '8xl': '88rem',
        '9xl': '96rem', // 1440px
        120: '30rem', // 480px
        125: '31.25rem', // 500px
        128: '32rem'
      },
      minHeight: {
        13: '3.25rem'
      },
      height: {
        13: '3.25rem'
      },
      padding: {
        // TODO: replace 3px and 5px
        0.75: '0.1875rem',
        1.25: '0.3125rem',
        18.5: '4.63rem'
      },
      margin: {
        '1px': '1px',
        15: '3.75rem',
        18: '4.5rem'
      },
      transitionProperty: {
        width: 'width'
      },
      transformOrigin: {
        'center-left': 'center left'
      },
      opacity: {
        m: '0.918'
      },
      backgroundColor: {
        modal: 'rgba(17, 24, 39, 0.75)'
      },
      backgroundImage: {
        'purple-linear': 'linear-gradient(180deg, #8363ED 0%, #6336D1 100%)',
        'green-linear': 'linear-gradient(180deg, #10B981 0%, #42936C 100%)',
        'yellow-linear': 'linear-gradient(180deg, #F2C04B 0%, #E9A03B 100%)',
        'orange-gradient': 'linear-gradient(180deg, #ED964F 0%, #E97A35 100%)',
        'blue-gradient': 'linear-gradient(180deg, #3290FF 0%, #0240D1 100%)',
        'dark-blue-gradient': 'linear-gradient(180deg, #02296C -26%, #011A46 100%)',
        'collect-gradient': 'linear-gradient(31deg, #0295C9 -23%, #0CD2E1 111%)',
        'rfp-gradient': 'linear-gradient(180deg, #4F46E5 0%, #2119A2 100%)',
        'card-gradient': 'linear-gradient(180deg, #3A4253 0%, #111827 100%)'
      },
      borderRadius: {
        '1px': '1px'
      },
      boxShadow: {
        'modal-style':
          '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.05)',
        dropdown:
          '0px 0px 0px 1px #0000000D, 0px 4px 6px -2px #0000000D, 0px 10px 15px -3px #0000001A'
      }
    }
  },
  plugins: [
    // require('flowbite/plugin'),
    // formsPlugin,
    plugin(({ addVariant }) => {
      addVariant('target-checked', ({ modifySelectors }) => {
        return modifySelectors(({ className }) => {
          return `.target-checked:checked ~ .target-checked\\:${className}`
        })
      })
    }),
    plugin(({ addVariant }) => {
      addVariant('target-checked-deep', ({ modifySelectors }) => {
        return modifySelectors(({ className }) => {
          return `.target-checked-deep:checked ~ * .target-checked-deep\\:${className}`
        })
      })
    })
  ]
}
