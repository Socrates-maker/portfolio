"use server";

import { eq } from "drizzle-orm";
import { updateTag } from "next/cache";
import { del } from "@vercel/blob";
import { db } from "@/lib/db";
import { settings } from "@/lib/db/schema";
import { CV_SETTING } from "@/lib/db/queries";

async function currentCvUrl() {
  const [row] = await db.select().from(settings).where(eq(settings.key, CV_SETTING));
  return row?.value ?? null;
}

/** Best-effort cleanup: a leftover blob is harmless, a failed save is not. */
async function deleteBlob(url: string) {
  try {
    await del(url);
  } catch {}
}

export async function saveCv(url: string) {
  if (!url.startsWith("https://")) throw new Error("Invalid CV URL.");

  const previous = await currentCvUrl();
  await db
    .insert(settings)
    .values({ key: CV_SETTING, value: url })
    .onConflictDoUpdate({ target: settings.key, set: { value: url } });
  updateTag("settings");

  if (previous && previous !== url) await deleteBlob(previous);
}

export async function removeCv() {
  const previous = await currentCvUrl();
  await db.delete(settings).where(eq(settings.key, CV_SETTING));
  updateTag("settings");

  if (previous) await deleteBlob(previous);
}
