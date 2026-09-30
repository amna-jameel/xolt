"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { marketingRoutes } from "@/lib/routes";

const STORAGE_KEY = "xolt-cookie-consent";

export function CookieBanner() {
  const t = useTranslations("cookies");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  function choose(value: "accepted" | "essential") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#203147] bg-[#07111F] p-3 sm:p-6 shadow-2xl"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p id="cookie-title" className="text-xs sm:text-sm font-semibold text-[#F4F7FA]">
            {t("title")}
          </p>
          <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#A9B5C3]">{t("body")}</p>
          <Link
            href={marketingRoutes.cookies}
            className="mt-1.5 inline-block text-xs sm:text-sm font-medium text-[#4F8CC9] hover:underline"
          >
            {t("policy")}
          </Link>
        </div>
        <div className="flex flex-row gap-2 sm:flex-row">
          <button
            type="button"
            className="flex-1 sm:flex-initial inline-flex h-9 sm:h-10 items-center justify-center rounded-lg border border-[#203147] bg-[#101E30] px-3 sm:px-4 text-xs sm:text-sm font-medium text-[#F4F7FA]"
            onClick={() => choose("essential")}
          >
            {t("reject")}
          </button>
          <button
            type="button"
            className="flex-1 sm:flex-initial inline-flex h-9 sm:h-10 items-center justify-center rounded-lg bg-[#4F8CC9] px-3 sm:px-4 text-xs sm:text-sm font-semibold text-[#F4F7FA] hover:bg-[#79A9D6]"
            onClick={() => choose("accepted")}
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
