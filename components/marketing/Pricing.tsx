"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { authRoutes } from "@/lib/routes";

export function Pricing() {
  const t = useTranslations("pricing");
  const common = useTranslations("common");

  return (
    <section className="bg-[#07111F] border-b border-[#203147] py-10 sm:py-16 lg:py-24" id="pricing">
      <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#4F8CC9]">
            {t("eyebrow")}
          </div>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-[#F4F7FA]">
            {t("title")}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg leading-relaxed text-[#A9B5C3]">
            {t("subtitle")}
          </p>
          <div className="mt-2 text-[11px] sm:text-xs text-[#748397]">
            {t("accountNote")} {t("currencyNote")}
          </div>
        </div>

        {/* 3 Clean Columns */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 items-stretch">
          {/* Starter Plan - $29/mo */}
          <div className="flex flex-col justify-between rounded-[8px] border border-[#203147] bg-[#101E30] p-6 shadow-sm">
            <div>
              <div className="text-lg font-bold text-[#F4F7FA]">{t("starter.name")}</div>
              <div className="mt-1 text-xs text-[#748397]">{t("starter.blurb")}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-[#F4F7FA]">$29</span>
                <span className="text-xs text-[#748397]">{common("perMonth")}</span>
              </div>
              <ul className="mt-6 space-y-3 border-t border-[#203147] pt-4 text-sm text-[#A9B5C3]">
                <li className="flex items-center gap-2">
                  <span className="text-[#4F8CC9] font-bold">•</span> {t("starter.items.a")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4F8CC9] font-bold">•</span> {t("starter.items.b")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4F8CC9] font-bold">•</span> {t("starter.items.c")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4F8CC9] font-bold">•</span> {t("starter.items.d")}
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <Link
                href={authRoutes.signUp}
                className="inline-flex w-full h-11 items-center justify-center rounded-[6px] border border-[#203147] bg-[#07111F] text-sm font-semibold text-[#F4F7FA] transition-colors hover:bg-[#14253A]"
              >
                {t("cta")}
              </Link>
            </div>
          </div>

          {/* Pro Plan - $59/mo (Highlighted) */}
          <div className="flex flex-col justify-between rounded-[8px] border-2 border-[#4F8CC9] bg-[#14253A] p-6 shadow-sm relative">
            <div>
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-[#F4F7FA]">{t("pro.name")}</div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4F7FA] bg-[#4F8CC9]/30 px-2 py-0.5 rounded-[4px]">
                  Recommended
                </span>
              </div>
              <div className="mt-1 text-xs text-[#A9B5C3]">{t("pro.blurb")}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-[#F4F7FA]">$59</span>
                <span className="text-xs text-[#A9B5C3]">{common("perMonth")}</span>
              </div>
              <ul className="mt-6 space-y-3 border-t border-[#203147] pt-4 text-sm text-[#F4F7FA]">
                <li className="flex items-center gap-2">
                  <span className="text-[#4F8CC9] font-bold">•</span> {t("pro.items.a")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4F8CC9] font-bold">•</span> {t("pro.items.b")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4F8CC9] font-bold">•</span> {t("pro.items.c")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4F8CC9] font-bold">•</span> {t("pro.items.d")}
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <Link
                href={authRoutes.signUp}
                className="inline-flex w-full h-11 items-center justify-center rounded-[6px] bg-[#4F8CC9] text-sm font-semibold text-[#F4F7FA] transition-colors hover:bg-[#79A9D6]"
              >
                {t("cta")}
              </Link>
            </div>
          </div>

          {/* Agency Plan - $199/mo */}
          <div className="flex flex-col justify-between rounded-[8px] border border-[#203147] bg-[#101E30] p-6 shadow-sm">
            <div>
              <div className="text-lg font-bold text-[#F4F7FA]">{t("agency.name")}</div>
              <div className="mt-1 text-xs text-[#748397]">{t("agency.blurb")}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-[#F4F7FA]">$199</span>
                <span className="text-xs text-[#748397]">{common("perMonth")}</span>
              </div>
              <ul className="mt-6 space-y-3 border-t border-[#203147] pt-4 text-sm text-[#A9B5C3]">
                <li className="flex items-center gap-2">
                  <span className="text-[#4F8CC9] font-bold">•</span> {t("agency.items.a")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4F8CC9] font-bold">•</span> {t("agency.items.b")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4F8CC9] font-bold">•</span> {t("agency.items.c")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4F8CC9] font-bold">•</span> {t("agency.items.d")}
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <Link
                href={authRoutes.signUp}
                className="inline-flex w-full h-11 items-center justify-center rounded-[6px] border border-[#203147] bg-[#07111F] text-sm font-semibold text-[#F4F7FA] transition-colors hover:bg-[#14253A]"
              >
                {t("cta")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
