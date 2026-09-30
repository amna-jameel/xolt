import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CTASection } from "@/components/marketing/CTASection";
import { HowItWorks } from "@/components/marketing/HowItWorks";
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
    title: t("howTitle"),
    description: t("howDescription"),
    path: "/how-it-works",
  });
}

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <HowItWorks />
      <CTASection />
    </>
  );
}
