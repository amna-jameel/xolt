export function formatMoney(
  value: number,
  locale: string,
  currency = "USD",
) {
  const tag = locale === "ar" ? "ar" : locale === "es" ? "es-ES" : "en-US";
  return new Intl.NumberFormat(tag, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPercent(value: number, locale: string) {
  const tag = locale === "ar" ? "ar" : locale === "es" ? "es-ES" : "en-US";
  return new Intl.NumberFormat(tag, {
    style: "percent",
    maximumFractionDigits: 1,
  }).format(value / 100);
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
