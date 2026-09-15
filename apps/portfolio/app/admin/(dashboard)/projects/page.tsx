import Link from "next/link";
import { getAllProjects } from "@/lib/db/queries";
import { DeleteButton } from "../delete-button";
import { deleteProject } from "./actions";

export default async function ProjectsListPage() {
  const projects = await getAllProjects();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-neutral-900">Projects</h1>
        <Link
          href="/admin/projects/new"
          className="bg-neutral-900 text-white text-sm font-medium rounded-md px-3 py-1.5"
        >
          New project
        </Link>
      </div>

      <div className="bg-white border border-neutral-200 rounded-lg divide-y divide-neutral-200">
        {projects.map((p) => (
          <div key={p.id} className="flex items-center justify-between px-4 py-3">
            <div>
              <div className="text-sm font-medium text-neutral-900 flex items-center gap-2">
                {p.title.en} <span className="text-neutral-400">· {p.year}</span>
                {!p.published && (
                  <span className="text-xs font-medium text-amber-700 bg-amber-100 rounded-full px-2 py-0.5">
                    Hidden
                  </span>
                )}
                {p.featured && (
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-100 rounded-full px-2 py-0.5">
                    Featured
                  </span>
                )}
              </div>
              <div className="text-xs text-neutral-500">order {p.sortOrder}</div>
            </div>
            <div className="flex items-center gap-4">
              <Link href={`/admin/projects/${p.id}`} className="text-sm text-neutral-600 hover:text-neutral-900">
                Edit
              </Link>
              <DeleteButton action={deleteProject.bind(null, p.id)} label={p.title.en} />
            </div>
          </div>
        ))}
        {projects.length === 0 && (
          <p className="px-4 py-6 text-sm text-neutral-500">No projects yet.</p>
        )}
      </div>
    </div>
  );
}
