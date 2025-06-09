import React from "react";
import { Textarea } from "@/ui/components/atoms/textarea/textarea";

type Props = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { label: string; errorMessage?: string[] };

export const TextareaGroup = ({ label, errorMessage, ...rest }: Props) => (
  <div className="flex flex-col gap-1">
    <label className="font-semibold" htmlFor={rest.id}>
      {label}
    </label>
    <Textarea {...rest} />
    {errorMessage &&
      errorMessage.map((error) => (
        <div className="text-red-400" key={error}>
          {error}
        </div>
      ))}
  </div>
);
