"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

export function ComparisonSection() {
  const t = useTranslations("comparison");
  const [lang, setLang] = useState<"en" | "ar" | "es">("en");
  const [currency, setCurrency] = useState<"USD" | "AED" | "SAR" | "EUR">("USD");

  const isRtl = lang === "ar";

  const currencySymbols: Record<string, string> = {
    USD: "$",
    AED: "AED ",
    SAR: "SAR ",
    EUR: "€",
  };

  const currencyRates: Record<string, number> = {
    USD: 1,
    AED: 3.67,
    SAR: 3.75,
    EUR: 0.92,
  };

  const mult = currencyRates[currency];
  const sym = currencySymbols[currency];

  const formatPrice = (usd: number) => {
    const val = Math.round(usd * mult);
    return `${sym}${val.toLocaleString()}`;
  };

  return (
    <section className="bg-[#07111F] border-b border-[#203147] py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#4F8CC9]">
            {t("eyebrow")}
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#F4F7FA] sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#A9B5C3] sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* Controls */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-3 sm:gap-4 border-b border-[#203147] pb-4">
          {/* Language Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-[11px] sm:text-xs font-bold text-[#748397] uppercase">Language:</span>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-[6px] border px-3 py-1.5 text-xs font-semibold ${
                lang === "en" ? "border-[#4F8CC9] bg-[#4F8CC9] text-[#F4F7FA]" : "border-[#203147] bg-[#101E30] text-[#A9B5C3]"
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLang("ar")}
              className={`rounded-[6px] border px-3 py-1.5 text-xs font-semibold ${
                lang === "ar" ? "border-[#4F8CC9] bg-[#4F8CC9] text-[#F4F7FA]" : "border-[#203147] bg-[#101E30] text-[#A9B5C3]"
              }`}
            >
              العربية
            </button>
            <button
              type="button"
              onClick={() => setLang("es")}
              className={`rounded-[6px] border px-3 py-1.5 text-xs font-semibold ${
                lang === "es" ? "border-[#4F8CC9] bg-[#4F8CC9] text-[#F4F7FA]" : "border-[#203147] bg-[#101E30] text-[#A9B5C3]"
              }`}
            >
              Español
            </button>
          </div>

          {/* Currency Switcher */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#748397] uppercase">Currency:</span>
            {(["USD", "AED", "SAR", "EUR"] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={`rounded-[6px] border px-3 py-1.5 text-xs font-semibold ${
                  currency === c ? "border-[#4F8CC9] bg-[#4F8CC9] text-[#F4F7FA]" : "border-[#203147] bg-[#101E30] text-[#A9B5C3]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Localized Report Interface Mockup */}
        <div className="mt-6 rounded-[8px] border border-[#203147] bg-[#101E30] p-4 sm:p-6 shadow-sm" dir={isRtl ? "rtl" : "ltr"}>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#203147] pb-4">
            <div>
              <div className="text-xs font-bold text-[#748397]">
                {lang === "ar" ? "تقرير الأداء الشهري" : lang === "es" ? "Informe Mensual de Rendimiento" : "Monthly Performance Report"}
              </div>
              <div className="text-lg sm:text-xl font-bold text-[#F4F7FA]">
                {lang === "ar" ? "سبتمبر 2026 — سوق الشرق الأوسط والعالم" : lang === "es" ? "Septiembre 2026 — Global & MENA" : "September 2026 — Global & MENA"}
              </div>
            </div>
            <div className="text-right">
              <span className="rounded bg-[#07111F] border border-[#203147] px-3 py-1 text-xs font-bold text-[#F4F7FA]">
                {currency}
              </span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded border border-[#203147] bg-[#07111F] p-4">
              <div className="text-xs text-[#748397]">
                {lang === "ar" ? "إجمالي الإيرادات" : lang === "es" ? "Ingresos Totales" : "Total Revenue"}
              </div>
              <div className="mt-1 text-xl font-bold text-[#F4F7FA]">{formatPrice(184240)}</div>
            </div>
            <div className="rounded border border-[#203147] bg-[#07111F] p-4">
              <div className="text-xs text-[#748397]">
                {lang === "ar" ? "صافي الربح" : lang === "es" ? "Beneficio Neto" : "Net Profit"}
              </div>
              <div className="mt-1 text-xl font-bold text-[#F4F7FA]">{formatPrice(42680)}</div>
            </div>
            <div className="rounded border border-[#203147] bg-[#07111F] p-4">
              <div className="text-xs text-[#748397]">
                {lang === "ar" ? "هامش المساهمة" : lang === "es" ? "Margen de Contribución" : "Contribution Margin"}
              </div>
              <div className="mt-1 text-xl font-bold text-[#4FA77A]">23.2%</div>
            </div>
          </div>

          <div className="mt-6 rounded border border-[#203147] bg-[#07111F] p-4">
            <div className="text-xs font-bold uppercase text-[#F4F7FA]">
              {lang === "ar" ? "التوصية التنفيذية" : lang === "es" ? "Recomendación Ejecutiva" : "Executive Recommendation"}
            </div>
            <p className="mt-2 text-sm text-[#A9B5C3]">
              {lang === "ar"
                ? "قم بمراجعة إنفاق الإعلانات لمنتج طقم القهوة الفاخر لزيادة هامش الربح بمقدار " + formatPrice(640) + " شهرياً."
                : lang === "es"
                ? "Revise el gasto en publicidad para el Juego de Café para aumentar el margen en " + formatPrice(640) + "/mes."
                : "Review PPC advertising spend for Premium Coffee Set to increase net margin by " + formatPrice(640) + "/month."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
