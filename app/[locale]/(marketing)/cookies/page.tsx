import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("cookiesTitle"),
    description: t("cookiesDescription"),
    path: "/cookies",
  });
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("legal");
  const meta = await getTranslations("meta");

  const sections = [
    { key: "essential", label: t("sections.essential") },
    { key: "analytics", label: t("sections.analytics") },
  ];

  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Legal"
          title={meta("cookiesTitle")}
          subtitle={t("cookiesIntro")}
        />

        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <strong>{t("todo")}</strong> — Only essential cookies (locale, cookie consent state) are set by default.
        </div>

        <div className="mt-10 space-y-6">
          {sections.map((section) => (
            <div
              key={section.key}
              className="rounded-xl border border-border bg-background p-6"
            >
              <h2 className="text-base font-semibold text-ink">{section.label}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                {t("todo")}: Policy documentation for {section.label.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
