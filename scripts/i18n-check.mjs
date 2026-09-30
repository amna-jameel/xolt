import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { flattenMessages } from "./flatten-messages.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function load(locale) {
  return JSON.parse(readFileSync(join(root, "messages", `${locale}.json`), "utf8"));
}

function keysOf(tree) {
  return Object.keys(flattenMessages(tree)).sort();
}

const locales = ["en", "es", "ar"];
const base = keysOf(load("en"));
let failed = false;

for (const locale of locales) {
  const keys = keysOf(load(locale));
  const missing = base.filter((key) => !keys.includes(key));
  const extra = keys.filter((key) => !base.includes(key));

  if (missing.length || extra.length) {
    failed = true;
    console.error(`i18n:check failed for ${locale}`);
    if (missing.length) console.error("  missing:", missing.join(", "));
    if (extra.length) console.error("  extra:", extra.join(", "));
  }
}

if (failed) {
  process.exit(1);
}

console.log("i18n:check passed for en, es, ar");
