"use server";

import { eq } from "drizzle-orm";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { projects, type NewProject } from "@/lib/db/schema";

function readLocalized(formData: FormData, name: string) {
  const en = formData.get(`${name}.en`);
  const fr = formData.get(`${name}.fr`);
  if (typeof en !== "string" || typeof fr !== "string" || !en || !fr) {
    throw new Error(`Missing "${name}" (EN and FR are both required).`);
  }
  return { en, fr };
}

function readProjectFields(formData: FormData): Omit<NewProject, "id"> {
  const year = formData.get("year");
  const url = formData.get("url");
  const stack = formData.get("stack");
  const sortOrder = formData.get("sortOrder");
  if (typeof year !== "string" || typeof url !== "string" || typeof stack !== "string") {
    throw new Error("Missing required fields.");
  }
  return {
    sortOrder: Number(sortOrder) || 0,
    published: formData.get("published") === "on",
    year,
    url,
    stack: stack.split(",").map((s) => s.trim()).filter(Boolean),
    title: readLocalized(formData, "title"),
    kind: readLocalized(formData, "kind"),
    blurb: readLocalized(formData, "blurb"),
    detail: readLocalized(formData, "detail"),
    role: readLocalized(formData, "role"),
  };
}

export async function createProject(_prevState: string | undefined, formData: FormData) {
  try {
    const fields = readProjectFields(formData);
    await db.insert(projects).values(fields);
  } catch (err) {
    return err instanceof Error ? err.message : "Could not create the project.";
  }

  updateTag("projects");
  redirect("/admin/projects");
}

export async function updateProject(_prevState: string | undefined, formData: FormData) {
  const id = Number(formData.get("id"));
  if (!id) return "Missing project id.";

  try {
    const fields = readProjectFields(formData);
    await db.update(projects).set(fields).where(eq(projects.id, id));
  } catch (err) {
    return err instanceof Error ? err.message : "Could not update the project.";
  }

  updateTag("projects");
  redirect("/admin/projects");
}

export async function deleteProject(id: number) {
  await db.delete(projects).where(eq(projects.id, id));
  updateTag("projects");
}
