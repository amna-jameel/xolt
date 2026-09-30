export type InventoryStatus = "healthy" | "overstock" | "stockout-risk";

export type SkuRow = {
  sku: string;
  title: string;
  marketplace: string;
  revenue: number;
  fees: number;
  cogs: number;
  profit: number;
  margin: number;
  inventory: number;
  daysOfCover: number;
  inventoryStatus: InventoryStatus;
  action: string;
  impact: number;
};

export const demoDisclaimer =
  "Demo figures for illustration only. Not real Amazon account data.";

export const skuRows: SkuRow[] = [
  {
    sku: "AMZ-1042",
    title: "Stainless bottle 750ml",
    marketplace: "Amazon.ae",
    revenue: 4820,
    fees: 812,
    cogs: 1920,
    profit: 2088,
    margin: 43.3,
    inventory: 124,
    daysOfCover: 48,
    inventoryStatus: "overstock",
    action: "Reduce reorder quantity",
    impact: 420,
  },
  {
    sku: "AMZ-2218",
    title: "Desk lamp — warm white",
    marketplace: "Amazon.es",
    revenue: 3150,
    fees: 640,
    cogs: 980,
    profit: 1530,
    margin: 48.6,
    inventory: 18,
    daysOfCover: 9,
    inventoryStatus: "stockout-risk",
    action: "Reorder 60 units this week",
    impact: 610,
  },
  {
    sku: "AMZ-0871",
    title: "Silicone kitchen set",
    marketplace: "Amazon.sa",
    revenue: 2640,
    fees: 528,
    cogs: 990,
    profit: 1122,
    margin: 42.5,
    inventory: 86,
    daysOfCover: 31,
    inventoryStatus: "healthy",
    action: "Hold price, keep ads paused (ads later)",
    impact: 90,
  },
  {
    sku: "AMZ-3304",
    title: "Cotton bath towels 4-pack",
    marketplace: "Amazon.com",
    revenue: 5410,
    fees: 1190,
    cogs: 2160,
    profit: 2060,
    margin: 38.1,
    inventory: 42,
    daysOfCover: 16,
    inventoryStatus: "healthy",
    action: "Raise landed COGS accuracy",
    impact: 180,
  },
  {
    sku: "AMZ-5519",
    title: "USB-C hub 7-in-1",
    marketplace: "Amazon.eg",
    revenue: 1890,
    fees: 410,
    cogs: 870,
    profit: 610,
    margin: 32.3,
    inventory: 210,
    daysOfCover: 72,
    inventoryStatus: "overstock",
    action: "Pause inbound, run clearance",
    impact: 350,
  },
];

export const monthlyPlan = {
  period: "April 2026",
  skusReviewed: skuRows.length,
  netImpact: skuRows.reduce((sum, row) => sum + row.impact, 0),
};
