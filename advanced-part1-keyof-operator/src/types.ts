export interface FormatLabels {
  vinyl: string;
  cd: string;
  digital: string;
}

export type Format = keyof FormatLabels;

export interface Track {
  id: number;
  title: string;
  artist: string;
  liked: boolean;
}
