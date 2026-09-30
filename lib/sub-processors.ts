export type SubProcessor = {
  id: string;
  name: string;
  purposeKey: string;
  services: string;
};

export const subProcessors: SubProcessor[] = [
  {
    id: "vercel",
    name: "Vercel",
    purposeKey: "hosting",
    services: "Application hosting",
  },
  {
    id: "neon",
    name: "Neon",
    purposeKey: "database",
    services: "PostgreSQL database",
  },
  {
    id: "trigger",
    name: "Trigger.dev",
    purposeKey: "jobs",
    services: "Background jobs",
  },
  {
    id: "aws",
    name: "AWS",
    purposeKey: "aws",
    services: "KMS, S3",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    purposeKey: "ai",
    services: "AI action-plan generation",
  },
  {
    id: "google",
    name: "Google",
    purposeKey: "google",
    services: "Sheets integration and sign-in",
  },
  {
    id: "stripe",
    name: "Stripe",
    purposeKey: "payments",
    services: "Billing",
  },
  {
    id: "resend",
    name: "Resend",
    purposeKey: "email",
    services: "Transactional email",
  },
  {
    id: "sentry",
    name: "Sentry",
    purposeKey: "monitoring",
    services: "Error monitoring",
  },
];
