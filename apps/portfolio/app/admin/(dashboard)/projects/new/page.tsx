import { ProjectForm } from "../project-form";
import { createProject } from "../actions";

export default function NewProjectPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-neutral-900 mb-6">New project</h1>
      <ProjectForm action={createProject} />
    </div>
  );
}
