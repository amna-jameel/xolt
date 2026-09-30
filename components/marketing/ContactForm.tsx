"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { submitContact, type ContactState } from "@/lib/contact-action";
import { Button } from "@/components/ui/Button";

const initial: ContactState = { ok: false };

export function ContactForm() {
  const t = useTranslations("contactPage");
  const [state, action, pending] = useActionState(submitContact, initial);

  const fieldClass =
    "mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink";

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink">
          {t("name")}
        </label>
        <input id="name" name="name" required className={fieldClass} />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink">
          {t("email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="topic" className="text-sm font-medium text-ink">
          {t("topic")}
        </label>
        <select id="topic" name="topic" required className={fieldClass}>
          <option value="support">{t("topics.support")}</option>
          <option value="privacy">{t("topics.privacy")}</option>
          <option value="security">{t("topics.security")}</option>
          <option value="billing">{t("topics.billing")}</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={fieldClass}
        />
      </div>
      <Button type="submit" disabled={pending}>
        {t("submit")}
      </Button>
      {state.ok ? (
        <p className="text-sm text-success" role="status">
          {t("success")}
        </p>
      ) : null}
      {state.error ? (
        <p className="text-sm text-danger" role="alert">
          {t("error")}
        </p>
      ) : null}
    </form>
  );
}
