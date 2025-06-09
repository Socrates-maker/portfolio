import React from "react";
import clsx from "clsx";

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

export const Input = ({ className, ...rest }: InputProps) => (
  <input
    {...rest}
    className={clsx(
      "border-1 border-neutral-600 rounded focus:outline-none focus:border-neutral-500 focus:border-2  px-1 h-[35px] ",
      className,
    )}
  />
);
