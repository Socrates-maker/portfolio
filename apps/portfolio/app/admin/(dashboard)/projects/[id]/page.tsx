import { notFound } from "next/navigation";
import { getProjectById } from "@/lib/db/queries";
import { ProjectForm } from "../project-form";
import { updateProject } from "../actions";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProjectById(Number(id));
  if (!project) notFound();

  return (
    <div>
      <h1 className="text-xl font-semibold text-neutral-900 mb-6">Edit project</h1>
      <ProjectForm action={updateProject} defaultValues={project} />
    </div>
  );
}
