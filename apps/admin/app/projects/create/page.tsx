import { Heading } from "@/ui/components/atoms/heading/heading";
import { ProjectForm } from "@/ui/components/organisms/forms/projectForm";

export default function CreateProjectPage() {
  return (
    <div className="p-5">
      <Heading title="Create Project" />
      <ProjectForm />
    </div>
  );
}
