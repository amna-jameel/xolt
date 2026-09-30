"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { authRoutes, marketingRoutes } from "@/lib/routes";

export function Hero() {
  const t = useTranslations("hero");
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [step, setStep] = useState(0);

  // Animated counter states
  const [revenue, setRevenue] = useState(0);
  const [profit, setProfit] = useState(0);
  const [margin, setMargin] = useState(0);

  useEffect(() => {
    // Sequence timing
    const timer1 = setTimeout(() => setStep(1), 200);

    // Smooth count-up animation over 1.2s
    const targetRevenue = 184240;
    const targetProfit = 42680;
    const targetMargin = 23.2;
    const duration = 1200;
    const startTime = performance.now();

    const animateCounters = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setRevenue(Math.round(targetRevenue * easeProgress));
      setProfit(Math.round(targetProfit * easeProgress));
      setMargin(Number((targetMargin * easeProgress).toFixed(1)));

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    const timer2 = setTimeout(() => {
      setStep(2);
      requestAnimationFrame(animateCounters);
    }, 400);

    const timer3 = setTimeout(() => {
      setSelectedRow(2);
      setStep(3);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const products = [
    { name: "Premium Coffee Set", revenue: "$24,820", margin: "42.8%", change: "↑", action: "Review", isUp: true },
    { name: "Storage Box", revenue: "$18,420", margin: "31.2%", change: "↑", action: "Scale", isUp: true },
    { name: "Travel Mug", revenue: "$12,840", margin: "9.8%", change: "↓", action: "Review", isUp: false },
  ];

  return (
    <section className="bg-[#07111F] border-b border-[#203147] py-6 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-2.5 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Existing Approved Copy */}
          <div className="lg:col-span-6">
            <div className="mb-2 inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#4F8CC9]">
              {t("eyebrow")}
            </div>
            <h1 className="text-xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#F4F7FA] lg:leading-[1.15]">
              {t("headline")}
            </h1>
            <p className="mt-3 sm:mt-6 text-xs sm:text-lg leading-relaxed text-[#A9B5C3]">
              {t("support")}
            </p>
            <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
              <Link
                href={marketingRoutes.howItWorks}
                className="inline-flex h-10 sm:h-12 items-center justify-center rounded-[6px] bg-[#4F8CC9] px-4 sm:px-6 text-xs sm:text-base font-semibold text-[#F4F7FA] transition-colors hover:bg-[#79A9D6]"
              >
                {t("secondary")}
              </Link>
              <Link
                href={authRoutes.signUp}
                className="inline-flex h-10 sm:h-12 items-center justify-center rounded-[6px] border border-[#203147] bg-[#101E30] px-4 sm:px-6 text-xs sm:text-base font-semibold text-[#F4F7FA] transition-colors hover:bg-[#14253A]"
              >
                {t("primary")}
              </Link>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-[#748397]">
              <span>✓ {t("trialNote")}</span>
              <span>✓ {t("noCard")}</span>
              <span>✓ {t("readOnlyApi")}</span>
            </div>
          </div>

          {/* Right Column: Dark Product Surface #101E30 */}
          <div className="lg:col-span-6">
            <div className="rounded-[8px] border border-[#203147] bg-[#101E30] p-2 sm:p-5 shadow-sm transition-all duration-500">
              {/* Product Header */}
              <div className="flex flex-wrap items-center justify-between gap-1.5 border-b border-[#203147] pb-2 sm:pb-4">
                <div>
                  <div className="text-[9px] sm:text-xs font-semibold uppercase tracking-wider text-[#748397]">
                    XOLT Monthly Analysis
                  </div>
                  <div className="text-[11px] sm:text-base font-bold text-[#F4F7FA]">September 2026</div>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#4FA77A]"></span>
                  <span className="text-[10px] sm:text-xs font-medium text-[#A9B5C3]">SP-API Connected</span>
                </div>
              </div>

              {/* Metrics Row with Smooth Count Up Counter Animation */}
              <div className="mt-2.5 sm:mt-4 grid grid-cols-3 gap-1 sm:gap-3">
                <div className="rounded border border-[#203147] bg-[#07111F] p-1.5 sm:p-3">
                  <div className="text-[9px] sm:text-xs font-medium text-[#748397]">Revenue</div>
                  <div className="mt-0.5 text-[11px] sm:text-lg font-bold text-[#F4F7FA] tabular-nums">
                    ${revenue.toLocaleString()}
                  </div>
                </div>
                <div className="rounded border border-[#203147] bg-[#07111F] p-1.5 sm:p-3">
                  <div className="text-[9px] sm:text-xs font-medium text-[#748397]">Net Profit</div>
                  <div className="mt-0.5 text-[11px] sm:text-lg font-bold text-[#F4F7FA] tabular-nums">
                    ${profit.toLocaleString()}
                  </div>
                </div>
                <div className="rounded border border-[#203147] bg-[#07111F] p-2 sm:p-3">
                  <div className="text-[9px] sm:text-xs font-medium text-[#748397]">Margin</div>
                  <div className="mt-0.5 text-[11px] sm:text-lg font-bold text-[#4FA77A] tabular-nums">
                    {margin.toFixed(1)}%
                  </div>
                </div>
              </div>

              {/* Product Table */}
              <div className="mt-3 sm:mt-5 overflow-x-auto -mx-1 sm:mx-0">
                <table className="w-full text-left text-[11px] sm:text-sm whitespace-nowrap min-w-[260px]">
                  <thead>
                    <tr className="border-b border-[#203147] text-[9px] sm:text-xs font-medium text-[#748397]">
                      <th className="py-1.5 px-1 sm:px-3">Product</th>
                      <th className="py-1.5 px-1 sm:px-3">Revenue</th>
                      <th className="py-1.5 px-1 sm:px-3">Margin</th>
                      <th className="py-1.5 px-1 sm:px-3 text-center">Change</th>
                      <th className="py-1.5 px-1 sm:px-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#203147]">
                    {products.map((item, idx) => {
                      const isSelected = selectedRow === idx;
                      return (
                        <tr
                          key={item.name}
                          onClick={() => setSelectedRow(idx)}
                          className={`cursor-pointer transition-colors ${
                            isSelected
                              ? "bg-[#14253A] font-medium border-l-2 border-l-[#4F8CC9]"
                              : "hover:bg-[#14253A]/50"
                          }`}
                        >
                          <td className="py-2 px-1 sm:px-3 text-[#F4F7FA] text-[11px] sm:text-sm">{item.name}</td>
                          <td className="py-2 px-1 sm:px-3 text-[#F4F7FA] text-[11px] sm:text-sm">{item.revenue}</td>
                          <td className="py-2 px-1 sm:px-3 text-[#F4F7FA] text-[11px] sm:text-sm">{item.margin}</td>
                          <td className={`py-2 px-1 sm:px-3 text-center text-[11px] sm:text-sm ${item.isUp ? "text-[#4FA77A]" : "text-[#C96A67]"}`}>
                            {item.change}
                          </td>
                          <td className="py-2 px-1 sm:px-3 text-right text-[11px] sm:text-sm font-medium text-[#4F8CC9]">
                            {item.action}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Action Attention Panel */}
              <div
                className={`mt-3 rounded border border-[#203147] bg-[#07111F] p-3 transition-all duration-300 ${
                  step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-bold text-[#F4F7FA]">
                    3 actions deserve attention.
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-[#4FA77A]">+ $640 / mo</div>
                </div>
                <div className="mt-1.5 flex items-center justify-between text-[10px] sm:text-xs text-[#A9B5C3]">
                  <span>Review PPC spend on {selectedRow !== null ? products[selectedRow].name : "Travel Mug"}</span>
                  <span className="font-medium text-[#4F8CC9] cursor-pointer hover:underline">
                    Detail →
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
