"use client";

import { useActionState } from "react";
import type { SkillGroup } from "@/lib/db/schema";

const INPUT =
  "w-full border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400";
const LABEL = "block text-sm font-medium text-neutral-700 mb-1";

export function SkillGroupForm({
  action,
  defaultValues,
}: {
  action: (prevState: string | undefined, formData: FormData) => Promise<string | undefined>;
  defaultValues?: SkillGroup;
}) {
  const [error, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="space-y-4 max-w-xl">
      {defaultValues && <input type="hidden" name="id" value={defaultValues.id} />}

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

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={LABEL} htmlFor="label-en">
            Label (EN)
          </label>
          <input
            id="label-en"
            name="label.en"
            defaultValue={defaultValues?.label.en}
            required
            className={INPUT}
          />
        </div>
        <div>
          <label className={LABEL} htmlFor="label-fr">
            Label (FR)
          </label>
          <input
            id="label-fr"
            name="label.fr"
            defaultValue={defaultValues?.label.fr}
            required
            className={INPUT}
          />
        </div>
      </div>

      <div>
        <label className={LABEL} htmlFor="items">
          Items (comma-separated, not translated)
        </label>
        <input
          id="items"
          name="items"
          defaultValue={defaultValues?.items.join(", ")}
          required
          className={INPUT}
        />
      </div>

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
