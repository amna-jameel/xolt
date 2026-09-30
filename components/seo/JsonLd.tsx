import { getSiteUrl, siteConfig } from "@/lib/site";
import { plans } from "@/lib/pricing";

export function JsonLd() {
  const site = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.company,
        legalName: siteConfig.company,
        url: site,
        email: siteConfig.emails.support,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressCountry: "AE",
        },
        brand: {
          "@type": "Brand",
          name: siteConfig.name,
        },
      },
      {
        "@type": "SoftwareApplication",
        name: siteConfig.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: site,
        description:
          "Monthly SKU profit and action reporting for Amazon sellers and agencies.",
        offers: plans.map((plan) => ({
          "@type": "Offer",
          price: plan.usd,
          priceCurrency: "USD",
          name: plan.id,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
