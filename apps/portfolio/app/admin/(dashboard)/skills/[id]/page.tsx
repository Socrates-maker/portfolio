import { notFound } from "next/navigation";
import { getSkillGroupById } from "@/lib/db/queries";
import { SkillGroupForm } from "../skill-group-form";
import { updateSkillGroup } from "../actions";

export default async function EditSkillGroupPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const skillGroup = await getSkillGroupById(Number(id));
  if (!skillGroup) notFound();

  return (
    <div>
      <h1 className="text-xl font-semibold text-neutral-900 mb-6">Edit skill group</h1>
      <SkillGroupForm action={updateSkillGroup} defaultValues={skillGroup} />
    </div>
  );
}
