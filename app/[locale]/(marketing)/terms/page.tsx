import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";
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
    title: t("termsTitle"),
    description: t("termsDescription"),
    path: "/terms",
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("legal");
  const meta = await getTranslations("meta");

  const sections = [
    { key: "entity", label: t("sections.entity") },
    { key: "aup", label: t("sections.aup") },
    { key: "amazon", label: t("sections.amazon") },
    { key: "ai", label: t("sections.ai") },
    { key: "liability", label: t("sections.liability") },
    { key: "law", label: t("sections.law") },
  ];

  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Legal"
          title={meta("termsTitle")}
          subtitle={t("termsIntro")}
        />

        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <strong>{t("todo")}</strong> — {t("termsBanner", { company: siteConfig.company, city: siteConfig.location.city, country: siteConfig.location.country })}
        </div>

        <div className="mt-10 space-y-6">
          {sections.map((section) => (
            <div
              key={section.key}
              className="rounded-xl border border-border bg-background p-6"
            >
              <h2 className="text-base font-semibold text-ink">{section.label}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                {t("termsSectionNotice", { todo: t("todo"), topic: section.label })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
