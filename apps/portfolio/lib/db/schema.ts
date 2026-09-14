import { boolean, integer, jsonb, pgTable, text } from "drizzle-orm/pg-core";
import type { Locale } from "@/lib/locale";

/** A string that needs translating, stored as one jsonb column. */
export type Localized = Record<Locale, string>;

export const projects = pgTable("projects", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  sortOrder: integer("sort_order").notNull().default(0),
  published: boolean("published").notNull().default(true),
  year: text("year").notNull(),
  url: text("url").notNull(),
  stack: text("stack").array().notNull().default([]),
  title: jsonb("title").$type<Localized>().notNull(),
  kind: jsonb("kind").$type<Localized>().notNull(),
  blurb: jsonb("blurb").$type<Localized>().notNull(),
  detail: jsonb("detail").$type<Localized>().notNull(),
  role: jsonb("role").$type<Localized>().notNull(),
});

export const experiences = pgTable("experiences", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  sortOrder: integer("sort_order").notNull().default(0),
  company: text("company").notNull(),
  tags: text("tags").array().notNull().default([]),
  role: jsonb("role").$type<Localized>().notNull(),
  period: jsonb("period").$type<Localized>().notNull(),
  location: jsonb("location").$type<Localized>().notNull(),
  summary: jsonb("summary").$type<Localized>().notNull(),
});

export const skillGroups = pgTable("skill_groups", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  sortOrder: integer("sort_order").notNull().default(0),
  label: jsonb("label").$type<Localized>().notNull(),
  items: text("items").array().notNull().default([]),
});

export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
export type Experience = typeof experiences.$inferSelect;
export type NewExperience = typeof experiences.$inferInsert;
export type SkillGroup = typeof skillGroups.$inferSelect;
export type NewSkillGroup = typeof skillGroups.$inferInsert;
