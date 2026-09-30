"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

export function FAQ() {
  const t = useTranslations("faq");

  const faqItems = [
    {
      q: t("items.access.q"),
      a: t("items.access.a"),
    },
    {
      q: t("items.pii.q"),
      a: t("items.pii.a"),
    },
    {
      q: t("items.trial.q"),
      a: t("items.trial.a"),
    },
    {
      q: t("items.languages.q"),
      a: t("items.languages.a"),
    },
    {
      q: t("items.v1.q"),
      a: t("items.v1.a"),
    },
    {
      q: t("items.agency.q"),
      a: t("items.agency.a"),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#0B1728] border-b border-[#203147] py-10 sm:py-16 lg:py-24" id="faq">
      <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#4F8CC9]">
            {t("eyebrow")}
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#F4F7FA] sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="mt-10 divide-y divide-[#203147] border-y border-[#203147]">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.q} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 text-left text-base font-semibold text-[#F4F7FA] transition-colors hover:text-[#4F8CC9]"
                >
                  <span>{item.q}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[4px] border border-[#203147] bg-[#101E30] text-sm text-[#A9B5C3]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#A9B5C3]">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
