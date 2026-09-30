import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CTASection } from "@/components/marketing/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { subProcessors } from "@/lib/sub-processors";
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
    title: t("subTitle"),
    description: t("subDescription"),
    path: "/sub-processors",
  });
}

export default async function SubProcessorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("subProcessorsPage");

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("intro")}
          />

          <div className="mt-10 overflow-x-auto rounded-xl border border-border bg-background">
            <table className="w-full text-start text-sm">
              <thead className="border-b border-border bg-slate-50 text-xs font-semibold uppercase tracking-wider text-muted">
                <tr>
                  <th scope="col" className="px-6 py-4 text-start">
                    {t("name")}
                  </th>
                  <th scope="col" className="px-6 py-4 text-start">
                    {t("purpose")}
                  </th>
                  <th scope="col" className="px-6 py-4 text-start">
                    {t("services")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {subProcessors.map((vendor) => (
                  <tr key={vendor.id} className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-medium text-ink">
                      {vendor.name}
                    </td>
                    <td className="px-6 py-4 text-muted">
                      {t(`purposes.${vendor.purposeKey}`)}
                    </td>
                    <td className="px-6 py-4 text-muted">{vendor.services}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
