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
 * Design direction for the RDCA T20 Blast: RDCA navy/red foundation +
 * brighter T20 accents (electric blue + gold). Dark hero, clean white content.
 * A future BHRDCA association site would supply a calmer, more corporate set.
 * ---------------------------------------------------------------------------
 */

export interface ThemeConfig {
  // Core brand
  primary: string; // navy — primary brand
  primary2: string; // navy 2
  primary3: string; // navy 3
  dark: string; // deepest navy (hero base)
  secondary: string; // RDCA red
  secondaryHover: string;

  // T20 energy accents
  accent: string; // electric blue
  accentTwo: string; // gold
  accentThree: string; // neon lime (used sparingly, junior energy)

  // Surfaces & text
  background: string;
  card: string;
  text: string;
  textMuted: string;
  textOnDark: string;
  border: string;

  // Typography
  fontDisplay: string;
  fontBody: string;
  fontMono: string;

  // Shape
  radius: string;
  radiusLg: string;
}

export const themeConfig: ThemeConfig = {
  primary: "#0d1f3c",
  primary2: "#152d52",
  primary3: "#1e3d6b",
  dark: "#07172d",
  secondary: "#cc2222",
  secondaryHover: "#e03030",

  accent: "#00d4ff",
  accentTwo: "#f9c80e",
  accentThree: "#c6f000",

  background: "#f0f2f5",
  card: "#ffffff",
  text: "#0d1f3c",
  textMuted: "#5a6880",
  textOnDark: "#ffffff",
  border: "#e2e6ee",

  fontDisplay: "'Bebas Neue', 'Arial Narrow', sans-serif",
  fontBody: "'DM Sans', system-ui, -apple-system, sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, 'SF Mono', monospace",

  radius: "12px",
  radiusLg: "20px",
};
