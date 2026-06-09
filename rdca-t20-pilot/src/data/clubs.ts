/**
 * clubs.ts — PLACEHOLDER club data (10 clubs).
 * ---------------------------------------------------------------------------
 * Club names are representative of the Ringwood & District area and the
 * "franchise" team names give the Blast its Big Bash energy. These are
 * illustrative for the prototype.
 *
 * TODO (real data): confirm the actual RDCA T20 club list, real logos
 * (Cloudinary) and official club colours. Replace `logo: placeholder(...)`
 * with real Cloudinary URLs. FUTURE source: PlayHQ / Supabase.
 * ---------------------------------------------------------------------------
 */
import type { Club } from "./types";
import { placeholder } from "../config/mediaConfig";

const logo = (code: string, color: string) =>
  placeholder(code, { w: 160, h: 160, bg: color.replace("#", ""), fg: "ffffff" });

export const clubs: Club[] = [
  {
    id: "north-ringwood",
    name: "North Ringwood CC",
    teamName: "North Ringwood Knights",
    shortCode: "NRW",
    tagline: "Defenders of the north.",
    color: "#1b3a8c",
    colorSecondary: "#f9c80e",
    logo: logo("NRW", "#1b3a8c"),
    homeGround: "Quambee Reserve",
  },
  {
    id: "heathmont",
    name: "Heathmont CC",
    teamName: "Heathmont Heat",
    shortCode: "HMT",
    tagline: "Bring the heat.",
    color: "#d2491b",
    colorSecondary: "#ffd000",
    logo: logo("HMT", "#d2491b"),
    homeGround: "HE Parker Reserve",
  },
  {
    id: "norwood",
    name: "Norwood CC",
    teamName: "Norwood Nitro",
    shortCode: "NOR",
    tagline: "Fast. Fearless.",
    color: "#0a8a5f",
    colorSecondary: "#c6f000",
    logo: logo("NOR", "#0a8a5f"),
    homeGround: "Mullum Mullum Reserve",
  },
  {
    id: "south-croydon",
    name: "South Croydon CC",
    teamName: "South Croydon Strikers",
    shortCode: "SCR",
    tagline: "Strike first.",
    color: "#6a1bb0",
    colorSecondary: "#00d4ff",
    logo: logo("SCR", "#6a1bb0"),
    homeGround: "Cheong Park",
  },
  {
    id: "croydon",
    name: "Croydon CC",
    teamName: "Croydon Cobras",
    shortCode: "CRO",
    tagline: "Strike from the grass.",
    color: "#0c6e6e",
    colorSecondary: "#f9c80e",
    logo: logo("CRO", "#0c6e6e"),
    homeGround: "Croydon Oval",
  },
  {
    id: "bayswater-park",
    name: "Bayswater Park CC",
    teamName: "Bayswater Park Blaze",
    shortCode: "BWP",
    tagline: "Light it up.",
    color: "#c2154a",
    colorSecondary: "#ffb000",
    logo: logo("BWP", "#c2154a"),
    homeGround: "Bayswater Park",
  },
  {
    id: "mooroolbark",
    name: "Mooroolbark CC",
    teamName: "Mooroolbark Magic",
    shortCode: "MBK",
    tagline: "Make it magic.",
    color: "#1e6fd6",
    colorSecondary: "#ff3d7f",
    logo: logo("MBK", "#1e6fd6"),
    homeGround: "Esther Park",
  },
  {
    id: "montrose",
    name: "Montrose CC",
    teamName: "Montrose Mavericks",
    shortCode: "MON",
    tagline: "Play your own way.",
    color: "#b34700",
    colorSecondary: "#00d4ff",
    logo: logo("MON", "#b34700"),
    homeGround: "Montrose Recreation Reserve",
  },
  {
    id: "scoresby",
    name: "Scoresby CC",
    teamName: "Scoresby Scorpions",
    shortCode: "SCB",
    tagline: "Sting in the tail.",
    color: "#2b2b8f",
    colorSecondary: "#c6f000",
    logo: logo("SCB", "#2b2b8f"),
    homeGround: "Cavehill Reserve",
  },
  {
    id: "wonga-park",
    name: "Wonga Park CC",
    teamName: "Wonga Park Warriors",
    shortCode: "WPK",
    tagline: "Defend the valley.",
    color: "#0f7a3d",
    colorSecondary: "#f9c80e",
    logo: logo("WPK", "#0f7a3d"),
    homeGround: "Wonga Park Reserve",
  },
];

/** Lookup helper used across components so we never repeat .find() logic. */
export const clubById = (id: string): Club | undefined =>
  clubs.find((c) => c.id === id);
