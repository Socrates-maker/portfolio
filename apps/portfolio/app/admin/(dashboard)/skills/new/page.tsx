import { SkillGroupForm } from "../skill-group-form";
import { createSkillGroup } from "../actions";

export default function NewSkillGroupPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-neutral-900 mb-6">New skill group</h1>
      <SkillGroupForm action={createSkillGroup} />
    </div>
  );
}
