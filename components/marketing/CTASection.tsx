"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { authRoutes } from "@/lib/routes";

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="bg-[#0B1728] py-10 sm:py-16 text-[#F4F7FA] lg:py-24 border-b border-[#203147]">
      <div className="mx-auto max-w-[1280px] px-3 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-[#F4F7FA] sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-3 max-w-xl mx-auto text-sm text-[#A9B5C3] sm:text-lg leading-relaxed">
          {t("body")}
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href={authRoutes.signUp}
            className="inline-flex h-11 sm:h-12 items-center justify-center rounded-[6px] bg-[#4F8CC9] px-6 sm:px-8 text-sm sm:text-base font-semibold text-[#F4F7FA] transition-colors hover:bg-[#79A9D6]"
          >
            {t("primary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
