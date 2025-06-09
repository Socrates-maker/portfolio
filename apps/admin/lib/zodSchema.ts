import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024;

export const FileSchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File must be less than 2MB",
    })
    .refine(
      (file) => {
        const extension = file.name.split(".").pop()?.toLowerCase() || "";
        return [".png", ".jpg", ".jpeg"].includes(`.${extension}`);
      },
      { message: "Only png, jpg, jpeg files are allowed" },
    ),
});
