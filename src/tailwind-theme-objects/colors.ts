const createColorShades = (
  prefix: string,
  subtleKey: string
): Record<string, string> => ({
  DEFAULT: `var(--${prefix})`,
  '100': `var(--${prefix}-100)`,
  '200': `var(--${prefix}-200)`,
  '300': `var(--${prefix}-300)`,
  '400': `var(--${prefix}-400)`,
  '500': `var(--${prefix}-500)`,
  '600': `var(--${prefix}-600)`,
  '700': `var(--${prefix}-700)`,
  '800': `var(--${prefix}-800)`,
  '900': `var(--${prefix}-900)`,
  '1000': `var(--${prefix}-1000)`,
  subtle: `var(--${subtleKey})`
})

export const colors = {
  black: {
    DEFAULT: 'var(--base-black)'
  },
  white: {
    DEFAULT: 'var(--base-white)'
  },
  marine: {
    DEFAULT: 'var(--base-ultra-marine)'
  },
  primary: createColorShades('primary', 'primary-200'),
  'primary-alt': createColorShades('primary-alt', 'primary-alt-700'),
  neutral: {
    DEFAULT: 'var(--neutrals-600)',
    '100': 'var(--neutrals-100)',
    '200': 'var(--neutrals-200)',
    '300': 'var(--neutrals-300)',
    '400': 'var(--neutrals-400)',
    '500': 'var(--neutrals-500)',
    '600': 'var(--neutrals-600)',
    '700': 'var(--neutrals-700)',
    '800': 'var(--neutrals-800)',
    '900': 'var(--neutrals-900)',
    '1000': 'var(--neutrals-1000)',
    subtle: 'var(--neutrals-800)'
  },
  secondary: {
    DEFAULT: 'var(--secondary)',
    '100': 'var(--secondary-100)',
    '200': 'var(--secondary-200)',
    '300': 'var(--secondary-300)',
    '400': 'var(--secondary-400)',
    '500': 'var(--secondary-500)',
    '600': 'var(--secondary-600)',
    '700': 'var(--secondary-700)',
    '800': 'var(--secondary-800)',
    '900': 'var(--secondary-900)',
    '1000': 'var(--secondary-1000)',
    subtle: 'var(--secondary-200)'
  },
  accent: createColorShades('accent', 'accent-200'),
  'accent-alt': createColorShades('accent-alt', 'accent-alt-100'),
  green: {
    DEFAULT: 'var(--green)',
    '100': 'var(--green-100)',
    '200': 'var(--green-200)',
    '300': 'var(--green-300)',
    '400': 'var(--green-400)',
    '500': 'var(--green-500)',
    '600': 'var(--green-600)',
    '700': 'var(--green-700)',
    '800': 'var(--green-800)',
    '900': 'var(--green-900)',
    '1000': 'var(--green-1000)'
  },
  success: {
    DEFAULT: 'var(--green-500)'
  },
  red: {
    DEFAULT: 'var(--red)',
    '100': 'var(--red-100)',
    '200': 'var(--red-200)',
    '300': 'var(--red-300)',
    '400': 'var(--red-400)',
    '500': 'var(--red-500)',
    '600': 'var(--red-600)',
    '700': 'var(--red-700)',
    '800': 'var(--red-800)',
    '900': 'var(--red-900)',
    '1000': 'var(--red-1000)'
  },
  error: {
    DEFAULT: 'var(--red-600)'
  }
} as const
