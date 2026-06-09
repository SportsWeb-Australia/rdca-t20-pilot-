/**
 * sectionsConfig.ts
 * ---------------------------------------------------------------------------
 * FUTURE BUILDER HOOK.
 * The SportsWeb One website builder needs to turn homepage sections on/off
 * per site without editing code. The Home page reads this map and renders
 * only enabled sections, in the order listed.
 *
 * For a future BHRDCA association site you might disable `challenges` and
 * `store` and enable a `documents` / `committee` section instead.
 * ---------------------------------------------------------------------------
 */

export type HomeSectionKey =
  | "hero"
  | "featureMatch"
  | "fixtureStrip"
  | "matchCentrePreview"
  | "clubs"
  | "ladderPreview"
  | "fanhub"
  | "juniors"
  | "challenges"
  | "newsVideo"
  | "sponsors"
  | "store"
  | "communityFeed";

export interface SectionSetting {
  key: HomeSectionKey;
  enabled: boolean;
}

/** Order here = order on the page. Flip `enabled` to show/hide a section. */
export const homeSections: SectionSetting[] = [
  { key: "hero", enabled: true },
  { key: "featureMatch", enabled: true },
  { key: "fixtureStrip", enabled: true },
  { key: "matchCentrePreview", enabled: true },
  { key: "clubs", enabled: true },
  { key: "ladderPreview", enabled: true },
  { key: "fanhub", enabled: true },
  { key: "juniors", enabled: true },
  { key: "challenges", enabled: true },
  { key: "newsVideo", enabled: true },
  { key: "sponsors", enabled: true },
  { key: "store", enabled: true },
  { key: "communityFeed", enabled: true },
];

export const isSectionEnabled = (key: HomeSectionKey): boolean =>
  homeSections.find((s) => s.key === key)?.enabled ?? false;
