import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { marketingRoutes } from "@/lib/routes";

export async function TrustStrip() {
  const t = await getTranslations("trust");

  const items = [
    t("spApi"),
    t("noScraping"),
    t("noPii"),
    t("languages"),
    t("currencies"),
  ];

  return (
    <section className="border-b border-[#203147] bg-[#0A1628]">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-4 sm:gap-x-8 gap-y-2 px-3 py-4 sm:px-6 lg:px-8">
        {items.map((item) => (
          <p key={item} className="text-xs sm:text-sm text-[#A9B5C3]">
            {item}
          </p>
        ))}
        <Link
          href={marketingRoutes.security}
          className="text-xs sm:text-sm font-medium text-[#4F8CC9] hover:underline"
        >
          {t("security")}
        </Link>
      </div>
    </section>
  );
}
