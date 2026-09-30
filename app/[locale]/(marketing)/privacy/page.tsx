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
    title: t("privacyTitle"),
    description: t("privacyDescription"),
    path: "/privacy",
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("legal");
  const meta = await getTranslations("meta");

  const sections = [
    { key: "account", label: t("sections.account") },
    { key: "seller", label: t("sections.seller") },
    { key: "processors", label: t("sections.processors") },
    { key: "retention", label: t("sections.retention") },
    { key: "gdpr", label: t("sections.gdpr") },
    { key: "hosting", label: t("sections.hosting") },
    { key: "contact", label: t("sections.contact") },
  ];

  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Legal"
          title={meta("privacyTitle")}
          subtitle={t("privacyIntro")}
        />

        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <strong>{t("todo")}</strong> — {t("privacyBanner")}
        </div>

        <div className="mt-10 space-y-6">
          {sections.map((section) => (
            <div
              key={section.key}
              className="rounded-xl border border-border bg-background p-6"
            >
              <h2 className="text-base font-semibold text-ink">{section.label}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                {t("sectionNotice", { todo: t("todo"), topic: section.label })}
                {section.key === "contact" && (
                  <span className="block mt-2 font-medium text-primary">
                    <a href={`mailto:${siteConfig.emails.privacy}`}>
                      {siteConfig.emails.privacy}
                    </a>
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
