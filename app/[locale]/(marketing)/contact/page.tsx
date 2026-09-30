import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/marketing/ContactForm";
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
    title: t("contactTitle"),
    description: t("contactDescription"),
    path: "/contact",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contactPage");

  const emails = [
    { label: t("support"), email: siteConfig.emails.support },
    { label: t("privacy"), email: siteConfig.emails.privacy },
    { label: t("security"), email: siteConfig.emails.security },
    { label: t("billing"), email: siteConfig.emails.billing },
  ];

  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("purpose")}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-ink">{t("title")}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              {siteConfig.company} is registered in {siteConfig.location.city},{" "}
              {siteConfig.location.country}. We maintain dedicated addresses for each
              operational and compliance function.
            </p>

            <div className="mt-8 space-y-4">
              {emails.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-border bg-background p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {item.label}
                  </p>
                  <a
                    href={`mailto:${item.email}`}
                    className="mt-1 block text-sm font-medium text-primary hover:text-primary-dark break-all"
                  >
                    {item.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink">{t("formTitle")}</h3>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
