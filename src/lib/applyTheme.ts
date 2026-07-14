/**
 * applyTheme.ts
 * ---------------------------------------------------------------------------
 * Reads themeConfig and writes every token to the document root as a CSS
 * custom property (e.g. --color-accent). All component CSS references these
 * variables, so re-skinning a whole SportsWeb site = editing themeConfig.ts.
 *
 * This is the bridge between the TS theme object and the CSS. The future
 * builder can call applyTheme(customTheme) at runtime to preview a new look.
 * ---------------------------------------------------------------------------
 */
import type { ThemeConfig } from "../config/themeConfig";
import { themeConfig as defaultTheme } from "../config/themeConfig";

export function applyTheme(theme: ThemeConfig = defaultTheme): void {
  const r = document.documentElement;
  const set = (k: string, v: string) => r.style.setProperty(k, v);

  set("--color-primary", theme.primary);
  set("--color-primary-2", theme.primary2);
  set("--color-primary-3", theme.primary3);
  set("--color-dark", theme.dark);
  set("--color-secondary", theme.secondary);
  set("--color-secondary-hover", theme.secondaryHover);

  set("--color-accent", theme.accent);
  set("--color-accent-2", theme.accentTwo);
  set("--color-accent-3", theme.accentThree);

  set("--color-bg", theme.background);
  set("--color-card", theme.card);
  set("--color-text", theme.text);
  set("--color-text-muted", theme.textMuted);
  set("--color-text-on-dark", theme.textOnDark);
  set("--color-border", theme.border);

  // Glass system
  set("--glass-blur", theme.glassBlur);
  set("--glass-fill", theme.glassFill);
  set("--glass-fill-strong", theme.glassFillStrong);
  set("--glass-stroke", theme.glassStroke);
  set("--glass-highlight", theme.glassHighlight);
  set("--glass-shadow", theme.glassShadow);

  set("--font-display", theme.fontDisplay);
  set("--font-body", theme.fontBody);
  set("--font-mono", theme.fontMono);

  set("--radius", theme.radius);
  set("--radius-lg", theme.radiusLg);
}
