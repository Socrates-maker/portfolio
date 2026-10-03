"use server";

import { Resend } from "resend";
import { SITE } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  error?: "invalid" | "failed";
};

const FROM = "Portfolio <contact@socratesekpaliguidime.com>";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, name: string, max: number) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: hidden from people, filled in by naive bots. Pretend it worked.
  if (field(formData, "botcheck", 200)) {
    console.warn("Contact form: honeypot filled, message dropped");
    return { status: "success" };
  }

  const name = field(formData, "name", 120);
  const email = field(formData, "email", 200);
  const message = field(formData, "message", 5000);
  if (!name || !message || !EMAIL_RE.test(email)) {
    return { status: "error", error: "invalid" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return { status: "error", error: "failed" };
  }

  // Plain text only, so nothing the visitor types is ever rendered as HTML.
  const { error } = await new Resend(apiKey).emails.send({
    from: FROM,
    to: SITE.contact.email,
    replyTo: email,
    subject: `Portfolio — ${name.replace(/[\r\n]+/g, " ")}`,
    text: `${message}\n\n— ${name} <${email}>`,
  });

  if (error) {
    console.error("Resend error", error);
    return { status: "error", error: "failed" };
  }
  return { status: "success" };
}
