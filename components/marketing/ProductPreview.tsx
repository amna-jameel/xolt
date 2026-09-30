"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

interface SkuEconomics {
  sku: string;
  name: string;
  price: string;
  fees: string;
  advertising: string;
  cost: string;
  shipping: string;
  contribution: string;
  margin: string;
  recommendation: string;
  impact: string;
}

export function ProductPreview() {
  const t = useTranslations("preview");
  const common = useTranslations("common");

  const skusData: Record<string, SkuEconomics> = {
    "COFFEE-SET-01": {
      sku: "COFFEE-SET-01",
      name: "PREMIUM COFFEE SET",
      price: "$49.99",
      fees: "-$8.20",
      advertising: "-$6.40",
      cost: "-$14.00",
      shipping: "-$2.10",
      contribution: "$19.29",
      margin: "38.6%",
      recommendation: "PPC efficiency has declined over the last 30 days. Consider reviewing spend before increasing the campaign budget.",
      impact: "+$640 / month",
    },
    "STORAGE-BOX-02": {
      sku: "STORAGE-BOX-02",
      name: "MODULAR STORAGE BOX",
      price: "$29.99",
      fees: "-$4.80",
      advertising: "-$3.10",
      cost: "-$8.50",
      shipping: "-$1.60",
      contribution: "$11.99",
      margin: "40.0%",
      recommendation: "Inventory velocity is high with low stock risk. Increase supplier reorder quantity by 25%.",
      impact: "+$820 / month",
    },
    "TRAVEL-MUG-03": {
      sku: "TRAVEL-MUG-03",
      name: "INSULATED TRAVEL MUG",
      price: "$19.99",
      fees: "-$3.50",
      advertising: "-$4.80",
      cost: "-$6.20",
      shipping: "-$1.20",
      contribution: "$4.29",
      margin: "21.4%",
      recommendation: "Advertising cost per unit is eating 24% of retail price. Audit exact match keywords immediately.",
      impact: "+$510 / month",
    },
  };

  const [activeSkuKey, setActiveSkuKey] = useState<string>("COFFEE-SET-01");
  const sku = skusData[activeSkuKey];

  return (
    <section className="bg-[#0B1728] border-b border-[#203147] py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[#F4F7FA] sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        {/* SKU Switcher Buttons */}
        <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
          {Object.keys(skusData).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveSkuKey(key)}
              className={`rounded-[6px] border px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold transition-colors ${
                activeSkuKey === key
                  ? "border-[#4F8CC9] bg-[#4F8CC9] text-[#F4F7FA]"
                  : "border-[#203147] bg-[#101E30] text-[#A9B5C3] hover:bg-[#14253A]"
              }`}
            >
              {skusData[key].name} ({skusData[key].sku})
            </button>
          ))}
        </div>

        {/* Product Economics Interface */}
        <div className="mt-6 rounded-[8px] border border-[#203147] bg-[#101E30] p-3 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#203147] pb-3 sm:pb-4">
            <div>
              <div className="text-[10px] sm:text-xs font-bold text-[#748397]">PRODUCT SKULATION</div>
              <div className="text-base sm:text-xl font-bold text-[#F4F7FA]">{sku.name}</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] sm:text-xs font-bold text-[#748397]">CONTRIBUTION MARGIN</div>
              <div className="text-lg sm:text-2xl font-extrabold text-[#F4F7FA]">{sku.margin}</div>
            </div>
          </div>

          {/* Breakdown Grid */}
          <div className="mt-4 sm:mt-6 grid gap-2 sm:gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 text-xs sm:text-sm">
            <div className="rounded border border-[#203147] bg-[#07111F] p-3">
              <div className="text-xs text-[#748397]">Selling price</div>
              <div className="mt-1 font-bold text-[#F4F7FA]">{sku.price}</div>
            </div>
            <div className="rounded border border-[#203147] bg-[#07111F] p-3">
              <div className="text-xs text-[#748397]">Amazon fees</div>
              <div className="mt-1 font-bold text-[#C96A67]">{sku.fees}</div>
            </div>
            <div className="rounded border border-[#203147] bg-[#07111F] p-3">
              <div className="text-xs text-[#748397]">Advertising</div>
              <div className="mt-1 font-bold text-[#C96A67]">{sku.advertising}</div>
            </div>
            <div className="rounded border border-[#203147] bg-[#07111F] p-3">
              <div className="text-xs text-[#748397]">Product cost</div>
              <div className="mt-1 font-bold text-[#C96A67]">{sku.cost}</div>
            </div>
            <div className="rounded border border-[#203147] bg-[#07111F] p-3">
              <div className="text-xs text-[#748397]">Shipping</div>
              <div className="mt-1 font-bold text-[#C96A67]">{sku.shipping}</div>
            </div>
            <div className="rounded border border-[#4F8CC9] bg-[#14253A] p-3">
              <div className="text-xs font-bold text-[#F4F7FA]">Net contribution</div>
              <div className="mt-1 font-bold text-[#F4F7FA]">{sku.contribution}</div>
            </div>
          </div>

          {/* Recommendation Footer */}
          <div className="mt-6 rounded border border-[#203147] bg-[#07111F] p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-wider text-[#F4F7FA]">
                XOLT RECOMMENDATION
              </div>
              <div className="text-xs font-bold text-[#4FA77A]">
                Estimated impact: {sku.impact}
              </div>
            </div>
            <p className="mt-2 text-sm text-[#A9B5C3]">
              {sku.recommendation}
            </p>
          </div>
        </div>

        <div className="mt-3 text-xs text-[#748397]">
          Demonstration data only. Not real Amazon account figures.
        </div>
      </div>
    </section>
  );
}
