import { ExperienceForm } from "../experience-form";
import { createExperience } from "../actions";

export default function NewExperiencePage() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-neutral-900 mb-6">New experience entry</h1>
      <ExperienceForm action={createExperience} />
    </div>
  );
}
