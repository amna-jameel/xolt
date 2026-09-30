# XOLT — Amazon Seller Analytics Platform
## Marketing Website Technical & Developer Documentation

---

### Executive Summary
This document provides complete developer documentation, architecture overview, and brief compliance verification for the **XOLT Marketing Website**, built as part of the **Authect 2027 Recruitment Challenge**.

The project is integrated directly inside the existing product monorepo under `apps/web` using the **Next.js App Router**, **TailwindCSS**, **TypeScript**, and **next-intl**.

---

### 1. Technology Stack & Architecture

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | Next.js 15+ (App Router) | Monorepo structure inside `apps/web` |
| **Language** | TypeScript (Strict) | 0 compilation errors (`npx tsc --noEmit`) |
| **Styling** | Tailwind CSS | Custom dark-mode tokens & CSS Logical Properties for RTL |
| **i18n & Localization** | `next-intl` | English (`en`), Spanish (`es`), Arabic (`ar`) with RTL |
| **Deployment Target** | Vercel (`fra1` region) | Unified deployment alongside product dashboard |
| **SEO & OpenGraph** | Next Metadata API | Indexable routes, `sitemap.ts`, `robots.ts`, JSON-LD |

---

### 2. File & Directory Structure

```text
apps/web/
├── app/
│   ├── [locale]/
│   │   ├── (marketing)/           # Marketing Route Group
│   │   │   ├── layout.tsx         # Marketing Shell (Nav, Footer, CookieBanner)
│   │   │   ├── page.tsx           # Home Landing Page
│   │   │   ├── features/          # /features page
│   │   │   ├── how-it-works/      # /how-it-works page
│   │   │   ├── pricing/           # /pricing page
│   │   │   ├── security/          # /security page
│   │   │   ├── sub-processors/    # /sub-processors page
│   │   │   ├── privacy/           # /privacy page
│   │   │   ├── terms/             # /terms page
│   │   │   ├── contact/           # /contact page
│   │   │   ├── for-agencies/      # /for-agencies page
│   │   │   ├── markets/           # /markets page
│   │   │   ├── faq/               # /faq page
│   │   │   └── cookies/           # /cookies page
│   │   └── layout.tsx             # Root Locale Layout (i18n provider)
│   ├── globals.css                # Design system & CSS logical properties
│   ├── robots.ts                  # Search engine crawlers policy
│   └── sitemap.ts                 # Dynamic XML Sitemap generator
├── components/
│   ├── marketing/                 # Modular Marketing Components
│   │   ├── Navbar.tsx             # Sticky Nav with Mobile Drawer (<1024px)
│   │   ├── Hero.tsx               # Above-the-fold Value Pitch & Interactive Demo
│   │   ├── TrustStrip.tsx         # Security & SP-API Trust signals
│   │   ├── Problem.tsx            # "Data without Analyst" interactive problem card
│   │   ├── ValueProposition.tsx   # Executive monthly review report
│   │   ├── ProductPreview.tsx     # SKU-level economics & contribution calculator
│   │   ├── HowItWorks.tsx         # 6-Step workflow + honest v1 limits banner
│   │   ├── Features.tsx           # Deep dive sections (Economics, Action Plan, Markets)
│   │   ├── ComparisonSection.tsx  # Multi-currency & multi-language interactive report
│   │   ├── SecuritySection.tsx    # Technical security & compliance summary
│   │   ├── RoiCalculator.tsx      # Interactive Profit Leak Estimator
│   │   ├── Pricing.tsx            # Starter, Pro & Agency hypothesis plans
│   │   ├── FAQ.tsx                # Interactive accordion FAQ
│   │   ├── CTASection.tsx         # Primary sign-up conversion banner
│   │   ├── Footer.tsx             # Legal, Product & Company links
│   │   ├── LanguageSwitcher.tsx   # Locale switcher (EN, ES, AR)
│   │   └── CookieBanner.tsx       # GDPR cookie consent banner
│   └── seo/
│       └── JsonLd.tsx             # Structured Data Schema (Organization & SoftwareApp)
└── lib/
    ├── routes.ts                  # Centralized application route definitions
    ├── site.ts                    # Global site metadata, company address & emails
    └── sub-processors.ts          # Living list of data sub-processors
```

---

### 3. Brief Compliance Matrix

| Brief Requirement | Implementation Status | Location / Details |
| :--- | :---: | :--- |
| **One-Line Pitch** | ✅ Complete | "See real profit per SKU. Know what to change next." |
| **Prescriptive Action Plan** | ✅ Complete | Showcases monetary impact per item (`+$640/mo potential`) |
| **i18n & RTL Support** | ✅ Complete | English (`en`), Spanish (`es`), Arabic (`ar`) with CSS Logical Properties |
| **Multi-Currency** | ✅ Complete | Interactive switcher for USD, AED, SAR, EUR |
| **Official SP-API Focus** | ✅ Complete | Explicitly states read-only SP-API, no scraping, no buyer PII |
| **Page Map Routes** | ✅ Complete | All 14 primary & recommended routes implemented |
| **Pricing Tiers** | ✅ Complete | Starter ($29), Pro ($59), Agency ($199) with 14-day free trial note |
| **Security & Compliance** | ✅ Complete | Public `/security` page & living vendor list on `/sub-processors` |
| **Company Details** | ✅ Complete | `Authect, Dubai, UAE` with `support@`, `privacy@`, `security@`, `billing@` |
| **Footer Links** | ✅ Complete | Footer links to Privacy, Terms, Security, Sub-processors, Contact |
| **Responsiveness** | ✅ Complete | Tested down to 320px × 498px viewports with 0 horizontal overflow |
| **UX & Micro-interactions** | ✅ Complete | Cursor pointers on all interactive buttons/sliders |

---

### 4. Setup & Running Locally

1. **Install Dependencies**:
   ```bash
   cd apps/web
   pnpm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Verify Type Correctness**:
   ```bash
   npx tsc --noEmit
   ```

---

### 5. Summary of Candidate Submission
- **Candidate Name**: Amna Jameel
- **Challenge Round**: Authect 2027 Recruitment Challenge
- **Project Name**: XOLT Marketing Website (`apps/web`)
- **Status**: Ready for Final Submission & Review
