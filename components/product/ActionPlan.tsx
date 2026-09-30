"use client";

import { useLocale, useTranslations } from "next-intl";
import { monthlyPlan, skuRows } from "@/lib/mock-data";
import { formatMoney } from "@/lib/cn";
import { cn } from "@/lib/cn";

export function ActionPlan() {
  const t = useTranslations("preview");
  const locale = useLocale();

  return (
    <div className="rounded-xl border border-border bg-surface">
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-ink">{monthlyPlan.period}</p>
          <p className="text-xs text-muted">{t("action")}</p>
        </div>
        <p className="text-sm font-medium text-success">
          {formatMoney(monthlyPlan.netImpact, locale)}
        </p>
      </div>
      <ul className="divide-y divide-border">
        {skuRows.slice(0, 4).map((row) => (
          <li
            key={row.sku}
            className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-mono text-xs text-muted">{row.sku}</p>
              <p className="text-sm text-ink">{row.action}</p>
            </div>
            <p
              className={cn(
                "text-sm font-medium tabular-nums",
                row.impact >= 200 ? "text-success" : "text-ink",
              )}
            >
              +{formatMoney(row.impact, locale)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
