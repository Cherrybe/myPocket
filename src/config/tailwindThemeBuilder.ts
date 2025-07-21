import type { Config } from 'tailwindcss'

import {
  borderRadius,
  boxShadow,
  breakpoints,
  colors,
  fonts,
  fontSize,
  lineHeight,
  spacing
} from '../tailwind-theme-objects'

export const generateTailwindConfigTheme = (): Partial<Config['theme']> => ({
  extend: {
    spacing,
    borderRadius,
    boxShadow,
    colors,
    screens: breakpoints,
    fontFamily: fonts,
    lineHeight,
    fontSize
  }
})
