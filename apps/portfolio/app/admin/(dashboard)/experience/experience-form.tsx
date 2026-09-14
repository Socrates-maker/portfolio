"use client";

import { useActionState } from "react";
import type { Experience } from "@/lib/db/schema";

const INPUT =
  "w-full border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400";
const LABEL = "block text-sm font-medium text-neutral-700 mb-1";

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

export function ExperienceForm({
  action,
  defaultValues,
}: {
  action: (prevState: string | undefined, formData: FormData) => Promise<string | undefined>;
  defaultValues?: Experience;
}) {
  const [error, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="space-y-4 max-w-2xl">
      {defaultValues && <input type="hidden" name="id" value={defaultValues.id} />}

      <div className="grid grid-cols-2 gap-3">
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
          <label className={LABEL} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            defaultValue={defaultValues?.company}
            required
            className={INPUT}
          />
        </div>
      </div>

      <div>
        <label className={LABEL} htmlFor="tags">
          Tags (comma-separated)
        </label>
        <input
          id="tags"
          name="tags"
          defaultValue={defaultValues?.tags.join(", ")}
          required
          className={INPUT}
        />
      </div>

      <LocalizedField name="role" label="Role" defaultEn={defaultValues?.role.en} defaultFr={defaultValues?.role.fr} />
      <LocalizedField
        name="period"
        label="Period"
        defaultEn={defaultValues?.period.en}
        defaultFr={defaultValues?.period.fr}
      />
      <LocalizedField
        name="location"
        label="Location"
        defaultEn={defaultValues?.location.en}
        defaultFr={defaultValues?.location.fr}
      />
      <LocalizedField
        name="summary"
        label="Summary"
        defaultEn={defaultValues?.summary.en}
        defaultFr={defaultValues?.summary.fr}
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
