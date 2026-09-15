import Link from "next/link";
import { getSkillGroups } from "@/lib/db/queries";
import { DeleteButton } from "../delete-button";
import { deleteSkillGroup } from "./actions";

export default async function SkillGroupsListPage() {
  const skillGroups = await getSkillGroups();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-neutral-900">Skill groups</h1>
        <Link
          href="/admin/skills/new"
          className="bg-neutral-900 text-white text-sm font-medium rounded-md px-3 py-1.5"
        >
          New group
        </Link>
      </div>

      <div className="bg-white border border-neutral-200 rounded-lg divide-y divide-neutral-200">
        {skillGroups.map((g) => (
          <div key={g.id} className="flex items-center justify-between px-4 py-3">
            <div>
              <div className="text-sm font-medium text-neutral-900">{g.label.en}</div>
              <div className="text-xs text-neutral-500">{g.items.join(", ")}</div>
            </div>
            <div className="flex items-center gap-4">
              <Link href={`/admin/skills/${g.id}`} className="text-sm text-neutral-600 hover:text-neutral-900">
                Edit
              </Link>
              <DeleteButton action={deleteSkillGroup.bind(null, g.id)} label={g.label.en} />
            </div>
          </div>
        ))}
        {skillGroups.length === 0 && (
          <p className="px-4 py-6 text-sm text-neutral-500">No skill groups yet.</p>
        )}
      </div>
    </div>
  );
}
