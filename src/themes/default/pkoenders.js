export const defaultTheme = {
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    default: '0.25rem',
    lg: '0.5rem',
    full: '9999px',
  },
  borderWidth: {
    default: '1px',
    0: '0',
    2: '2px',
    4: '4px',
    8: '8px',
  },

  boxShadow: {
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    none: 'none',
  },

  colors: {
    alert: {
      tomato: '#FF6347',
      l1: {
        default: '#478055',
        1100: '#3f734c',
        1200: '#386644',
        1300: '#31593b',
      },
      l2: {
        default: '#6D7C31',
        1100: '#626f2c',
        1200: '#576327',
        1300: '#4c5622',
      },
      l3: {
        default: '#F6C243',
        1100: '#ddae3c',
        1200: '#c49b35',
        1300: '#ac872e',
      },
      l4: {
        default: '#E88D3E',
        1100: '#d07e37',
        1200: '#b97031',
        1300: '#a2622b',
      },
      l5: {
        default: '#D95B4B',
        1100: '#c35143',
        1200: '#ad483c',
        1300: '#973f34',
      },
    },

    card: {
      default: '#171c27',
      100: '#f7fafc',
      200: '#edf2f7',
      300: '#e2e8f0',
      400: '#cbd5e0',
      500: '#a0aec0',
      600: '#718096',
      700: '#4a5568',
      800: '#2d3748',
      900: '#1a202c',
    },

    footer: {
      text: {
        default: '#e6e6e7',
      },
      default: '#0a031f',
      50: '#0c0b0fBF',
      100: '#e6e6e7',
      200: '#cececf',
      300: '#b6b5b7',
      400: '#9d9d9f',
      500: '#858587',
      600: '#6d6c6f',
      700: '#545457',
      800: '#3c3b3e',
      900: '#242326',
      1100: '#0a090d',
      1200: '#09080c',
      1300: '#08070a',
    },

    header: {
      text: {
        default: '#e6e6e7',
      },
      default: '#0a031f',
      50: '#0c0b0fBF',
      100: '#e6e6e7',
      200: '#cececf',
      300: '#b6b5b7',
      400: '#9d9d9f',
      500: '#858587',
      600: '#6d6c6f',
      700: '#545457',
      800: '#3c3b3e',
      900: '#242326',
      1100: '#0a090d',
      1200: '#09080c',
      1300: '#08070a',
    },

    accent: {
      default: '#e41b5b',
      100: 'fce8ee',
      200: '#f9d1de',
      300: '#f6bacd',
      400: '#f4a3bd',
      500: '#f18dad',
      600: '#ee769c',
      700: '#ec5f8c',
      800: '#e9487b',
      900: '#e6316b',
      1100: '#cd1851',
      1200: '#b61548',
      1300: '#9f123f',
    },

    primary: {
      default: '#51bfeb',
      100: '#a9dff5',
      200: '#97d9f3',
      300: '#86d2f1',
      400: '#74ccef',
      500: '#63c5ed',
      600: '#51bfeb',
      700: '#3fb9e9',
      800: '#2eb2e7',
      900: '#1cace5',
      1100: '#48abd3',
      1200: '#4098bc',
      1300: '#3885a4',
    },

    secondary: {
      default: '#ebd951',
      100: '#fdfbed',
      200: '#fbf7dc',
      300: '#f9f3ca',
      400: '#f7efb9',
      500: '#f5eca8',
      600: '#f3e896',
      700: '#f1e485',
      800: '#efe073',
      900: '#eddc62',
      1100: '#d3c348',
      1200: '#bcad40',
      1300: '#a49738',
    },

    tertiary: {
      default: '#5fcd99',
      100: '#e5f7ee',
      200: '#dff5ea',
      300: '#cff0e0',
      400: '#bfebd6',
      500: '#afe6cc',
      600: '#9fe1c1',
      700: '#8fdcb7',
      800: '#7ed7ad',
      900: '#6fd2a3',
      1100: '#55b889',
      1200: '#4ca47a',
      1300: '#428f6b',
    },

    page: {
      default: '#151a1e',
      100: '#e7e8e8',
      200: '#d0d1d2',
      300: '#b8babb',
      400: '#a1a3a5',
      500: '#8a8c8e',
      600: '#727578',
      700: '#5b5e61',
      800: '#43474a',
      900: '#2c3034',
      1100: '#12171b',
      1200: '#101418',
      1300: '#0e1215',

      bground: {
        default: '#fcfcfc',
      },
    },

    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    // focusVisible: '#9ecaed',
    focusVisible: '#51bfe4',
    focusVisibleOnDark: '#97d9f3',

    grey: {
      default: '#323335',
      100: '#EAEAEA',
      200: '#D6D6D6',
      300: '#C1C1C2',
      400: '#ADADAE',
      500: '#98999A',
      600: '#848485',
      700: '#6F7071',
      800: '#5B5B5D',
      900: '#464749',
      1100: '#2D2D2F',
      1200: '#28282A',
      1300: '#142323251415',
    },
  },

  font: {
    // sans: 'Roboto, sans-serif',
    // sans: '"Open Sans", sans-serif',
    sans: '"Roboto Flex"',
    slab: 'Rokkitt, serif',
    headers: 'Bitter, serif',
    mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    serif: 'Merriweather, serif',
  },

  // Major second - 1.125
  // fontSize: {
  //   xs: '0.79rem', // x-small
  //   sm: '0.889rem', // small
  //   base: '1rem', // p
  //   lg: '1.125rem', // h6
  //   xl: '1.125rem', // h5
  //   '2xl': '1.266rem', // h4
  //   '3xl': '1.424rem', // h3
  //   '4xl': '1.602rem', // h2
  //   '5xl': '1.802rem', // h1
  //   '6xl': '2.027rem', // Other
  // },

  // Minor third - 1.200
  // fontSize: {
  //   xs: '0.694rem', // x-small
  //   sm: '0.833rem', // small
  //   base: '1rem', // p
  //   lg: '1.2rem', // h6
  //   xl: '1.2rem', // h5
  //   '2xl': '1.44rem', // h4
  //   '3xl': '1.728rem', // h3
  //   '4xl': '2.074rem', // h2
  //   '5xl': '2.488rem', // h1
  //   '6xl': '2.986rem', // Other
  // },

  // Major third - 1.250
  fontSize: {
    xs: '0.64rem', // x-small
    sm: '0.833rem', // small
    base: '1rem', // p
    lg: '1.25rem', // h6
    xl: '1.25rem', // h5
    '2xl': '1.563rem', // h4
    '3xl': '1.953rem', // h3
    '4xl': '2.441rem', // h2
    '5xl': '3.052rem', // h1
    '6xl': '3.815rem', // Other
  },

  // Perfect fourth - 1.333
  // fontSize: {
  //   xs: '0.563rem', // x-small
  //   sm: '0.75rem', // small
  //   base: '1rem', // p
  //   lg: '1.333rem', // h6
  //   xl: '1.333rem', // h5
  //   '2xl': '1.777rem', // h4
  //   '3xl': '2.369rem', // h3
  //   '4xl': '3.157rem', // h2
  //   '5xl': '4.209rem', // h1
  //   '6xl': '5.61rem', // Other
  // },

  fontWeight: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  fontGrad: {
    hairline: '100',
    heavy: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  header: {
    height: '64px',
    secondaryNav: {
      height: '60px',
    },
    withSecondaryNav: {
      height: '124px',
    },
  },

  SecondaryNav: {
    height: '64px',
  },

  inset: {
    0: '0',
    auto: 'auto',
  },

  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  listStyleType: {
    none: 'none',
    disc: 'disc',
    decimal: 'decimal',
  },

  objectPosition: {
    bottom: 'bottom',
    center: 'center',
    left: 'left',
    'left-bottom': 'left bottom',
    'left-top': 'left top',
    right: 'right',
    'right-bottom': 'right bottom',
    'right-top': 'right top',
    top: 'top',
  },

  opacity: {
    0: '0',
    25: '0.25',
    50: '0.5',
    75: '0.75',
    100: '1',
  },

  margin: {
    default: '32px',
    '1/2': '16px',
    '1/4': '8px',
    '1/8': '4px',
    '1/16': '2px',
    '1xl': '40px',
    '2xl': '48px',
    '3xl': '56px',
    '4xl': '64px',
  },

  padding: {
    default: '32px',
    '1/2': '16px',
    '1/4': '8px',
    '1/8': '4px',
    '1/16': '2px',
    '1xl': '40px',
    '2xl': '48px',
    '3xl': '56px',
    '4xl': '64px',
  },

  screens: {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px', // 1280px ?
    xl: '1366px',
    xxl: '1680px',
    full: '100%',
  },

  height: (theme) => ({
    auto: 'auto',
    ...theme('spacing'),
    full: '100%',
    screen: '100vh',
  }),

  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },

  transition: {
    easeOut: {
      default: 'all 0.15s ease-out',
      quick: 'all 0.05s ease-out',
      slow: 'all 0.25s ease-out',
      lazy: 'all 0.5s ease-out',
      xtraLazy: 'all 0.25s ease-out',
    },
    easeIn: {
      default: 'all 0.15s ease-in',
      quick: 'all 0.05s ease-in',
      slow: 'all 0.25s ease-in',
      lazy: 'all 0.5s ease-in',
      xtraLazy: 'all 0.25s ease-in',
    },
    linear: {
      default: 'all 0.15s linear',
      quick: 'all 0.05s linear',
      slow: 'all 0.25s linear',
      lazy: 'all 0.5s linear',
      xtraLazy: 'all 0.25s linear',
    },
  },

  cursor: {
    auto: 'auto',
    default: 'default',
    pointer: 'pointer',
    wait: 'wait',
    text: 'text',
    move: 'move',
    'not-allowed': 'not-allowed',
  },
}
