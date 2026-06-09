/**
 * fixtures.ts — PLACEHOLDER fixtures & results.
 * ---------------------------------------------------------------------------
 * A realistic spread of completed, live and upcoming matches so every UI
 * state (result, live ticker, countdown) is demonstrable.
 *
 * TODO (real data): FUTURE source PlayHQ fixtures/results API. Keep the
 * `Match` shape; replace this array with a mapped API response. Dates are set
 * relative to "now" at module load so the countdown + status badges always
 * look current in the demo.
 * ---------------------------------------------------------------------------
 */
import type { Match } from "./types";

// Build dates relative to today so the prototype never looks stale.
const now = new Date();
const day = (offset: number, h = 18, m = 30) => {
  const d = new Date(now);
  d.setDate(d.getDate() + offset);
  d.setHours(h, m, 0, 0);
  return d.toISOString();
};

export const fixtures: Match[] = [
  // ---- Feature / next match (upcoming, soon) ----
  {
    id: "m-101",
    status: "upcoming",
    round: "Round 5 — Friday Night Blast",
    date: day(2, 18, 30),
    time: "6:30 PM",
    venue: "Quambee Reserve, North Ringwood",
    home: { clubId: "north-ringwood" },
    away: { clubId: "heathmont" },
    sponsor: "Bendigo Bank",
    isFeature: true,
  },

  // ---- Live match (for live match-centre demo) ----
  {
    id: "m-102",
    status: "live",
    round: "Round 5",
    date: day(0, 18, 30),
    time: "6:30 PM",
    venue: "Cheong Park, South Croydon",
    home: { clubId: "south-croydon", score: "142/4", overs: "15.2" },
    away: { clubId: "norwood", score: "171/6", overs: "20.0" },
    result: "South Croydon Strikers need 30 from 28 balls",
    sponsor: "Altegra",
  },

  // ---- Upcoming ----
  {
    id: "m-103",
    status: "upcoming",
    round: "Round 5",
    date: day(3, 18, 30),
    time: "6:30 PM",
    venue: "Esther Park, Mooroolbark",
    home: { clubId: "mooroolbark" },
    away: { clubId: "scoresby" },
  },
  {
    id: "m-104",
    status: "upcoming",
    round: "Round 5",
    date: day(4, 11, 0),
    time: "11:00 AM",
    venue: "Montrose Recreation Reserve",
    home: { clubId: "montrose" },
    away: { clubId: "wonga-park" },
  },
  {
    id: "m-105",
    status: "upcoming",
    round: "Round 6 — Family Blast Day",
    date: day(9, 14, 0),
    time: "2:00 PM",
    venue: "Bayswater Park",
    home: { clubId: "bayswater-park" },
    away: { clubId: "croydon" },
    sponsor: "Dorset Gardens Hotel",
  },

  // ---- Completed (results) ----
  {
    id: "m-095",
    status: "completed",
    round: "Round 4",
    date: day(-3, 18, 30),
    time: "6:30 PM",
    venue: "Quambee Reserve",
    home: { clubId: "north-ringwood", score: "168/6", overs: "20.0" },
    away: { clubId: "croydon", score: "156/9", overs: "20.0" },
    result: "North Ringwood Knights won by 12 runs",
  },
  {
    id: "m-096",
    status: "completed",
    round: "Round 4",
    date: day(-4, 18, 30),
    time: "6:30 PM",
    venue: "Mullum Mullum Reserve",
    home: { clubId: "norwood", score: "189/4", overs: "20.0" },
    away: { clubId: "scoresby", score: "174/8", overs: "20.0" },
    result: "Norwood Nitro won by 15 runs",
  },
  {
    id: "m-097",
    status: "completed",
    round: "Round 4",
    date: day(-5, 18, 30),
    time: "6:30 PM",
    venue: "HE Parker Reserve",
    home: { clubId: "heathmont", score: "143/8", overs: "20.0" },
    away: { clubId: "mooroolbark", score: "144/3", overs: "18.1" },
    result: "Mooroolbark Magic won by 7 wickets",
  },
];

/** Convenience selectors (mirror what API hooks would return). */
export const featureMatch = (): Match =>
  fixtures.find((m) => m.isFeature) ?? fixtures[0];

export const liveMatches = (): Match[] =>
  fixtures.filter((m) => m.status === "live");

export const upcomingMatches = (): Match[] =>
  fixtures
    .filter((m) => m.status === "upcoming")
    .sort((a, b) => +new Date(a.date) - +new Date(b.date));

export const completedMatches = (): Match[] =>
  fixtures
    .filter((m) => m.status === "completed")
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
