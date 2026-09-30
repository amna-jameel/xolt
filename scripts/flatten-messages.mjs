export function flattenMessages(tree, prefix = "") {
  const out = {};

  for (const [key, value] of Object.entries(tree)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      Object.assign(out, flattenMessages(value, path));
    } else {
      out[path] = value;
    }
  }

  return out;
}
