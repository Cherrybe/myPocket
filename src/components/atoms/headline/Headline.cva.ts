import { cva } from 'class-variance-authority'
import { CombinedTextColorVariants } from '../../../shared/color.cva'

export const HeadlineVariants = cva('font-sans', {
  variants: {
    level: {
      1: [
        'font-semibold text-body-2xl leading-lh-mobile lg:text-heading-lg md:text-heading-md md:leading-lh-tablet lg:leading-lh-tablet'
      ],
      2: [
        'font-semibold text-body-xl leading-lh-mobile lg:text-heading-md md:text-heading-sm md:leading-lh-tablet'
      ],
      3: [
        'font-semibold text-heading-3xs md:text-heading-xs lg:text-heading-sm md:leading-lh-tablet lg:leading-lh-tablet'
      ],
      4: [
        'font-semibold text-body-lg leading-lh-mobile lg:text-heading-xs md:text-heading-2xs md:leading-lh-tablet lg:leading-lh-tablet'
      ],
      5: [
        'font-semibold text-body-md leading-lh-mobile lg:text-heading-2xs md:text-body-lg md:leading-lh-tablet lg:leading-lh-tablet'
      ],
      6: ['font-semibold text-body-sm md:text-body-lg lg:leading-lh-tablet']
    },
    as: {
      'display-1':
        'font-bold text-heading-md leading-lh-mobile lg:text-heading-3xl md:text-heading-2xl',
      'display-2':
        'font-bold text-heading-sm lg:text-heading-2xl md:text-heading-xl',
      'display-3':
        'font-bold text-heading-xs lg:text-heading-xl md:text-heading-lg'
    },
    colorVariants: CombinedTextColorVariants
  },
  defaultVariants: {
    level: 2
  }
})
