import { findById, ok } from "./api.js";
import { addTrack, toPreview, updateTrack } from "./library.js";
import { describeFormat, type FeaturedTrack } from "./track.js";
import type { Format, Track } from "./types.js";

describeFormat("vinyl");

const columns: (keyof Track)[] = ["title", "artist", "liked"];

const tracks: Track[] = [
  { id: 1, title: "Blue Light", artist: "Jorja Smith", liked: true },
  { id: 2, title: "Nights", artist: "Frank Ocean", liked: false },
];

const pick: FeaturedTrack = {
  id: 3,
  title: "Golden",
  artist: "Jill Scott",
  liked: true,
  curatedBy: "editorial",
  addedDate: "2024-01-15",
};

for (const track of tracks) {
  console.log(columns.map((c) => track[c]).join(" | "));
}

const allTracks = ok(tracks);
const featured = ok(pick);

console.log(
  `${allTracks.data.length} tracks, featured: ${featured.data.title}, picked by ${featured.data.curatedBy}`,
);
console.log(findById(tracks, 2)?.title);

const ivy = addTrack({ title: "Ivy", artist: "Frank Ocean", liked: false });
updateTrack(ivy.id, { liked: true });

console.log(toPreview(ivy), ivy.liked);

const formatCounts: Record<Format, number> = {
  vinyl: 12,
  cd: 30,
  digital: 214,
};

console.log(formatCounts);
