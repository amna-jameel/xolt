"use client";

import React from "react";
import { useTranslations } from "next-intl";

export function SecuritySection() {
  const t = useTranslations("securitySection");

  return (
    <section className="bg-[#0B1728] border-b border-[#203147] py-10 sm:py-16 lg:py-24" id="security">
      <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#4F8CC9]">
            {t("eyebrow")}
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#F4F7FA] sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A9B5C3]">
            {t("body")}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="border-l-2 border-[#4F8CC9] pl-5">
            <h3 className="text-base font-bold text-[#F4F7FA]">{t("items.api")}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#A9B5C3]">
              {t("items.pii")}
            </p>
          </div>

          <div className="border-l-2 border-[#4F8CC9] pl-5">
            <h3 className="text-base font-bold text-[#F4F7FA]">{t("items.kms")}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#A9B5C3]">
              {t("items.rls")}
            </p>
          </div>

          <div className="border-l-2 border-[#4F8CC9] pl-5">
            <h3 className="text-base font-bold text-[#F4F7FA]">{t("items.ai")}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#A9B5C3]">
              {t("body")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
