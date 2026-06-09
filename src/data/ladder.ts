/**
 * ladder.ts — PLACEHOLDER points table.
 * ---------------------------------------------------------------------------
 * TODO (real data): FUTURE source PlayHQ ladder API. Keep `LadderRow` shape.
 * Net run rate values are illustrative.
 * ---------------------------------------------------------------------------
 */
import type { LadderRow } from "./types";

export const ladder: LadderRow[] = [
  { position: 1, clubId: "norwood", played: 4, won: 4, lost: 0, noResult: 0, points: 16, netRunRate: 1.84 },
  { position: 2, clubId: "north-ringwood", played: 4, won: 3, lost: 1, noResult: 0, points: 12, netRunRate: 1.12 },
  { position: 3, clubId: "mooroolbark", played: 4, won: 3, lost: 1, noResult: 0, points: 12, netRunRate: 0.76 },
  { position: 4, clubId: "south-croydon", played: 4, won: 2, lost: 1, noResult: 1, points: 10, netRunRate: 0.41 },
  { position: 5, clubId: "bayswater-park", played: 4, won: 2, lost: 2, noResult: 0, points: 8, netRunRate: 0.05 },
  { position: 6, clubId: "heathmont", played: 4, won: 2, lost: 2, noResult: 0, points: 8, netRunRate: -0.18 },
  { position: 7, clubId: "croydon", played: 4, won: 1, lost: 3, noResult: 0, points: 4, netRunRate: -0.62 },
  { position: 8, clubId: "montrose", played: 4, won: 1, lost: 3, noResult: 0, points: 4, netRunRate: -0.89 },
  { position: 9, clubId: "scoresby", played: 4, won: 1, lost: 3, noResult: 0, points: 4, netRunRate: -1.05 },
  { position: 10, clubId: "wonga-park", played: 4, won: 0, lost: 4, noResult: 0, points: 0, netRunRate: -1.44 },
];
