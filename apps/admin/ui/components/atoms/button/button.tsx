import React from "react";
import clsx from "clsx";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { label: string };

export const Button = ({ className, label, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={clsx(
        "bg-blue-800 h-[40px] rounded-md px-5 font-bold cursor-pointer",
        className,
      )}
    >
      {label}
    </button>
  );
};
