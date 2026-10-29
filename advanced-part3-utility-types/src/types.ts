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

export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

export interface LibraryTrack extends Track {
  addedAt: Date;
  playCount: number;
}

export type TrackCreatePayload = Omit<
  LibraryTrack,
  "id" | "addedAt" | "playCount"
>;

export type TrackUpdatePayload = Partial<TrackCreatePayload>;

export type TrackPreview = Pick<LibraryTrack, "id" | "title" | "artist">;
