"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { marketingRoutes } from "@/lib/routes";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-[#07111F] border-t border-[#203147] py-8 sm:py-12 lg:py-16 text-sm text-[#F4F7FA]">
      <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-5">
          {/* Column 1: Brand */}
          <div className="md:col-span-2">
            <Link href={marketingRoutes.home} className="text-lg sm:text-xl font-bold tracking-tight text-[#F4F7FA]">
              XOLT
            </Link>
            <p className="mt-2 text-xs sm:text-sm text-[#A9B5C3] leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#748397]">{t("product")}</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href={marketingRoutes.features} className="text-[#A9B5C3] hover:text-[#F4F7FA] hover:underline">{nav("features")}</Link>
              </li>
              <li>
                <Link href={marketingRoutes.howItWorks} className="text-[#A9B5C3] hover:text-[#F4F7FA] hover:underline">{nav("howItWorks")}</Link>
              </li>
              <li>
                <Link href={marketingRoutes.pricing} className="text-[#A9B5C3] hover:text-[#F4F7FA] hover:underline">{nav("pricing")}</Link>
              </li>
              <li>
                <Link href={marketingRoutes.security} className="text-[#A9B5C3] hover:text-[#F4F7FA] hover:underline">{nav("security")}</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#748397]">{t("company")}</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href={marketingRoutes.contact} className="text-[#A9B5C3] hover:text-[#F4F7FA] hover:underline">{t("contact")}</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#748397]">{t("legal")}</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href={marketingRoutes.privacy} className="text-[#A9B5C3] hover:text-[#F4F7FA] hover:underline">{t("privacy")}</Link>
              </li>
              <li>
                <Link href={marketingRoutes.terms} className="text-[#A9B5C3] hover:text-[#F4F7FA] hover:underline">{t("terms")}</Link>
              </li>
              <li>
                <Link href={marketingRoutes.subProcessors} className="text-[#A9B5C3] hover:text-[#F4F7FA] hover:underline">{t("subProcessors")}</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-[#203147] pt-6 text-xs text-[#748397]">
          {t("copyright", { year: 2026 })}
        </div>
      </div>
    </footer>
  );
}
