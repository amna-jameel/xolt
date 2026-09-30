"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email(),
  topic: z.enum(["support", "privacy", "security", "billing"]),
  message: z.string().trim().min(10).max(4000),
});

export type ContactState = {
  ok: boolean;
  error?: boolean;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    topic: formData.get("topic"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return { ok: false, error: true };
  }

  return { ok: true };
}
