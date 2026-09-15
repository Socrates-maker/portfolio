import { notFound } from "next/navigation";
import { getExperienceById } from "@/lib/db/queries";
import { ExperienceForm } from "../experience-form";
import { updateExperience } from "../actions";

export default async function EditExperiencePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const experience = await getExperienceById(Number(id));
  if (!experience) notFound();

  return (
    <div>
      <h1 className="text-xl font-semibold text-neutral-900 mb-6">Edit experience entry</h1>
      <ExperienceForm action={updateExperience} defaultValues={experience} />
    </div>
  );
}
