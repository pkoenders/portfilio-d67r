import { themeBase } from '/src/themes/default/themeBase'
import { themeBaseColors } from '/src/themes/default/themeBaseColors'
import { light, dark } from '/src/themes/default/themeLightDark'

// Merge themes with base theme
const _ = require('lodash')
export const lightTheme = _.merge(light, themeBase, themeBaseColors)
export const darkTheme = _.merge(dark, themeBase, themeBaseColors)
