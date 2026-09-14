"use server";

import { eq } from "drizzle-orm";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { experiences, type NewExperience } from "@/lib/db/schema";

function readLocalized(formData: FormData, name: string) {
  const en = formData.get(`${name}.en`);
  const fr = formData.get(`${name}.fr`);
  if (typeof en !== "string" || typeof fr !== "string" || !en || !fr) {
    throw new Error(`Missing "${name}" (EN and FR are both required).`);
  }
  return { en, fr };
}

function readExperienceFields(formData: FormData): Omit<NewExperience, "id"> {
  const company = formData.get("company");
  const tags = formData.get("tags");
  const sortOrder = formData.get("sortOrder");
  if (typeof company !== "string" || typeof tags !== "string") {
    throw new Error("Missing required fields.");
  }
  return {
    sortOrder: Number(sortOrder) || 0,
    company,
    tags: tags.split(",").map((s) => s.trim()).filter(Boolean),
    role: readLocalized(formData, "role"),
    period: readLocalized(formData, "period"),
    location: readLocalized(formData, "location"),
    summary: readLocalized(formData, "summary"),
  };
}

export async function createExperience(_prevState: string | undefined, formData: FormData) {
  try {
    const fields = readExperienceFields(formData);
    await db.insert(experiences).values(fields);
  } catch (err) {
    return err instanceof Error ? err.message : "Could not create the entry.";
  }

  updateTag("experiences");
  redirect("/admin/experience");
}

export async function updateExperience(_prevState: string | undefined, formData: FormData) {
  const id = Number(formData.get("id"));
  if (!id) return "Missing entry id.";

  try {
    const fields = readExperienceFields(formData);
    await db.update(experiences).set(fields).where(eq(experiences.id, id));
  } catch (err) {
    return err instanceof Error ? err.message : "Could not update the entry.";
  }

  updateTag("experiences");
  redirect("/admin/experience");
}

export async function deleteExperience(id: number) {
  await db.delete(experiences).where(eq(experiences.id, id));
  updateTag("experiences");
}
