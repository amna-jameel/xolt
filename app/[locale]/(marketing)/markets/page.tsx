import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CTASection } from "@/components/marketing/CTASection";
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
    title: t("marketsTitle"),
    description: t("marketsDescription"),
    path: "/markets",
  });
}

export default async function MarketsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("markets");

  const regions = [
    { key: "uae", text: t("uae") },
    { key: "ksa", text: t("ksa") },
    { key: "egypt", text: t("egypt") },
    { key: "spain", text: t("spain") },
    { key: "us", text: t("us") },
  ];

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
          />

          <div className="mt-12 space-y-4">
            {regions.map((region) => (
              <div
                key={region.key}
                className="rounded-xl border border-border bg-background p-6"
              >
                <p className="text-base font-semibold text-ink">{region.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
