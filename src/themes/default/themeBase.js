export const themeBase = {
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

  font: {
    // sans: 'Roboto, sans-serif',
    // sans: '"Open Sans", sans-serif',
    sans: '"Roboto Flex"',
    serif: 'Merriweather, serif',
    // slab: 'Rokkitt, serif',
    headers: 'Bitter, serif',
    mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },

  // use https://type-scale.com/ to generate font sizes
  // currently we default to (1.250) Major Third for this project

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

  // Minor third - 1.200 - Good for mobile/web
  fontSize: {
    xs: '0.694rem', // x-small
    sm: '0.833rem', // small
    base: '1rem', // p
    lg: '1.2rem', // h6
    xl: '1.2rem', // h5
    '2xl': '1.44rem', // h4
    '3xl': '1.728rem', // h3
    '4xl': '2.074rem', // h2
    '5xl': '2.488rem', // h1
    '6xl': '2.986rem', // Other
  },

  // Major third - 1.250 Good for Desktop / blogs
  // fontSize: {
  //   xs: '0.64rem', // x-small
  //   sm: '0.833rem', // small
  //   base: '1rem', // p
  //   lg: '1.25rem', // h6
  //   xl: '1.25rem', // h5
  //   '2xl': '1.563rem', // h4
  //   '3xl': '1.953rem', // h3
  //   '4xl': '2.441rem', // h2
  //   '5xl': '3.052rem', // h1
  //   '6xl': '3.815rem', // Other
  // },

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
