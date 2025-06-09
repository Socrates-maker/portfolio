"use server";
import { z } from "zod";
import { prisma } from "@repo/database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const CreateProjectFormSchema = z.object({
  title: z.string({ required_error: "This field is required" }),
  description: z.string({ required_error: "This field is required" }),
  url: z
    .string({ required_error: "This field is required" })
    .url({ message: "Invalid URL" }),
  coverImage: z
    .string({ required_error: "Image url is required" })
    .url({ message: "Invalid URL" }),
  images: z.array(z.string().url({ message: "Invalid Url" })).optional(),
});

export type CreateProjectFormState = {
  data?: {
    title?: string;
    description?: string;
    url?: string;
    coverImage?: string;
    images?: string[];
  };
  errors?: {
    title?: string[];
    description?: string[];
    url?: string[];
    coverImage?: string[];
    images?: string[];
  };
  message?: string | null;
};

export const createProjectAction = async (
  prevState: CreateProjectFormState,
  formData: FormData,
): Promise<CreateProjectFormState> => {
  const images = (formData.get("images") as string).split(",");
  console.log("Images in server", images);
  const formDataObject = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    url: formData.get("url") as string,
    coverImage: formData.get("cover") as string,
    images: images,
  };
  const validatedFields = CreateProjectFormSchema.safeParse(formDataObject);

  if (!validatedFields.success) {
    return {
      data: { ...formDataObject },
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Fields error,Failed to create project",
    };
  }

  try {
    await prisma.projet.create({
      data: {
        ...validatedFields.data,
      },
    });
  } catch (e) {
    console.log(e);
    return {
      message: "Database error. Failed to create project",
    };
  }
  revalidatePath("/projects");
  redirect("/projects");
};
