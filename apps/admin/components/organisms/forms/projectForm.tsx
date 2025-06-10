"use client";
import { FileInput } from "@/components/molecules/fileInput/fileInput";
import {
  createProjectAction,
  CreateProjectFormState,
} from "@/lib/actions/createProjectAction";
import { SubmitButton } from "@/components/organisms/forms/submitButton";
import { useActionState, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

export const ProjectForm = () => {
  const initialState: CreateProjectFormState = { message: null, errors: {} };
  const [state, dispatch] = useActionState(createProjectAction, initialState);
  const [coverFileUrl, setCoverFileUrl] = useState<string | null>(null);
  const [projectImagesUrl, setProjectImagesUrl] = useState<string[]>([]);

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      url: "",
      coverImage: "",
      images: [],
    },
  });

  const handleSubmit = async (formData: FormData) => {
    if (coverFileUrl) {
      formData.append("cover", coverFileUrl);
    }
    if (projectImagesUrl.length > 0) {
      formData.append("images", projectImagesUrl.toString());
    }
    dispatch(formData);
  };

  const addToProjectFileUrls = (url: string) => {
    setProjectImagesUrl((projectImagesUrl) => [...projectImagesUrl, url]);
  };

  return (
    <Form {...form}>
      <form
        action={handleSubmit}
        className="space-y-5  lg:grid lg:grid-cols-2 lg:gap-5"
      >
        {state.errors && <FormMessage>{state.message}</FormMessage>}
        <div className="space-y-5 ">
          <FormField
            name={"title"}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="title" required type="text" />
                </FormControl>
                <FormMessage>{state.errors?.title}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            name={"description"}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Description" required />
                </FormControl>
                <FormMessage>{state.errors?.description}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            name={"url"}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project url</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Project url"
                    required
                    type="text"
                  />
                </FormControl>
                <FormMessage>{state.errors?.url}</FormMessage>
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-5 lg:px-5 ">
          <FileInput
            label="Cover image"
            id="cover"
            accept=".png,.jpg,.jpeg"
            errorMessage={state.errors?.coverImage}
            fileUrls={coverFileUrl ? [coverFileUrl] : null}
            setFileUrl={setCoverFileUrl}
          />
          <FileInput
            label=" Project Images"
            id="images"
            errorMessage={state.errors?.images}
            fileUrls={projectImagesUrl}
            setFileUrl={addToProjectFileUrls}
            multiple
            accept="image/*"
          />
        </div>

        <SubmitButton />
      </form>
    </Form>
  );
};
