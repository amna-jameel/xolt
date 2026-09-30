"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const labels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  ar: "AR",
};

export function LanguageSwitcher({
  compact = false,
  variant = "dark",
}: {
  compact?: boolean;
  variant?: "dark" | "light";
}) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const isDark = variant === "dark";

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-md border p-0.5 ${
        isDark
          ? "border-[#203147] bg-[#0A1628]"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <span className="sr-only">{t("language")}</span>
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            aria-current={active ? "true" : undefined}
            className={
              active
                ? isDark
                  ? "rounded bg-[#4F8CC9] px-1.5 sm:px-2 py-0.5 sm:py-1 text-[11px] sm:text-xs font-bold text-[#F4F7FA] transition-colors"
                  : "rounded bg-slate-900 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[11px] sm:text-xs font-bold text-white transition-colors"
                : isDark
                  ? "rounded px-1.5 sm:px-2 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium text-[#A9B5C3] hover:bg-[#16273E] hover:text-[#F4F7FA] transition-colors"
                  : "rounded px-1.5 sm:px-2 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
            }
            onClick={() => router.replace(pathname, { locale: loc })}
          >
            {labels[loc]}
          </button>
        );
      })}
    </div>
  );
}

