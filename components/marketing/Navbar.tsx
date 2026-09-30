"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { authRoutes, marketingRoutes } from "@/lib/routes";
import { LanguageSwitcher } from "@/components/marketing/LanguageSwitcher";

export function Navbar() {
  const t = useTranslations("nav");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open & handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#203147] bg-[#07111F]/90 backdrop-blur-md shadow-lg">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-2.5 sm:px-6 lg:px-8">
        {/* Left / Start: Brand Logo */}
        <div className="flex items-center gap-6 lg:gap-8">
          <Link
            href={marketingRoutes.home}
            className="text-lg sm:text-xl font-bold tracking-tight text-[#F4F7FA] focus-visible:ring-2 focus-visible:ring-[#4F8CC9] focus-visible:outline-none rounded-md px-1"
          >
            XOLT
          </Link>

          {/* Center Navigation (Desktop only: 1024px+) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#A9B5C3]">
            <Link
              href={marketingRoutes.home}
              className="hover:text-[#4F8CC9] transition-colors focus-visible:ring-2 focus-visible:ring-[#4F8CC9] focus-visible:outline-none rounded px-1"
            >
              {t("home")}
            </Link>
            <Link
              href={marketingRoutes.howItWorks}
              className="hover:text-[#4F8CC9] transition-colors focus-visible:ring-2 focus-visible:ring-[#4F8CC9] focus-visible:outline-none rounded px-1"
            >
              {t("howItWorks")}
            </Link>
            <Link
              href={marketingRoutes.features}
              className="hover:text-[#4F8CC9] transition-colors focus-visible:ring-2 focus-visible:ring-[#4F8CC9] focus-visible:outline-none rounded px-1"
            >
              {t("features")}
            </Link>
            <Link
              href={marketingRoutes.pricing}
              className="hover:text-[#4F8CC9] transition-colors focus-visible:ring-2 focus-visible:ring-[#4F8CC9] focus-visible:outline-none rounded px-1"
            >
              {t("pricing")}
            </Link>
            <Link
              href={marketingRoutes.security}
              className="hover:text-[#4F8CC9] transition-colors focus-visible:ring-2 focus-visible:ring-[#4F8CC9] focus-visible:outline-none rounded px-1"
            >
              {t("security")}
            </Link>
          </nav>
        </div>

        {/* Right / End CTA (Desktop only: 1024px+) */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher variant="dark" />
          <Link
            href={authRoutes.signIn}
            className="text-sm font-medium text-[#F4F7FA] hover:text-[#4F8CC9] transition-colors focus-visible:ring-2 focus-visible:ring-[#4F8CC9] focus-visible:outline-none rounded px-2 py-1"
          >
            {t("signIn")}
          </Link>
          <Link
            href={authRoutes.signUp}
            className="inline-flex h-9 items-center justify-center rounded-[6px] bg-[#4F8CC9] px-4 text-sm font-semibold text-[#F4F7FA] transition-colors hover:bg-[#79A9D6] focus-visible:ring-2 focus-visible:ring-[#79A9D6] focus-visible:outline-none"
          >
            {t("startTrial")}
          </Link>
        </div>

        {/* Mobile & Tablet header controls (<1024px) */}
        <div className="flex lg:hidden items-center gap-3">
          <LanguageSwitcher variant="dark" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#F4F7FA] p-2 focus-visible:ring-2 focus-visible:ring-[#4F8CC9] focus-visible:outline-none rounded-md"
            aria-label={mobileMenuOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu Dropdown Overlay (<1024px) */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full border-b border-[#203147] bg-[#07111F] px-4 sm:px-6 pt-3 pb-6 space-y-2.5 animate-rise shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <Link
            href={marketingRoutes.home}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#F4F7FA] py-2 border-b border-[#203147]/50"
          >
            {t("home")}
          </Link>
          <Link
            href={marketingRoutes.howItWorks}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#F4F7FA] py-2 border-b border-[#203147]/50"
          >
            {t("howItWorks")}
          </Link>
          <Link
            href={marketingRoutes.features}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#F4F7FA] py-2 border-b border-[#203147]/50"
          >
            {t("features")}
          </Link>
          <Link
            href={marketingRoutes.pricing}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#F4F7FA] py-2 border-b border-[#203147]/50"
          >
            {t("pricing")}
          </Link>
          <Link
            href={marketingRoutes.security}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#F4F7FA] py-2 border-b border-[#203147]/50"
          >
            {t("security")}
          </Link>
          <div className="pt-2 flex flex-row gap-2 sm:gap-3">
            <Link
              href={authRoutes.signIn}
              onClick={() => setMobileMenuOpen(false)}
              className="text-center flex-1 text-xs sm:text-sm font-medium text-[#F4F7FA] py-2.5 rounded-[6px] border border-[#203147] bg-[#101E30]"
            >
              {t("signIn")}
            </Link>
            <Link
              href={authRoutes.signUp}
              onClick={() => setMobileMenuOpen(false)}
              className="text-center flex-1 text-xs sm:text-sm font-semibold text-[#F4F7FA] bg-[#4F8CC9] py-2.5 rounded-[6px]"
            >
              {t("startTrial")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
