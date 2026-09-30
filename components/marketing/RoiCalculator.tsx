"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { formatMoney } from "@/lib/cn";

export function RoiCalculator() {
  const locale = useLocale();
  const [skus, setSkus] = useState<number>(15);
  const [monthlySales, setMonthlySales] = useState<number>(45000);
  const [currency, setCurrency] = useState<"USD" | "AED" | "SAR" | "EUR">("USD");

  // Estimation logic based on real Amazon seller fee leaks & stockout risks
  const estimatedProfitLeak = Math.round(monthlySales * 0.082);
  const hoursSavedPerMonth = Math.min(35, Math.round(skus * 1.4));

  const currencyRates = {
    USD: 1,
    AED: 3.67,
    SAR: 3.75,
    EUR: 0.92,
  };

  const convertedLeak = Math.round(estimatedProfitLeak * currencyRates[currency]);
  const convertedSales = Math.round(monthlySales * currencyRates[currency]);

  return (
    <section className="border-b border-border bg-gradient-to-b from-slate-900 to-slate-950 text-white py-10 sm:py-24">
      <div className="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-blue-400">
            ⚡ Interactive Profit Leak Estimator
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
            How much profit are you leaving on Amazon each month?
          </h2>
          <p className="mt-3 text-sm text-slate-400 sm:text-lg">
            Unreconciled Amazon fees, hidden overstock holding costs, and missed SKU pricing adjustments drag down net margins for MENA, EU, and US sellers.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/80 p-4 sm:p-10 backdrop-blur-xl lg:grid-cols-12 shadow-2xl">
          {/* Controls Column */}
          <div className="space-y-6 sm:space-y-8 lg:col-span-7">
            {/* Currency Selector */}
            <div>
              <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                Preferred Currency / Market
              </label>
              <div className="mt-2.5 flex flex-wrap gap-1.5 sm:gap-2">
                {(["USD", "AED", "SAR", "EUR"] as const).map((curr) => (
                  <button
                    key={curr}
                    type="button"
                    onClick={() => setCurrency(curr)}
                    className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                      currency === curr
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                        : "border border-slate-800 bg-slate-800/60 text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    {curr} {curr === "AED" ? "(UAE)" : curr === "SAR" ? "(KSA)" : curr === "EUR" ? "(EU)" : "(US/Global)"}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Sales Slider */}
            <div>
              <div className="flex items-center justify-between text-sm">
                <label className="font-semibold text-slate-200">Estimated Monthly Sales</label>
                <span className="font-mono text-base font-bold text-blue-400">
                  {formatMoney(convertedSales, locale, currency)}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="300000"
                step="5000"
                value={monthlySales}
                onChange={(e) => setMonthlySales(Number(e.target.value))}
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-blue-500"
              />
              <div className="mt-2 flex justify-between text-[11px] font-mono text-slate-500">
                <span>{formatMoney(10000 * currencyRates[currency], locale, currency)}</span>
                <span>{formatMoney(150000 * currencyRates[currency], locale, currency)}</span>
                <span>{formatMoney(300000 * currencyRates[currency], locale, currency)}+</span>
              </div>
            </div>

            {/* Active SKUs Slider */}
            <div>
              <div className="flex items-center justify-between text-sm">
                <label className="font-semibold text-slate-200">Active SKUs Managed</label>
                <span className="font-mono text-base font-bold text-blue-400">{skus} SKUs</span>
              </div>
              <input
                type="range"
                min="3"
                max="100"
                step="1"
                value={skus}
                onChange={(e) => setSkus(Number(e.target.value))}
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-blue-500"
              />
              <div className="mt-2 flex justify-between text-[11px] font-mono text-slate-500">
                <span>3 SKUs</span>
                <span>50 SKUs</span>
                <span>100+ SKUs</span>
              </div>
            </div>
          </div>

          {/* Results Impact Column */}
          <div className="flex flex-col justify-between rounded-2xl border border-blue-500/20 bg-gradient-to-b from-blue-950/40 to-slate-900 p-6 sm:p-8 lg:col-span-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Estimated Monthly Value Unlocked
              </span>
              <div className="mt-3 font-mono text-4xl font-extrabold text-emerald-400 sm:text-5xl">
                +{formatMoney(convertedLeak, locale, currency)}
                <span className="text-xs font-normal text-slate-400"> / mo</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Based on typical ~8.2% fee reconciliation and stockout avoidance across active Amazon Seller Central accounts.
              </p>

              <div className="mt-6 space-y-3 border-t border-slate-800/80 pt-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Analyst Hours Saved:</span>
                  <span className="font-mono font-bold text-white">~{hoursSavedPerMonth} hours/mo</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Action Plan Delivery:</span>
                  <span className="font-semibold text-blue-400">Sheets, Excel & CSV</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Native Languages:</span>
                  <span className="font-medium text-slate-200">Arabic (RTL), Spanish, English</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="/(auth)/sign-up"
                className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
              >
                Claim Your Free 14-Day Audit
              </a>
              <p className="mt-2 text-center text-[11px] text-slate-400">
                No credit card required · Connects via official Amazon SP-API OAuth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
