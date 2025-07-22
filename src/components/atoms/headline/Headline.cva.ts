import { cva } from 'class-variance-authority'
import { TextColorVariants } from '../../../shared/color.cva'

export const HeadlineVariants = cva('font-poppins', {
  variants: {
    level: {
      1: [
        'font-semibold body-2xl leading-(--lh-mobile) lg:heading-lg md:heading-md md:leading-(--lh-tablet)'
      ],
      2: [
        'font-semibold body-xl leading-(--lh-mobile) lg:heading-md md:heading-sm md:leading-(--lh-tablet)'
      ],
      3: [
        'font-semibold heading-3xs md:heading-xs lg:heading-sm md:leading-(--lh-tablet)'
      ],
      4: [
        'font-semibold body-lg leading-(--lh-mobile) lg:heading-xs md:heading-2xs md:leading-(--lh-tablet)'
      ],
      5: [
        'font-semibold body-md leading-(--lh-mobile) lg:heading-2xs md:body-lg md:leading-(--lh-tablet)'
      ],
      6: [
        'font-semibold body-sm md:body-lg lg:leading-(--lh-tablet)'
      ]
    },
    as: {
      'display-1': 'font-bold heading-md leading-(--lh-mobile) lg:heading-3xl md:heading-2xl',
      'display-2': 'font-bold heading-sm lg:heading-2xl md:heading-xl',
      'display-3': 'font-bold heading-xs lg:heading-xl md:heading-lg'
    },
    colorVariants: TextColorVariants
  },
  defaultVariants: {
    level: 2
  }
})
