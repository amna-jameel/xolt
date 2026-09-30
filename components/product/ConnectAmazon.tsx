"use client";

import { ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export function ConnectAmazonMock() {
  const t = useTranslations("how.steps.connect");
  const common = useTranslations("common");

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
          <ShieldCheck className="text-primary" size={20} aria-hidden />
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">{t("title")}</p>
          <p className="mt-1 text-sm leading-6 text-muted">{t("body")}</p>
        </div>
      </div>
      <div className="mt-6 rounded-lg border border-dashed border-border bg-slate-50 px-4 py-5 text-center">
        <p className="text-sm font-medium text-ink">{common("connectAmazon")}</p>
        <p className="mt-1 text-xs text-muted">{common("demoOnly")}</p>
      </div>
    </div>
  );
}
