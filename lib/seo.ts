import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getSiteUrl, siteConfig } from "@/lib/site";

type Pathname = Parameters<typeof getPathname>[0]["href"];

export function localePath(locale: Locale, href: Pathname) {
  return getPathname({ locale, href });
}

export function pageAlternates(locale: Locale, href: Pathname = "/") {
  const site = getSiteUrl();
  const languages: Record<string, string> = {};

  for (const loc of routing.locales) {
    languages[loc] = `${site}${localePath(loc, href)}`;
  }
  languages["x-default"] = `${site}${localePath(routing.defaultLocale, href)}`;

  return {
    canonical: `${site}${localePath(locale, href)}`,
    languages,
  };
}

export function buildMetadata({
  locale,
  title,
  description,
  path = "/",
  index = true,
}: {
  locale: Locale;
  title: string;
  description: string;
  path?: Pathname;
  index?: boolean;
}): Metadata {
  const site = getSiteUrl();
  const url = `${site}${localePath(locale, path)}`;

  return {
    metadataBase: new URL(site),
    title,
    description,
    alternates: pageAlternates(locale, path),
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url,
      locale,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
