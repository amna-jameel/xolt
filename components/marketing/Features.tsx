"use client";

import React from "react";
import { useTranslations } from "next-intl";

export function Features() {
  const t = useTranslations("features");

  return (
    <section className="bg-[#0B1728] border-b border-[#203147] py-16 lg:py-24" id="features">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#4F8CC9]">
            {t("eyebrow")}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#F4F7FA] sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="mt-16 space-y-20">
          {/* SECTION 1: Product economics */}
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#748397]">01 &nbsp; UNIT ECONOMICS</div>
              <h3 className="mt-2 text-2xl font-bold text-[#F4F7FA] sm:text-3xl">
                {t("skuProfit.title")}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#A9B5C3]">
                {t("skuProfit.body")}
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-[8px] border border-[#203147] bg-[#101E30] p-6">
                <div className="flex justify-between border-b border-[#203147] pb-3 text-xs font-bold text-[#F4F7FA]">
                  <span>SKU / PRODUCT</span>
                  <span>NET CONTRIBUTION</span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between rounded bg-[#07111F] p-3 border border-[#203147] text-sm">
                    <span className="font-semibold text-[#F4F7FA]">Premium Coffee Set</span>
                    <span className="font-bold text-[#4FA77A]">$19.29 (38.6%)</span>
                  </div>
                  <div className="flex justify-between rounded bg-[#07111F] p-3 border border-[#203147] text-sm">
                    <span className="font-semibold text-[#F4F7FA]">Modular Storage Box</span>
                    <span className="font-bold text-[#4FA77A]">$11.99 (40.0%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: Monthly action plans */}
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 lg:order-1 order-2">
              <div className="rounded-[8px] border border-[#203147] bg-[#101E30] p-6">
                <div className="text-xs font-bold text-[#F4F7FA] border-b border-[#203147] pb-3 uppercase">
                  MONTHLY ACTION PLAN
                </div>
                <div className="mt-4 space-y-3">
                  <div className="rounded bg-[#07111F] p-4 border border-[#203147]">
                    <div className="flex items-center justify-between text-xs font-bold text-[#F4F7FA]">
                      <span>01. Review PPC spend on Travel Mug</span>
                      <span className="text-[#4FA77A]">+$640 / mo</span>
                    </div>
                    <p className="mt-1 text-xs text-[#A9B5C3]">
                      ACoS increased 14% while contribution margin declined.
                    </p>
                  </div>
                  <div className="rounded bg-[#07111F] p-4 border border-[#203147]">
                    <div className="flex items-center justify-between text-xs font-bold text-[#F4F7FA]">
                      <span>02. Review Coffee Set pricing</span>
                      <span className="text-[#4FA77A]">+$420 / mo</span>
                    </div>
                    <p className="mt-1 text-xs text-[#A9B5C3]">
                      Margin remains strong despite increased demand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 lg:order-2 order-1">
              <div className="text-xs font-bold uppercase tracking-wider text-[#748397]">02 &nbsp; PRIORITY DECISIONS</div>
              <h3 className="mt-2 text-2xl font-bold text-[#F4F7FA] sm:text-3xl">
                {t("plan.title")}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#A9B5C3]">
                {t("plan.body")}
              </p>
            </div>
          </div>

          {/* SECTION 3: Multi-market reporting */}
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#748397]">03 &nbsp; GLOBAL OPERATIONS</div>
              <h3 className="mt-2 text-xl sm:text-3xl font-bold text-[#F4F7FA]">
                {t("markets.title")}
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#A9B5C3]">
                {t("markets.body")}
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-[8px] border border-[#203147] bg-[#101E30] p-3 sm:p-6">
                <div className="grid grid-cols-3 gap-1.5 sm:gap-3 text-center text-xs">
                  <div className="rounded bg-[#07111F] p-2 sm:p-3 border border-[#203147]">
                    <div className="font-bold text-[#F4F7FA] text-[11px] sm:text-xs truncate">Amazon.ae</div>
                    <div className="mt-0.5 text-[10px] sm:text-xs text-[#A9B5C3] truncate">AED</div>
                  </div>
                  <div className="rounded bg-[#07111F] p-2 sm:p-3 border border-[#203147]">
                    <div className="font-bold text-[#F4F7FA] text-[11px] sm:text-xs truncate">Amazon.sa</div>
                    <div className="mt-0.5 text-[10px] sm:text-xs text-[#A9B5C3] truncate">SAR</div>
                  </div>
                  <div className="rounded bg-[#07111F] p-2 sm:p-3 border border-[#203147]">
                    <div className="font-bold text-[#F4F7FA] text-[11px] sm:text-xs truncate">Amazon.com</div>
                    <div className="mt-0.5 text-[10px] sm:text-xs text-[#A9B5C3] truncate">USD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
