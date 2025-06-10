import React from "react";
import { Input } from "@/components/atoms/input/input";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string; errorMessage?: string[] };

export const InputGroup = ({ label, errorMessage, ...rest }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold" htmlFor={rest.id}>
        {label}
      </label>
      <Input {...rest} />
      {errorMessage &&
        errorMessage.map((error) => (
          <div className="text-red-400" key={error}>
            {error}
          </div>
        ))}
    </div>
  );
};
