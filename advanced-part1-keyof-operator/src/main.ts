import { describeFormat } from "./track.js";
import type { Track } from "./types.js";

describeFormat("vinyl");

const columns: (keyof Track)[] = ["title", "artist", "liked"];

const tracks: Track[] = [
  { id: 1, title: "Blue Light", artist: "Jorja Smith", liked: true },
  { id: 2, title: "Nights", artist: "Frank Ocean", liked: false },
];

for (const track of tracks) {
  console.log(columns.map((c) => track[c]).join(" | "));
}
