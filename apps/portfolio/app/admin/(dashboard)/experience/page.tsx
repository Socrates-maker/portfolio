import Link from "next/link";
import { getExperiences } from "@/lib/db/queries";
import { DeleteButton } from "../delete-button";
import { deleteExperience } from "./actions";

export default async function ExperienceListPage() {
  const experiences = await getExperiences();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-neutral-900">Experience</h1>
        <Link
          href="/admin/experience/new"
          className="bg-neutral-900 text-white text-sm font-medium rounded-md px-3 py-1.5"
        >
          New entry
        </Link>
      </div>

      <div className="bg-white border border-neutral-200 rounded-lg divide-y divide-neutral-200">
        {experiences.map((e) => (
          <div key={e.id} className="flex items-center justify-between px-4 py-3">
            <div>
              <div className="text-sm font-medium text-neutral-900">
                {e.company} <span className="text-neutral-400">· {e.period.en}</span>
              </div>
              <div className="text-xs text-neutral-500">order {e.sortOrder}</div>
            </div>
            <div className="flex items-center gap-4">
              <Link href={`/admin/experience/${e.id}`} className="text-sm text-neutral-600 hover:text-neutral-900">
                Edit
              </Link>
              <DeleteButton action={deleteExperience.bind(null, e.id)} label={e.company} />
            </div>
          </div>
        ))}
        {experiences.length === 0 && (
          <p className="px-4 py-6 text-sm text-neutral-500">No entries yet.</p>
        )}
      </div>
    </div>
  );
}
