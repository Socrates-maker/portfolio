import React from "react";
import clsx from "clsx";

type Props = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {};

export const Textarea = ({ className, ...rest }: Props) => (
  <textarea
    {...rest}
    className={clsx(
      "border-1 border-neutral-600 rounded focus:outline-none focus:border-neutral-500 focus:border-2 resize-none px-1",
      className,
    )}
  />
);
