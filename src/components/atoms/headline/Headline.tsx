import React, { PropsWithChildren } from "react";
import { HeadlineProps } from "./Headline.types";
import { DynamicHeading } from "./DynamicHeading";
import { HeadlineVariants } from "./Headline.cva";
import { cn } from "../../../shared/utils";

export const Headline = ({
  level,
  as,
  color,
  className,
  children,
  ...props
}: PropsWithChildren<HeadlineProps>): React.JSX.Element => (
  <DynamicHeading
    level={level}
    className={`${cn(
      HeadlineVariants({ level, as, colorVariants: color, className })
    )}`}
    {...props}
  >
    {children}
  </DynamicHeading>
);
