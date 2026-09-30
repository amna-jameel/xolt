"use client";

import { useLocale, useTranslations } from "next-intl";
import { skuRows, type InventoryStatus } from "@/lib/mock-data";
import { cn } from "@/lib/cn";

const statusClass: Record<InventoryStatus, string> = {
  healthy: "text-success",
  overstock: "text-warning",
  "stockout-risk": "text-danger",
};

export function InventoryHealth() {
  const t = useTranslations("preview");
  const locale = useLocale();

  return (
    <div className="rounded-xl border border-border bg-surface">
      <div className="border-b border-border px-4 py-3">
        <p className="text-sm font-semibold text-ink">{t("inventory")}</p>
        <p className="text-xs text-muted">{t("cover")}</p>
      </div>
      <ul className="divide-y divide-border">
        {skuRows.map((row) => (
          <li
            key={row.sku}
            className="flex items-center justify-between gap-4 px-4 py-3"
          >
            <div>
              <p className="font-mono text-xs text-muted">{row.sku}</p>
              <p className="text-sm text-ink">{row.title}</p>
            </div>
            <div className="text-end">
              <p className="text-sm tabular-nums text-ink">
                {new Intl.NumberFormat(locale).format(row.inventory)}
              </p>
              <p className={cn("text-xs font-medium", statusClass[row.inventoryStatus])}>
                {row.daysOfCover}d
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
