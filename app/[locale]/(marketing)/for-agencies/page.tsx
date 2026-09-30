import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CTASection } from "@/components/marketing/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Link } from "@/i18n/navigation";
import { authRoutes } from "@/lib/routes";
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
    title: t("agenciesTitle"),
    description: t("agenciesDescription"),
    path: "/for-agencies",
  });
}

export default async function ForAgenciesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("agencies");
  const common = await getTranslations("common");

  const cards = ["workspaces", "packs", "whitelabel"] as const;

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("body")}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card}
                className="rounded-xl border border-border bg-background p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {card}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {t(`points.${card}`)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href={authRoutes.signUp}
              className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-white hover:bg-primary-dark"
            >
              {common("startTrial")}
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
