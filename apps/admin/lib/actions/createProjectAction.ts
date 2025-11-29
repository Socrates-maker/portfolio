"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CreateProjectFormSchema } from "@/lib/zodSchema";
import { apiRoutes } from "@/lib/consts";
import { serverToast } from "@/lib/server-toast/server-toast";

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
  const images = (formData?.get("images") as string)?.split(",");
  //console.log("Images in server", images);
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

  const response = await fetch(apiRoutes.projects, {
    method: "POST",
    body: JSON.stringify(validatedFields.data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    const error = await response.json();
    console.error(error);
    return {
      message: error.message,
    };
  }
  //toast("Created");
  await serverToast("Project created successfully", "success");
  revalidatePath("/projects");
  redirect("/projects");
};
