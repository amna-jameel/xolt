import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SecuritySection } from "@/components/marketing/SecuritySection";
import { CTASection } from "@/components/marketing/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Link } from "@/i18n/navigation";
import { marketingRoutes } from "@/lib/routes";
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
    title: t("securityTitle"),
    description: t("securityDescription"),
    path: "/security",
  });
}

export default async function SecurityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("securityPage");

  const sections = [
    { title: t("apiTitle"), body: t("apiBody") },
    { title: t("piiTitle"), body: t("piiBody") },
    { title: t("kmsTitle"), body: t("kmsBody") },
    { title: t("rlsTitle"), body: t("rlsBody") },
    { title: t("aiTitle"), body: t("aiBody") },
  ];

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("intro")}
          />

          <div className="mt-12 space-y-8">
            {sections.map((sec, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h2 className="text-lg font-semibold text-ink">{sec.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{sec.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-border bg-slate-50 p-6">
            <h3 className="text-base font-semibold text-ink">{t("contact")}</h3>
            <p className="mt-2 text-sm text-muted">
              <a
                href={`mailto:${siteConfig.emails.security}`}
                className="font-medium text-primary hover:text-primary-dark"
              >
                {siteConfig.emails.security}
              </a>
            </p>
            <p className="mt-4 text-xs text-muted">
              {t("links")}{" "}
              <Link
                href={marketingRoutes.subProcessors}
                className="underline hover:text-ink"
              >
                Sub-processors
              </Link>
              {" · "}
              <Link
                href={marketingRoutes.privacy}
                className="underline hover:text-ink"
              >
                Privacy
              </Link>
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
