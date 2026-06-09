/**
 * navigationConfig.ts
 * ---------------------------------------------------------------------------
 * Navigation is data, not markup. The Header and MobileQuickNav components
 * render whatever is listed here, so re-ordering or hiding items per site is
 * a config edit.
 * ---------------------------------------------------------------------------
 */

export interface NavItem {
  label: string;
  path: string;
  /** Optional short label for tight mobile contexts. */
  short?: string;
}

/** Primary desktop navigation. */
export const navigationConfig: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Match Centre", path: "/match-centre" },
  { label: "Fixtures", path: "/fixtures" },
  { label: "Ladder", path: "/ladder" },
  { label: "Clubs", path: "/clubs" },
  { label: "FanHub", path: "/fanhub" },
  { label: "Juniors", path: "/juniors" },
  { label: "News", path: "/news" },
  { label: "Sponsors", path: "/sponsors" },
  { label: "Store", path: "/store" },
];

/**
 * Mobile quick-action bar (sticky bottom). Keep this short — these are the
 * highest-intent actions. Icons are referenced by key in MobileQuickNav.
 */
export const mobileQuickNav: (NavItem & { icon: string })[] = [
  { label: "Fixtures", short: "Fixtures", path: "/fixtures", icon: "calendar" },
  { label: "Results", short: "Results", path: "/results", icon: "trophy" },
  { label: "Ladder", short: "Ladder", path: "/ladder", icon: "list" },
  { label: "Match Centre", short: "Match", path: "/match-centre", icon: "live" },
  { label: "FanHub", short: "FanHub", path: "/fanhub", icon: "star" },
  { label: "Join", short: "Join", path: "/juniors", icon: "plus" },
];
