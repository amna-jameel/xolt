"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

interface ProductData {
  name: string;
  revenue: string;
  profit: string;
  margin: string;
  change: string;
  isUp: boolean;
  whyItMatters: string;
  action: string;
  impact: string;
}

export function Problem() {
  const t = useTranslations("problem");

  const products: ProductData[] = [
    {
      name: "Coffee Set",
      revenue: "$24,820",
      profit: "$10,620",
      margin: "42.8%",
      change: "↑",
      isUp: true,
      whyItMatters: t("points.revenue"),
      action: "Review pricing for potential premium tier increase.",
      impact: t("impacts.revenue"),
    },
    {
      name: "Storage Box",
      revenue: "$18,420",
      profit: "$5,740",
      margin: "31.2%",
      change: "→",
      isUp: true,
      whyItMatters: t("points.inventory"),
      action: "Review reorder schedules to prevent stockout in 21 days.",
      impact: t("impacts.inventory"),
    },
    {
      name: "Travel Mug",
      revenue: "$12,840",
      profit: "$1,260",
      margin: "9.8%",
      change: "↓",
      isUp: false,
      whyItMatters: t("points.language"),
      action: "Review PPC allocation before the next campaign cycle.",
      impact: t("impacts.language"),
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number>(2);
  const activeProduct = products[selectedIndex];

  return (
    <section className="bg-[#0B1728] border-b border-[#203147] py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#4F8CC9]">
            {t("eyebrow")}
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#F4F7FA] sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#A9B5C3] sm:text-lg">
            {t("body")}
          </p>
        </div>

        {/* Mobile View (<640px): Product Selector Cards & Detailed Impact */}
        <div className="mt-6 block sm:hidden space-y-3">
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            {products.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`rounded-lg border p-2 sm:p-3 text-center transition-all ${
                    isSelected
                      ? "border-[#4F8CC9] bg-[#14253A] text-[#F4F7FA] shadow-md"
                      : "border-[#203147] bg-[#101E30] text-[#A9B5C3]"
                  }`}
                >
                  <div className="text-[11px] sm:text-xs font-bold truncate">{item.name}</div>
                  <div className={`mt-0.5 text-[11px] sm:text-xs font-semibold ${item.isUp ? "text-[#4FA77A]" : "text-[#C96A67]"}`}>
                    {item.margin}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Product Analysis Card */}
          <div className="rounded-xl border border-[#203147] bg-[#101E30] p-4 text-sm shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#203147] pb-3">
              <span className="font-bold text-[#F4F7FA]">{activeProduct.name}</span>
              <span className="text-xs font-semibold text-[#4FA77A] bg-[#4FA77A]/10 px-2 py-0.5 rounded">
                Profit: {activeProduct.profit}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs bg-[#07111F] p-2.5 rounded-lg border border-[#203147]">
              <div>
                <span className="text-[#748397] block">Revenue</span>
                <span className="font-bold text-[#F4F7FA]">{activeProduct.revenue}</span>
              </div>
              <div>
                <span className="text-[#748397] block">Margin</span>
                <span className="font-bold text-[#F4F7FA]">{activeProduct.margin}</span>
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase text-[#748397] tracking-wider">
                WHY IT MATTERS
              </div>
              <p className="mt-1 text-xs text-[#A9B5C3] leading-relaxed">
                {activeProduct.whyItMatters}
              </p>
            </div>

            <div className="border-t border-[#203147] pt-3">
              <div className="text-[11px] font-bold uppercase text-[#748397] tracking-wider">
                XOLT ACTION
              </div>
              <p className="mt-1 text-xs font-semibold text-[#F4F7FA]">
                {activeProduct.action}
              </p>
            </div>

            <div className="border-t border-[#203147] pt-3 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase text-[#748397]">IMPACT</span>
              <span className="text-xs font-bold text-[#4FA77A]">{activeProduct.impact}</span>
            </div>
          </div>
        </div>

        {/* Tablet & Desktop View (640px+): Data Table & Side Panel */}
        <div className="mt-10 hidden sm:grid gap-8 lg:grid-cols-12">
          {/* Table Container */}
          <div className="lg:col-span-7">
            <div className="overflow-x-auto rounded-[8px] border border-[#203147] bg-[#101E30]">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#203147] bg-[#07111F] text-xs font-semibold text-[#748397]">
                    <th className="py-3 px-4">Product</th>
                    <th className="py-3 px-4">Revenue</th>
                    <th className="py-3 px-4">Profit</th>
                    <th className="py-3 px-4">Margin</th>
                    <th className="py-3 px-4 text-center">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#203147]">
                  {products.map((item, idx) => {
                    const isSelected = selectedIndex === idx;
                    return (
                      <tr
                        key={item.name}
                        onClick={() => setSelectedIndex(idx)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`cursor-pointer transition-colors ${
                          isSelected
                            ? "bg-[#14253A] font-medium border-l-2 border-l-[#4F8CC9]"
                            : "hover:bg-[#14253A]/50"
                        }`}
                      >
                        <td className="py-4 px-4 font-semibold text-[#F4F7FA]">{item.name}</td>
                        <td className="py-4 px-4 text-[#F4F7FA]">{item.revenue}</td>
                        <td className="py-4 px-4 text-[#F4F7FA]">{item.profit}</td>
                        <td className="py-4 px-4 text-[#F4F7FA]">{item.margin}</td>
                        <td
                          className={`py-4 px-4 text-center font-bold ${
                            item.isUp ? "text-[#4FA77A]" : "text-[#C96A67]"
                          }`}
                        >
                          {item.change}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-xs text-[#748397]">
              Click or hover on a product row to inspect root causes and actionable recommendations.
            </div>
          </div>

          {/* Dynamic Detail Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-[8px] border border-[#203147] bg-[#101E30] p-6">
              <div className="flex items-center justify-between border-b border-[#203147] pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F4F7FA]">
                  {activeProduct.name}
                </span>
                <span className="text-xs font-medium text-[#748397]">
                  Margin: {activeProduct.margin}
                </span>
              </div>

              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <div className="text-xs font-bold uppercase text-[#748397] tracking-wide">
                    WHY IT MATTERS
                  </div>
                  <p className="mt-1 text-[#A9B5C3] leading-relaxed">
                    {activeProduct.whyItMatters}
                  </p>
                </div>

                <div className="border-t border-[#203147] pt-4">
                  <div className="text-xs font-bold uppercase text-[#748397] tracking-wide">
                    XOLT ACTION
                  </div>
                  <p className="mt-1 font-medium text-[#F4F7FA] leading-relaxed">
                    {activeProduct.action}
                  </p>
                </div>

                <div className="border-t border-[#203147] pt-4">
                  <div className="text-xs font-bold uppercase text-[#748397] tracking-wide">
                    POTENTIAL IMPACT
                  </div>
                  <p className="mt-1 text-base font-bold text-[#4FA77A]">
                    {activeProduct.impact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
