"use client";
import { InputGroup } from "@/ui/components/molecules/inputGroup/inputGroup";
import { TextareaGroup } from "@/ui/components/molecules/textareaGroup/textareaGroup";
import { FileInput } from "@/ui/components/molecules/fileInput/fileInput";
import {
  createProjectAction,
  CreateProjectFormState,
} from "@/lib/actions/createProjectAction";
import { SubmitButton } from "@/ui/components/organisms/forms/submitButton";
import { useActionState, useState } from "react";

export const ProjectForm = () => {
  const initialState: CreateProjectFormState = { message: null, errors: {} };
  const [state, dispatch] = useActionState(createProjectAction, initialState);
  const [coverFileUrl, setCoverFileUrl] = useState<string | null>(null);
  const [projectImagesUrl, setProjectImagesUrl] = useState<string[]>([]);
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
    console.log("New url", url);
    setProjectImagesUrl((projectImagesUrl) => [...projectImagesUrl, url]);
  };

  return (
    <div>
      <form
        action={handleSubmit}
        className="dark:text-neutral-300  md:w-[400px] flex flex-col gap-3"
      >
        {state.errors && (
          <div className="text-red-400 mt-2">{state.message}</div>
        )}
        <InputGroup
          name="title"
          label="Title"
          id="title"
          required
          placeholder="Enter title"
          errorMessage={state?.errors?.title}
          defaultValue={state?.data?.title}
        />
        <TextareaGroup
          label="Description"
          name="description"
          required
          placeholder="Enter description"
          errorMessage={state?.errors?.description}
          defaultValue={state?.data?.description}
        />
        <InputGroup
          label="Lien du projet"
          id="url"
          type={"text"}
          name="url"
          placeholder="Enter URL"
          errorMessage={state?.errors?.url}
          defaultValue={state?.data?.url}
        />
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

        <SubmitButton />
      </form>
    </div>
  );
};
