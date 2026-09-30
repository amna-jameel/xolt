"use client";

import { useLocale, useTranslations } from "next-intl";
import { skuRows } from "@/lib/mock-data";
import { formatMoney, formatPercent } from "@/lib/cn";

export function ProfitTable({ compact = false }: { compact?: boolean }) {
  const t = useTranslations("preview");
  const locale = useLocale();
  const rows = compact ? skuRows.slice(0, 4) : skuRows;

  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-surface">
      <table className="min-w-[720px] w-full border-collapse text-start text-sm">
        <caption className="sr-only">{t("title")}</caption>
        <thead className="bg-slate-50 text-xs font-medium uppercase tracking-wide text-muted">
          <tr>
            <th className="px-4 py-3 text-start font-medium">{t("sku")}</th>
            <th className="px-4 py-3 text-start font-medium">{t("product")}</th>
            <th className="px-4 py-3 text-end font-medium">{t("revenue")}</th>
            <th className="px-4 py-3 text-end font-medium">{t("fees")}</th>
            <th className="px-4 py-3 text-end font-medium">{t("cogs")}</th>
            <th className="px-4 py-3 text-end font-medium">{t("profit")}</th>
            <th className="px-4 py-3 text-end font-medium">{t("margin")}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.sku} className="border-t border-border">
              <td className="px-4 py-3 font-mono text-xs text-ink">{row.sku}</td>
              <td className="px-4 py-3 text-ink">
                <div>{row.title}</div>
                <div className="text-xs text-muted">{row.marketplace}</div>
              </td>
              <td className="px-4 py-3 text-end tabular-nums">
                {formatMoney(row.revenue, locale)}
              </td>
              <td className="px-4 py-3 text-end tabular-nums text-muted">
                {formatMoney(row.fees, locale)}
              </td>
              <td className="px-4 py-3 text-end tabular-nums text-muted">
                {formatMoney(row.cogs, locale)}
              </td>
              <td className="px-4 py-3 text-end tabular-nums font-medium text-success">
                {formatMoney(row.profit, locale)}
              </td>
              <td className="px-4 py-3 text-end tabular-nums">
                {formatPercent(row.margin, locale)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
