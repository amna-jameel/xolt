"use client";

import React from "react";
import { useTranslations } from "next-intl";

export function HowItWorks() {
  const t = useTranslations("how");
  const f = useTranslations("features");

  const steps = [
    {
      num: "01",
      title: t("steps.connect.title"),
      desc: t("steps.connect.body"),
    },
    {
      num: "02",
      title: t("steps.backfill.title"),
      desc: t("steps.backfill.body"),
    },
    {
      num: "03",
      title: t("steps.economics.title"),
      desc: t("steps.economics.body"),
    },
    {
      num: "04",
      title: t("steps.inventory.title"),
      desc: t("steps.inventory.body"),
    },
    {
      num: "05",
      title: t("steps.plan.title"),
      desc: t("steps.plan.body"),
    },
    {
      num: "06",
      title: t("steps.export.title"),
      desc: t("steps.export.body"),
    },
  ];

  return (
    <section className="bg-[#07111F] border-b border-[#203147] py-10 sm:py-16 lg:py-24" id="how-it-works">
      <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#4F8CC9]">
            {t("eyebrow")}
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#F4F7FA] sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A9B5C3]">
            {t("subtitle")}
          </p>
        </div>

        {/* 6 Step Sequence Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="relative border-t-2 border-[#4F8CC9] pt-6 bg-[#101E30]/40 p-5 rounded-b-lg border-x border-b border-[#203147]/50">
              <div className="text-3xl font-extrabold text-[#4F8CC9]">{step.num}</div>
              <div className="mt-2 text-sm font-bold tracking-wider text-[#F4F7FA] uppercase">
                {step.title}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#A9B5C3]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Honest v1 Limitations Banner */}
        <div className="mt-12 rounded-xl border border-[#203147] bg-[#101E30] p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 rounded-full bg-[#C89A4B]"></span>
            <h3 className="text-lg font-bold text-[#F4F7FA]">{f("limitsTitle")}</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[#A9B5C3]">
            {f("limitsBody")}
          </p>
        </div>
      </div>
    </section>
  );
}
