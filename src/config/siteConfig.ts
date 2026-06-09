/**
 * siteConfig.ts
 * ---------------------------------------------------------------------------
 * SITE-SPECIFIC configuration. This is the file the future SportsWeb One
 * website builder will swap out per association/competition.
 *
 * For "Template Pilot 002 — BHRDCA Association Website", duplicate this file
 * and change the values. The components below read from here, NOT from
 * hard-coded strings, so a new site is mostly a config change.
 * ---------------------------------------------------------------------------
 */

export interface SiteConfig {
  siteName: string;
  shortName: string;
  associationName: string;
  poweredBy: string;
  productLayer: string;
  tagline: string;
  supportingLine: string;
  location: string;
  sport: string;
  competitionType: string;
  /** Used for <title>, meta and share text. */
  metaDescription: string;
  /** Social handles drive the community feed + footer links. */
  social: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    youtube?: string;
    hashtag: string;
  };
  contact: {
    email: string;
    phone?: string;
  };
}

export const siteConfig: SiteConfig = {
  siteName: "RDCA T20 Blast",
  shortName: "RDCA T20",
  associationName: "Ringwood & District Cricket Association",
  poweredBy: "SportsWeb One",
  productLayer: "T20 OS",
  tagline: "Local Cricket. Big Bash Energy.",
  supportingLine:
    "The RDCA T20 Blast brings clubs, players, families, juniors, sponsors and supporters together for fast, exciting community cricket.",
  location: "Ringwood, Victoria",
  sport: "Cricket",
  competitionType: "T20",
  metaDescription:
    "The RDCA T20 Blast — local cricket with Big Bash energy. Fixtures, live match centre, ladder, clubs, junior pathways, fan rewards and more. Powered by SportsWeb One.",
  social: {
    instagram: "https://instagram.com/", // TODO: real RDCA T20 handle
    facebook: "https://facebook.com/", // TODO: real RDCA T20 page
    tiktok: "https://tiktok.com/", // TODO: real RDCA T20 handle
    youtube: "https://youtube.com/", // TODO: real RDCA T20 channel
    hashtag: "#RDCAT20Blast",
  },
  contact: {
    email: "t20@rdca.com.au", // TODO: confirm real contact address
    phone: undefined,
  },
};
