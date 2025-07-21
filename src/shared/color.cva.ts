export const ExtendedBackgroundVariants = {
  'primary-alt-800': 'bg-primary-alt-800',
  'primary-alt-700': 'bg-primary-alt-700',
  'primary-alt-900': 'bg-primary-alt-900',
  'secondary-600': 'bg-secondary-600',
  'neutral-100': 'bg-neutral-100'
}

export const BackgroundVariants = {
  primary: 'bg-primary-700',
  'primary-subtle': 'bg-primary-subtle',
  'primary-alt': 'bg-primary-alt',
  'primary-alt-subtle': 'bg-primary-alt-subtle',
  secondary: 'bg-secondary',
  'secondary-subtle': 'bg-secondary-subtle',
  accent: 'bg-accent',
  'accent-subtle': 'bg-accent-subtle',
  'accent-alt': 'bg-accent-alt-900',
  'accent-alt-subtle': 'bg-accent-alt-subtle',
  neutral: 'bg-black',
  'neutral-subtle': 'bg-neutral-subtle',
  white: 'bg-white',
  'off-white': 'bg-neutral-100',
  'secondary-1000': 'bg-secondary-1000'
}

export const CombinedBackgroundVariants = {
  ...ExtendedBackgroundVariants,
  ...BackgroundVariants
}

export const ExtendedTextVariants = {
  'neutral-100': 'text-neutral-100',
  'neutral-300': 'text-neutral-300',
  'neutral-900': 'text-neutral-900',
  'neutral-600': 'text-neutral-600',
  'neutral-1000': 'text-neutral-1000',
  'primary-700': 'text-primary-700',
  'secondary-1000': 'text-secondary-1000',
  'red-800': 'text-red-800'
}

export const TextColorVariants = {
  primary: 'text-primary',
  'primary-alt': 'text-primary-alt',
  secondary: 'text-secondary',
  accent: 'text-accent',
  'accent-alt': 'text-marine',
  neutral: 'text-neutral-800',
  black: 'text-black',
  white: 'text-white',
  'off-white': 'text-neutral-100'
}

export const CombinedTextColorVariants = {
  ...ExtendedTextVariants,
  ...TextColorVariants
}

export const themeVariants = {
  primary:
    'hover:text-primary-700 focus:text-primary focus:border focus:border-secondary active:text-primary-700 visited:text-primary-400 disabled:text-primary-200',
  accent:
    'hover:text-accent-700 focus:text-accent focus:border focus:border-secondary active:text-accent-800 visited:text-accent-400 disabled:text-accent-200',
  'accent-alt':
    'hover:text-accent-alt-700 focus:text-accent-alt focus:border focus:border-secondary active:text-accent-alt-800 visited:text-accent-alt-900 disabled:text-accent-alt-200',
  neutral:
    'hover:text-neutral-700 focus:text-neutral-100 focus:border focus:border-secondary active:text-neutral-300 visited:text-neutral-500 disabled:text-neutral-800'
}
