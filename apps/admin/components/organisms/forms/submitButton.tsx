"use client";
import clsx from "clsx";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      aria-disabled={pending}
      className={clsx("w-[max-content]", { pending: "pr-2" })}
    >
      Submit
      {pending && (
        <div className=" self-center size-[15px] mr-2 border-2 rounded-[50%] border-dashed border-neutral-400 border-b-neutral-100 animate-spin"></div>
      )}
    </Button>
  );
};
