const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'Quicksand', 'system-ui' ]
      },
      colors: {
        primary: {
          base: '#00C58E',
          light: '#00E0A1',
          dark: '#07A377',
          lightgreen: '#00C58E',
          green: '#108775',
          gray: '#2F495E',
        },
        light: {
          bg: '#F8FAFC',
          fg: '#2F495E',
          fgAlt: '#606F7B',
          bgAlt: colors.white,
          border: colors.gray['300']
        },
        dark: {
          bg: '#2C3E50',
          fg: '#F5F7FA',
          fgAlt: '#B8C2CC',
          bgAlt: '#2F495E',
          border: colors.gray['600']
        }
      },
      fill: theme => ({
        'primary-gray': theme('colors.primary.gray'),
        'primary-lightgreen': theme('colors.primary.lightgreen'),
        'primary-dark': theme('colors.primary.dark'),
      }),
      boxShadow: {
        main: '0px 0px 8px rgba(0, 0, 0, 0.101562)',
        reverse: '0 -8px 4px 0 rgba(0, 0, 0, 0.05)',
        inset: 'inset 0px 0px 8px rgba(0, 0, 0, 0.101562)'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%'
      },
      keyframes: {
        wiggle: {
          '0%, 60%': { transform: 'rotate(-5deg)' },
          '35%, 100%': { transform: 'rotate(5deg)' },
          '60%': { transform: 'rotate(-5deg)' }
        }
      },
      animation: {
        wiggle: 'wiggle 0.6s ease-in-out',
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  variants: {
    animation: ['hover', 'focus', 'group-hover'],
    rotate: ['responsive', 'active', 'group-hover'],
    transform: ['responsive', 'hover', 'group-hover'],
    translate: ['active', 'hover', 'group-hover'],
    scale: ['active', 'hover', 'group-hover'],
    boxShadow: ['active', 'hover', 'group-hover'],
    inset: ['responsive', 'active', 'hover', 'group-hover'],
    fill: ['active', 'hover', 'group-hover', 'dark'],
    backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    textColor: [ 'responsive', 'hover', 'focus', 'group-hover', 'dark' ],
    width: ['responsive', 'focus-within'],
    height: ['responsive', 'focus-within'],
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
  }
}
