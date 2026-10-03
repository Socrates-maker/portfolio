"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { upload } from "@vercel/blob/client";
import { removeCv, saveCv } from "./actions";

export function CvForm({ cvUrl }: { cvUrl: string | null }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File | undefined) {
    if (!file) return;
    setBusy(true);
    setError(null);
    try {
      const blob = await upload(`cv/${file.name}`, file, {
        access: "public",
        handleUploadUrl: "/admin/cv/upload",
      });
      await saveCv(blob.url);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setBusy(false);
    }
  }

  async function handleRemove() {
    setBusy(true);
    setError(null);
    try {
      await removeCv();
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not remove the CV.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-5 space-y-4 max-w-2xl">
      {cvUrl ? (
        <div className="flex items-center justify-between gap-4">
          <a
            href={cvUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm font-medium text-neutral-900 underline break-all"
          >
            {decodeURIComponent(cvUrl.split("/").pop() ?? "CV")}
          </a>
          <button
            type="button"
            onClick={handleRemove}
            disabled={busy}
            className="text-sm text-red-600 hover:text-red-800 disabled:opacity-60 shrink-0"
          >
            Remove
          </button>
        </div>
      ) : (
        <p className="text-sm text-neutral-500">
          No CV uploaded — the &ldquo;View my CV&rdquo; button is hidden on the site.
        </p>
      )}

      <div>
        <label htmlFor="cv-input" className="block text-sm font-medium text-neutral-700 mb-1">
          {cvUrl ? "Replace with a new PDF" : "Upload a PDF"}
        </label>
        <input
          id="cv-input"
          type="file"
          accept="application/pdf"
          disabled={busy}
          onChange={(e) => handleFile(e.target.files?.[0])}
          className="text-sm"
        />
        {busy && <p className="text-xs text-neutral-500 mt-1">Saving…</p>}
        {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
      </div>
    </div>
  );
}
