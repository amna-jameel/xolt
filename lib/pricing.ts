export type PlanId = "starter" | "pro" | "agency";

export type Plan = {
  id: PlanId;
  usd: number;
  aed: number;
  eur: number;
  highlighted?: boolean;
};

export const trialDays = 14;

export const plans: Plan[] = [
  {
    id: "starter",
    usd: 29,
    aed: 106,
    eur: 27,
  },
  {
    id: "pro",
    usd: 59,
    aed: 217,
    eur: 54,
    highlighted: true,
  },
  {
    id: "agency",
    usd: 199,
    aed: 731,
    eur: 183,
  },
];

/** One Seller Central authorization in one region. */
export const amazonAccountDefinition =
  "An Amazon account is one Seller Central authorization in one region.";
