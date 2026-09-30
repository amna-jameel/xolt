import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { CTASection } from "@/components/marketing/CTASection";
import { FAQ } from "@/components/marketing/FAQ";
import { ComparisonSection } from "@/components/marketing/ComparisonSection";
import { Features } from "@/components/marketing/Features";
import { Hero } from "@/components/marketing/Hero";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Pricing } from "@/components/marketing/Pricing";
import { Problem } from "@/components/marketing/Problem";
import { ProductPreview } from "@/components/marketing/ProductPreview";
import { SecuritySection } from "@/components/marketing/SecuritySection";
import { ValueProposition } from "@/components/marketing/ValueProposition";

export const metadata: Metadata = {
  title: "XOLT — Amazon Seller Analytics Platform",
  description:
    "XOLT turns Amazon seller data into a clear monthly picture of your business — showing which products are performing, where margin is being lost, and what deserves attention next.",
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-[#07111F] text-[#F4F7FA] font-sans antialiased">
      <Hero />
      <Problem />
      <ValueProposition />
      <ProductPreview />
      <HowItWorks />
      <Features />
      <ComparisonSection />
      <SecuritySection />
      <Pricing />
      <FAQ />
      <CTASection />
    </main>
  );
}
