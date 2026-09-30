"use client";

import React from "react";
import { useTranslations } from "next-intl";

export function ValueProposition() {
  const t = useTranslations("value");

  return (
    <section className="bg-[#07111F] py-10 sm:py-16 text-[#F4F7FA] lg:py-24 border-b border-[#203147]">
      <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading and Story */}
          <div className="lg:col-span-5">
            <div className="mb-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#4F8CC9]">
              {t("eyebrow")}
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#F4F7FA] sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#A9B5C3] sm:text-lg">
              {t("body")}
            </p>

            <div className="mt-6 space-y-4 border-t border-[#203147] pt-4 text-xs sm:text-sm text-[#A9B5C3]">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="font-bold text-[#F4F7FA]">01.</span>
                <span>{t("forWhom")}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Business Report Interface */}
          <div className="lg:col-span-7">
            <div className="rounded-[8px] border border-[#203147] bg-[#101E30] p-3 sm:p-6 text-[#F4F7FA] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#203147] pb-3 sm:pb-4">
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#748397]">
                    XOLT EXECUTIVE REPORT
                  </div>
                  <div className="text-sm sm:text-lg font-bold text-[#F4F7FA]">SEPTEMBER BUSINESS REVIEW</div>
                </div>
                <div className="rounded bg-[#07111F] border border-[#203147] px-2.5 py-1 text-[11px] sm:text-xs font-bold text-[#F4F7FA]">
                  03 Priority actions
                </div>
              </div>

              {/* Actions List */}
              <div className="mt-6 space-y-6 divide-y divide-[#203147]">
                {/* Action Item 01 */}
                <div className="pt-4 first:pt-0">
                  <div className="flex items-start justify-between">
                    <div className="text-sm font-bold text-[#F4F7FA]">
                      01 &nbsp; Review PPC spend on Travel Mug
                    </div>
                    <span className="text-xs font-bold text-[#4FA77A]">+$640 / month</span>
                  </div>
                  <div className="mt-2 text-xs text-[#A9B5C3]">
                    <span className="font-medium text-[#F4F7FA]">Reason:</span> ACoS increased while contribution margin declined.
                  </div>
                </div>

                {/* Action Item 02 */}
                <div className="pt-4">
                  <div className="flex items-start justify-between">
                    <div className="text-sm font-bold text-[#F4F7FA]">
                      02 &nbsp; Review Coffee Set pricing
                    </div>
                    <span className="text-xs font-bold text-[#4FA77A]">+$420 / month</span>
                  </div>
                  <div className="mt-2 text-xs text-[#A9B5C3]">
                    <span className="font-medium text-[#F4F7FA]">Reason:</span> Margin remains strong despite increased demand.
                  </div>
                </div>

                {/* Action Item 03 */}
                <div className="pt-4">
                  <div className="flex items-start justify-between">
                    <div className="text-sm font-bold text-[#F4F7FA]">
                      03 &nbsp; Review inventory for Storage Box
                    </div>
                    <span className="text-xs font-bold text-[#C89A4B]">Risk: Stockout in 21 days</span>
                  </div>
                  <div className="mt-2 text-xs text-[#A9B5C3]">
                    <span className="font-medium text-[#F4F7FA]">Reason:</span> Sales velocity increased 18%.
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
