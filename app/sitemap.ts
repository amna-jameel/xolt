import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { routing } from "@/i18n/routing";
import { marketingRoutes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteUrl();
  const paths = Object.values(marketingRoutes);

  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    for (const locale of routing.locales) {
      const url = `${site}/${locale}${path === "/" ? "" : path}`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "/" ? 1.0 : 0.8,
      });
    }
  }

  return entries;
}
