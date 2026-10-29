import type { Format, FormatLabels } from "./types.js";

const formatLabels: FormatLabels = {
  vinyl: "Vinyl record",
  cd: "Compact disc",
  digital: "Digital download",
};

export function describeFormat(format: Format): string {
  return formatLabels[format];
}

export interface Media {
  id: number;
  title: string;
}

export interface Track extends Media {
  artist: string;
  liked: boolean;
}

export interface FeaturedTrack extends Track {
  curatedBy: string;
  readonly addedDate: string;
}

export function formatId(id: number): string {
  return `TRK-${id}`;
}
