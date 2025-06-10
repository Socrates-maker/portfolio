import { ProjectForm } from "@/components/organisms/forms/projectForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CreateProjectPage() {
  return (
    <Card className="mx-5">
      <CardHeader>
        <CardTitle>Create Project</CardTitle>
      </CardHeader>
      <CardContent>
        <ProjectForm />
      </CardContent>
    </Card>
  );
}
