/**
 * types.ts
 * ---------------------------------------------------------------------------
 * Shared domain types. These intentionally mirror the shape of the future
 * data sources (PlayHQ, Play Cricket, Supabase) so swapping static data for a
 * live API later is a fetch + map, not a rewrite. See the FUTURE notes by
 * each type for the intended source.
 * ---------------------------------------------------------------------------
 */

export type MatchStatus = "upcoming" | "live" | "completed";

/** FUTURE: PlayHQ club records / Supabase CMS. */
export interface Club {
  id: string;
  name: string;
  /** Big Bash style franchise name for the Blast. */
  teamName: string;
  shortCode: string; // 3-letter code, e.g. "NRW"
  tagline?: string;
  /** Primary brand colour for the club bar/cards. */
  color: string;
  colorSecondary?: string;
  logo: string; // url or placeholder
  homeGround?: string;
}

/** A team reference inside a fixture. */
export interface MatchTeam {
  clubId: string;
  /** Runs/wickets/overs when available (completed or live). */
  score?: string; // e.g. "168/6"
  overs?: string; // e.g. "20.0"
}

/** FUTURE: PlayHQ fixtures + results API. */
export interface Match {
  id: string;
  status: MatchStatus;
  round: string;
  date: string; // ISO date
  time: string; // local time label, e.g. "6:30 PM"
  venue: string;
  home: MatchTeam;
  away: MatchTeam;
  /** Present for live/completed matches. */
  result?: string; // e.g. "North Ringwood Knights won by 12 runs"
  /** Sponsor attached to this match (match-day partner). */
  sponsor?: string;
  isFeature?: boolean;
}

/** FUTURE: PlayHQ ladder API. */
export interface LadderRow {
  position: number;
  clubId: string;
  played: number;
  won: number;
  lost: number;
  noResult: number;
  points: number;
  netRunRate: number;
}

export type SponsorTier =
  | "naming"
  | "major"
  | "supporting"
  | "matchday"
  | "challenge"
  | "junior"
  | "community"
  | "technology";

/** FUTURE: Supabase / CMS. */
export interface Sponsor {
  id: string;
  name: string;
  tier: SponsorTier;
  logo: string;
  url?: string;
  /** What this partner powers, e.g. "Player of the Match". */
  activation?: string;
}

export type ContentType = "news" | "report" | "preview" | "video" | "story";

/** FUTURE: Supabase / CMS for news; Cloudinary for video. */
export interface ContentItem {
  id: string;
  type: ContentType;
  title: string;
  excerpt: string;
  image: string;
  date: string; // ISO
  category: string; // "Match Report" | "Junior" | "Sponsor" | ...
  /** For video items. */
  videoUrl?: string;
  durationLabel?: string; // e.g. "1:24"
}

/** FanHub engagement modules. */
export interface FanHubModule {
  id: string;
  title: string;
  description: string;
  icon: string; // icon key
  cta: string;
  /** Accent token name used for the card highlight. */
  accent: "accent" | "accentTwo" | "accentThree" | "secondary";
  sponsor?: string;
  badge?: string; // e.g. "Live now", "New"
}

/** T20 challenge (sponsor-friendly). */
export interface Challenge {
  id: string;
  title: string;
  blurb: string;
  icon: string;
  sponsor?: string;
}

/** Junior recruitment module. */
export interface JuniorProgram {
  id: string;
  title: string;
  description: string;
  icon: string;
  cta: string;
  sponsor?: string;
  highlight?: boolean;
}

/** Store / merchandise / fundraising item. */
export interface StoreItem {
  id: string;
  name: string;
  priceLabel: string; // string so "From $45" / "Raffle" both work
  image: string;
  category: "apparel" | "headwear" | "club" | "fundraiser" | "offer";
  badge?: string;
}

/** Community / social feed tile. */
export interface SocialPost {
  id: string;
  platform: "instagram" | "tiktok" | "facebook" | "youtube";
  image: string;
  caption: string;
  likes?: number;
  isVideo?: boolean;
}
