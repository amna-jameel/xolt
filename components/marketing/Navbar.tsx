"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { authRoutes, marketingRoutes } from "@/lib/routes";
import { LanguageSwitcher } from "@/components/marketing/LanguageSwitcher";

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navItems = [
    { href: marketingRoutes.home, label: t("home"), key: "home", sectionId: "" },
    { href: marketingRoutes.howItWorks, label: t("howItWorks"), key: "howItWorks", sectionId: "how-it-works" },
    { href: marketingRoutes.features, label: t("features"), key: "features", sectionId: "features" },
    { href: marketingRoutes.pricing, label: t("pricing"), key: "pricing", sectionId: "pricing" },
    { href: marketingRoutes.security, label: t("security"), key: "security", sectionId: "security" },
  ];

  // Route & Section scroll tracking logic
  useEffect(() => {
    // If not home page, lock active section to current route
    if (pathname !== "/" && pathname !== "") {
      const matched = navItems.find(
        (item) => item.href !== "/" && (pathname === item.href || pathname.startsWith(item.href))
      );
      if (matched) {
        setActiveSection(matched.key);
      } else {
        setActiveSection("");
      }
      return;
    }

    // On home page, detect visible section on scroll
    const sectionIds = navItems.filter((i) => i.sectionId).map((i) => ({ key: i.key, id: i.sectionId }));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // offset for sticky header
      let currentSection = "home";

      for (const section of sectionIds) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section.key;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

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
            {navItems.map((item) => {
              const isActive = activeSection === item.key;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setActiveSection(item.key)}
                  className={`transition-colors focus-visible:ring-2 focus-visible:ring-[#4F8CC9] focus-visible:outline-none rounded px-1 ${
                    isActive
                      ? "text-[#F4F7FA] underline decoration-[#4F8CC9] decoration-2 underline-offset-8"
                      : "hover:text-[#4F8CC9]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
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
          {navItems.map((item) => {
            const isActive = activeSection === item.key;
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.key);
                  setMobileMenuOpen(false);
                }}
                className={`block text-base font-medium py-2 border-b border-[#203147]/50 ${
                  isActive
                    ? "text-[#F4F7FA] underline decoration-[#4F8CC9] decoration-2 underline-offset-4"
                    : "text-[#F4F7FA]/80 hover:text-[#F4F7FA]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
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

