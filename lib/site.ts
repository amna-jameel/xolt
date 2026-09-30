export const siteConfig = {
  name: "XOLT",
  product: "XOLT",
  company: "Authect",
  location: {
    city: "Dubai",
    country: "UAE",
  },
  emails: {
    support: "support@authect.com",
    privacy: "privacy@authect.com",
    security: "security@authect.com",
    billing: "billing@authect.com",
  },
  defaultLocale: "en",
  locales: ["en", "es", "ar"] as const,
  currencies: ["AED", "SAR", "EGP", "EUR", "GBP", "USD"] as const,
  languages: ["English", "Español", "العربية"] as const,
} as const;

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://xolt.authect.com";
}
