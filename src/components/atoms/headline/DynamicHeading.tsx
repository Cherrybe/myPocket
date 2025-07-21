import React, { forwardRef } from 'react'
import { HeadlineProps } from './Headline.types'

export const DynamicHeading = forwardRef<HTMLElement, HeadlineProps>(
  (props, ref): React.JSX.Element => {
    const { level, children, ...rest } = props
    const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements

    return React.createElement(HeadingTag, { ref, ...rest }, children)
  }
)

DynamicHeading.displayName = "DynamicHeading";