import { cacheTag } from "next/cache";
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { experiences, projects, skillGroups } from "@/lib/db/schema";

/** Public site: published projects only. */
export async function getProjects() {
  "use cache";
  cacheTag("projects");
  return db
    .select()
    .from(projects)
    .where(eq(projects.published, true))
    .orderBy(asc(projects.sortOrder));
}

/** Home page: published + featured projects only, for the short list. */
export async function getFeaturedProjects() {
  "use cache";
  cacheTag("projects");
  return db
    .select()
    .from(projects)
    .where(and(eq(projects.published, true), eq(projects.featured, true)))
    .orderBy(asc(projects.sortOrder));
}

/** Admin list: every project, published or not. */
export async function getAllProjects() {
  return db.select().from(projects).orderBy(asc(projects.sortOrder));
}

export async function getExperiences() {
  "use cache";
  cacheTag("experiences");
  return db.select().from(experiences).orderBy(asc(experiences.sortOrder));
}

export async function getSkillGroups() {
  "use cache";
  cacheTag("skills");
  return db.select().from(skillGroups).orderBy(asc(skillGroups.sortOrder));
}

/**
 * Uncached single-record lookups for the admin edit pages — always read
 * the latest row rather than a possibly-stale cached list.
 */
export async function getProjectById(id: number) {
  const [row] = await db.select().from(projects).where(eq(projects.id, id));
  return row;
}

export async function getExperienceById(id: number) {
  const [row] = await db.select().from(experiences).where(eq(experiences.id, id));
  return row;
}

export async function getSkillGroupById(id: number) {
  const [row] = await db.select().from(skillGroups).where(eq(skillGroups.id, id));
  return row;
}
