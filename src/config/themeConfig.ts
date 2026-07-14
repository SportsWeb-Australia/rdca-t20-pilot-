/**
 * themeConfig.ts
 * ---------------------------------------------------------------------------
 * THEME tokens for this site. Kept separate from siteConfig so a future
 * SportsWeb site can reuse the same components with a totally different look.
 *
 * These values are injected as CSS custom properties at runtime by
 * `applyTheme()` (see src/lib/applyTheme.ts), so changing them here re-skins
 * the entire site without touching component CSS.
 *
 * DESIGN DIRECTION — "T20 Black Glass"
 * -----------------------------------
 * True-black canvas (matches the Big Bash broadcast look and lets the hero
 * video read as full-bleed), with frosted-glass surfaces layered over it.
 * Every "card" in the system is a translucent pane with a backdrop blur and a
 * 1px lit hairline — see the glass tokens below and the glass layer at the
 * bottom of globals.css.
 *
 * Accents are pulled straight from the BBT20 shield and the RDCA roundel, then
 * pushed to fluro so they hold up against black:
 *   - accent      fluro red   — the RDCA red at full voltage. Primary CTA,
 *                               live data, sixes, finals cut-off.
 *   - accentTwo   electric blue — the shield navy at full voltage. Boundaries,
 *                               secondary data.
 *   - secondary   brand red   — the flat logo red. Solid LIVE badges, so they
 *                               sit *under* the fluro accent rather than
 *                               competing with it.
 * No lime, no pink — nothing that isn't in the logos.
 *
 * A future BHRDCA association site would supply a calmer, light set — the
 * component CSS reads only from these tokens, so it swaps cleanly.
 * ---------------------------------------------------------------------------
 */

export interface ThemeConfig {
  // Core brand
  primary: string; // base black — primary brand surface
  primary2: string; // raised surface
  primary3: string; // raised surface 2
  dark: string; // deepest black (hero base)
  secondary: string; // brand red (flat, from the logo) — LIVE / urgency
  secondaryHover: string;

  // T20 energy accents — logo colours at fluro voltage
  accent: string; // fluro red — primary CTA + live data
  accentTwo: string; // electric blue — boundaries / secondary data
  accentThree: string; // ice blue — highlights, used sparingly

  // Surfaces & text
  background: string;
  card: string; // translucent — the glass pane fill
  text: string;
  textMuted: string;
  textOnDark: string;
  border: string; // translucent hairline

  // Glass system
  glassBlur: string; // backdrop-filter blur radius
  glassFill: string; // pane fill
  glassFillStrong: string; // raised / hovered pane fill
  glassStroke: string; // hairline border
  glassHighlight: string; // top inner highlight (the "lit edge")
  glassShadow: string; // drop shadow beneath a pane

  // Typography
  fontDisplay: string;
  fontBody: string;
  fontMono: string;

  // Shape
  radius: string;
  radiusLg: string;
}

export const themeConfig: ThemeConfig = {
  primary: "#0a0a0c",
  primary2: "#121216",
  primary3: "#1a1a20",
  dark: "#000000",
  secondary: "#e01b24", // flat RDCA red — solid LIVE badges
  secondaryHover: "#ff3b3b",

  accent: "#ff3b3b", // fluro red — RDCA red at voltage
  accentTwo: "#3d6dff", // electric blue — shield navy at voltage
  accentThree: "#7be0ff", // ice blue — sparingly

  background: "#000000",
  card: "rgba(255, 255, 255, 0.045)",
  text: "#ffffff",
  textMuted: "#9aa0a6",
  textOnDark: "#ffffff",
  border: "rgba(255, 255, 255, 0.10)",

  glassBlur: "18px",
  glassFill: "rgba(255, 255, 255, 0.045)",
  glassFillStrong: "rgba(255, 255, 255, 0.08)",
  glassStroke: "rgba(255, 255, 255, 0.12)",
  glassHighlight: "rgba(255, 255, 255, 0.18)",
  glassShadow: "0 18px 50px rgba(0, 0, 0, 0.55)",

  fontDisplay: "'Bebas Neue', 'Arial Narrow', sans-serif",
  fontBody: "'DM Sans', system-ui, -apple-system, sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, 'SF Mono', monospace",

  radius: "14px",
  radiusLg: "22px",
};
