import type { Format, FormatLabels } from "./types.js";

const formatLabels: FormatLabels = {
  vinyl: "Vinyl record",
  cd: "Compact disc",
  digital: "Digital download",
};

export function describeFormat(format: Format): string {
  return formatLabels[format];
}
