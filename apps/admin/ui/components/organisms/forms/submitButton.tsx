"use client";
import { Button } from "@/ui/components/atoms/button/button";
import clsx from "clsx";
import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <div className="flex  bg-blue-800 rounded-md h-[max-content] w-[max-content]">
      <Button
        label="Submit"
        type="submit"
        aria-disabled={pending}
        className={clsx({ pending: "pr-2" })}
      />
      {pending && (
        <div className=" self-center size-[15px] mr-2 border-2 rounded-[50%] border-dashed border-neutral-400 border-b-neutral-100 animate-spin"></div>
      )}
    </div>
  );
};
