"use client";
import React, { useState } from "react";
import { Input, InputProps } from "@/components/atoms/input/input";
import Image from "next/image";
import { ArrowUpFromLine } from "lucide-react";
import { FormLabel } from "@/components/ui/form";

type Props = InputProps & {
  label: string;
  errorMessage?: string[];
  fileUrls: string[] | null;
  setFileUrl: (fileUrl: string) => void;
  setMultipleFiles?: (fileUrls: string[]) => void;
};
export const FileInput = ({
  label,
  errorMessage,
  fileUrls,
  setFileUrl,
  ...props
}: Props) => {
  const [fileLoading, setFileLoading] = useState(false);
  const [errors, setErrors] = useState<Array<string>>([]);
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      if (props.multiple) {
        const filesArray = Array.from(files);

        await Promise.all(
          filesArray.map(async (file) => {
            const formData = new FormData();
            formData.append("file", file);
            return await uploadFile(formData);
          }),
        );
      } else {
        const formData = new FormData();
        formData.append("file", files[0]);
        await uploadFile(formData);
      }
    }
  };

  const uploadFile = async (formData: FormData) => {
    setFileLoading(true);
    const response = await fetch("http://localhost:3000/api/cloudinary", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      const error = await response.json();
      console.error(error);
      setErrors(error.errors.file);
      setFileLoading(false);
      return;
    }
    const data = await response.json();
    setFileUrl(data.data.secure_url);
    setErrors([]);
    setFileLoading(false);
  };

  return (
    <div className="flex flex-col ">
      <div className="flex gap-3 ">
        <label
          htmlFor={props.id}
          className="w-[max-content] flex flex-col gap-3"
        >
          <FormLabel className="font-semibold">{label}</FormLabel>
          <div className="border-1 border-neutral-600 rounded w-[100px] h-[90px] grid place-items-center cursor-pointer">
            <ArrowUpFromLine />
            <span className="text-sm">
              {!props.multiple && fileUrls && fileUrls.length > 0
                ? "Change file"
                : "Choose a file"}
            </span>
          </div>
          <div className="hidden">
            <Input {...props} type="file" onChange={handleChange} />
          </div>
        </label>
        {fileUrls && (
          <div className="self-end flex">
            {fileUrls.map((url, index) => (
              <div key={index} className="relative h-[90px] w-[100px]">
                <Image alt={"preview"} src={url} fill objectFit="contain" />
              </div>
            ))}
          </div>
        )}
      </div>
      {fileLoading && <div className="text-neutral-100">Loading...</div>}

      {errorMessage &&
        errorMessage.map((error) => (
          <div className="text-red-400" key={error}>
            {error}
          </div>
        ))}
      {errors.length > 0 &&
        errors.map((error) => (
          <div className="text-red-400" key={error}>
            {error}
          </div>
        ))}
    </div>
  );
};
