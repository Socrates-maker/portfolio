/**
 * Projects, experience, and skill groups used to be hardcoded arrays here.
 * They now live in the database (see lib/db/schema.ts) and are managed
 * through the /admin backoffice — this file only re-exports the shared
 * types so existing imports keep working.
 */
export type { Locale as Lang } from "@/lib/locale";
export type {
  Project,
  Experience,
  SkillGroup,
  Localized,
} from "@/lib/db/schema";
