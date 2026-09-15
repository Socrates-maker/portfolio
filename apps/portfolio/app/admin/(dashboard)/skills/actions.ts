"use server";

import { eq } from "drizzle-orm";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { skillGroups, type NewSkillGroup } from "@/lib/db/schema";

function readSkillGroupFields(formData: FormData): Omit<NewSkillGroup, "id"> {
  const labelEn = formData.get("label.en");
  const labelFr = formData.get("label.fr");
  const items = formData.get("items");
  const sortOrder = formData.get("sortOrder");
  if (
    typeof labelEn !== "string" ||
    typeof labelFr !== "string" ||
    !labelEn ||
    !labelFr ||
    typeof items !== "string"
  ) {
    throw new Error("Missing required fields.");
  }
  return {
    sortOrder: Number(sortOrder) || 0,
    label: { en: labelEn, fr: labelFr },
    items: items.split(",").map((s) => s.trim()).filter(Boolean),
  };
}

export async function createSkillGroup(_prevState: string | undefined, formData: FormData) {
  try {
    const fields = readSkillGroupFields(formData);
    await db.insert(skillGroups).values(fields);
  } catch (err) {
    return err instanceof Error ? err.message : "Could not create the skill group.";
  }

  updateTag("skills");
  redirect("/admin/skills");
}

export async function updateSkillGroup(_prevState: string | undefined, formData: FormData) {
  const id = Number(formData.get("id"));
  if (!id) return "Missing skill group id.";

  try {
    const fields = readSkillGroupFields(formData);
    await db.update(skillGroups).set(fields).where(eq(skillGroups.id, id));
  } catch (err) {
    return err instanceof Error ? err.message : "Could not update the skill group.";
  }

  updateTag("skills");
  redirect("/admin/skills");
}

export async function deleteSkillGroup(id: number) {
  await db.delete(skillGroups).where(eq(skillGroups.id, id));
  updateTag("skills");
}
