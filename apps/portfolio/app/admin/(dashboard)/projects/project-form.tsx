"use client";

import { useActionState, useState } from "react";
import { upload } from "@vercel/blob/client";
import type { Project } from "@/lib/db/schema";

const INPUT =
  "w-full border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400";
const LABEL = "block text-sm font-medium text-neutral-700 mb-1";

function ImagesField({ defaultImages }: { defaultImages: string[] }) {
  const [images, setImages] = useState<string[]>(defaultImages);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    setError(null);
    try {
      const uploaded = await Promise.all(
        Array.from(files).map((file) =>
          upload(file.name, file, {
            access: "public",
            handleUploadUrl: "/admin/projects/upload",
          })
        )
      );
      setImages((prev) => [...prev, ...uploaded.map((blob) => blob.url)]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  function removeImage(url: string) {
    setImages((prev) => prev.filter((src) => src !== url));
  }

  return (
    <div>
      <label className={LABEL} htmlFor="images-input">
        Screenshots
      </label>
      {images.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-3">
          {images.map((url) => (
            <div key={url} className="relative w-28 h-20 rounded-md overflow-hidden border border-neutral-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt="" className="w-full h-full object-cover" />
              <input type="hidden" name="images" value={url} />
              <button
                type="button"
                onClick={() => removeImage(url)}
                aria-label="Remove screenshot"
                className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/70 text-white text-xs leading-none flex items-center justify-center"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
      <input
        id="images-input"
        type="file"
        accept="image/png,image/jpeg,image/webp,image/avif"
        multiple
        disabled={uploading}
        onChange={(e) => handleFiles(e.target.files)}
        className="text-sm"
      />
      {uploading && <p className="text-xs text-neutral-500 mt-1">Uploading…</p>}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}

function LocalizedField({
  name,
  label,
  defaultEn,
  defaultFr,
  textarea,
}: {
  name: string;
  label: string;
  defaultEn?: string;
  defaultFr?: string;
  textarea?: boolean;
}) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className="grid grid-cols-2 gap-3">
      <div>
        <label className={LABEL} htmlFor={`${name}-en`}>
          {label} (EN)
        </label>
        <Tag
          id={`${name}-en`}
          name={`${name}.en`}
          defaultValue={defaultEn}
          required
          rows={textarea ? 3 : undefined}
          className={INPUT}
        />
      </div>
      <div>
        <label className={LABEL} htmlFor={`${name}-fr`}>
          {label} (FR)
        </label>
        <Tag
          id={`${name}-fr`}
          name={`${name}.fr`}
          defaultValue={defaultFr}
          required
          rows={textarea ? 3 : undefined}
          className={INPUT}
        />
      </div>
    </div>
  );
}

export function ProjectForm({
  action,
  defaultValues,
}: {
  action: (prevState: string | undefined, formData: FormData) => Promise<string | undefined>;
  defaultValues?: Project;
}) {
  const [error, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="space-y-4 max-w-2xl">
      {defaultValues && <input type="hidden" name="id" value={defaultValues.id} />}

      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className={LABEL} htmlFor="sortOrder">
            Order
          </label>
          <input
            id="sortOrder"
            name="sortOrder"
            type="number"
            defaultValue={defaultValues?.sortOrder ?? 0}
            required
            className={INPUT}
          />
        </div>
        <div>
          <label className={LABEL} htmlFor="year">
            Year
          </label>
          <input id="year" name="year" defaultValue={defaultValues?.year} required className={INPUT} />
        </div>
        <div>
          <label className={LABEL} htmlFor="url">
            URL
          </label>
          <input
            id="url"
            name="url"
            type="url"
            defaultValue={defaultValues?.url}
            required
            className={INPUT}
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 text-sm text-neutral-700">
          <input
            type="checkbox"
            name="published"
            defaultChecked={defaultValues?.published ?? true}
            className="rounded border-neutral-300"
          />
          Published (visible on the public site)
        </label>
        <label className="flex items-center gap-2 text-sm text-neutral-700">
          <input
            type="checkbox"
            name="featured"
            defaultChecked={defaultValues?.featured ?? false}
            className="rounded border-neutral-300"
          />
          Featured (shown on the home page)
        </label>
      </div>

      <div>
        <label className={LABEL} htmlFor="stack">
          Stack (comma-separated)
        </label>
        <input
          id="stack"
          name="stack"
          defaultValue={defaultValues?.stack.join(", ")}
          required
          className={INPUT}
        />
      </div>

      <ImagesField defaultImages={defaultValues?.images ?? []} />

      <LocalizedField name="title" label="Title" defaultEn={defaultValues?.title.en} defaultFr={defaultValues?.title.fr} />
      <LocalizedField name="kind" label="Kind" defaultEn={defaultValues?.kind.en} defaultFr={defaultValues?.kind.fr} />
      <LocalizedField
        name="role"
        label="Role"
        defaultEn={defaultValues?.role.en}
        defaultFr={defaultValues?.role.fr}
      />
      <LocalizedField
        name="blurb"
        label="Blurb"
        defaultEn={defaultValues?.blurb.en}
        defaultFr={defaultValues?.blurb.fr}
        textarea
      />
      <LocalizedField
        name="detail"
        label="Detail (case study)"
        defaultEn={defaultValues?.detail.en}
        defaultFr={defaultValues?.detail.fr}
        textarea
      />

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="bg-neutral-900 text-white text-sm font-medium rounded-md px-4 py-2 disabled:opacity-60"
      >
        {pending ? "Saving…" : "Save"}
      </button>
    </form>
  );
}
