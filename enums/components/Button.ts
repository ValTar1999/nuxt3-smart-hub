export const Variants = [
  'primary',
  'secondary',
  'primaryTransparent',
  'primaryDistructive',
  'yellow',
  'linkYellow',
  'green',
  'linkGreen',
  'gray',
  'linkPrimary',
  'linkSecondary',
  'linkError',
  'add_on'
] as const

export type TVariants = (typeof Variants)[number]

export const sizes = {
  buttonSize: {
    default: {
      xl: 'text-base px-3.5 py-2.5 gap-2',
      lg: 'text-base px-3 py-2 gap-1.5',
      md: 'text-sm px-2.5 py-1.5 gap-1',
      sm: 'text-sm px-2 py-1 gap-1',
      xs: 'text-xs px-1.5 py-0.5 gap-1'
    },
    only: {
      xl: 'p-3',
      lg: 'p-2.5',
      md: 'p-1.5',
      sm: 'p-1.25',
      xs: 'p-0.5'
    }
  },
  iconSize: {
    default: {
      xl: 'w-5 h-5',
      lg: 'w-5 h-5',
      md: 'w-4.5 h-4.5',
      sm: 'w-4.5 h-4.5',
      xs: 'w-4 h-4'
    },
    only: {
      xl: 'w-5 h-5',
      lg: 'w-5 h-5',
      md: 'w-5 h-5',
      sm: 'w-4.5 h-4.5',
      xs: 'w-4 h-4'
    }
  },
  // iconMargin: {
  //   left: {
  //     xl: '-ml-1 mr-3',
  //     lg: '-ml-1 mr-3',
  //     md: '-ml-1 mr-2',
  //     sm: '-ml-0.5 mr-1.5',
  //     xs: '-ml-0.5 mr-1'
  //   },
  //   right: {
  //     xl: '-mr-1 ml-3',
  //     lg: '-mr-1 ml-3',
  //     md: '-mr-1 ml-2',
  //     sm: '-mr-0.5 ml-1.5',
  //     xs: '-mr-0.5 ml-1'
  //   }
  // },
  rounded: {
    xl: 'rounded-md',
    lg: 'rounded-md',
    md: 'rounded-md',
    sm: 'rounded',
    xs: 'rounded'
  }
} as const

export const classes = {
  common:
    'inline-flex items-center justify-center font-semibold text-center whitespace-nowrap disabled:opacity-40 disabled:pointer-events-none',
  colors: {
    primary: 'bg-smart-main text-white shadow-sm hover:bg-smart-main-darken focus-button',
    secondary:
      'bg-white text-gray-700 shadow-sm hover:bg-gray-50 custom-ring-btn-secondary focus-button',
    gray: 'bg-gray-100 text-gray-600 hover:bg-gray-200 focus-button',
    linkPrimary:
      'bg-transparent text-smart-secondary group hover:text-smart-secondary-darken focus-button',
    linkSecondary: 'bg-transparent text-gray-700 group hover:text-gray-800 focus-button',
    linkError: 'bg-transparent text-red-500 group hover:text-red-600 focus-button',
    primaryDistructive: 'bg-red-600 text-white shadow-sm hover:bg-red-700 focus-button',
    primaryTransparent: 'bg-blue-50 text-blue-600 hover:bg-blue-100 focus-button',
    yellow: 'bg-yellow-600 text-white hover:bg-yellow-700 focus-button',
    green: 'bg-green-600 text-white hover:bg-green-700 focus-button',
    add_on: 'text-gray-500 outline-0 focus-button',
    linkYellow: 'bg-transparent text-yellow-500 group hover:text-yellow-600 focus-button',
    linkGreen: 'bg-transparent text-green-500 group hover:text-green-600 focus-button'
  },
  colorsIcon: {
    primary: 'text-white',
    secondary: 'text-gray-500',
    gray: 'text-gray-500',
    linkPrimary: 'text-blue-500',
    linkSecondary: 'text-gray-500 ',
    linkError: 'text-red-400',
    primaryDistructive: 'text-white',
    primaryTransparent: 'text-blue-500',
    yellow: 'text-white',
    green: 'text-white',
    add_on: 'text-gray-500',
    linkYellow: 'text-yellow-500',
    linkGreen: 'text-green-500'
  }
}
