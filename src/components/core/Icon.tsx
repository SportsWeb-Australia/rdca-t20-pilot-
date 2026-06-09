/**
 * Icon.tsx
 * ---------------------------------------------------------------------------
 * A tiny dependency-free icon set (stroke style). Keeping icons inline avoids
 * shipping an icon library and keeps the template portable. Add new icons to
 * the `paths` map by key. Used across cards, nav and the quick-nav bar.
 * ---------------------------------------------------------------------------
 */
import type { CSSProperties } from "react";

export type IconName =
  | "calendar" | "trophy" | "list" | "live" | "star" | "plus"
  | "predict" | "catch" | "six" | "pin" | "gift" | "quiz" | "tag"
  | "speed" | "spark" | "target" | "vs" | "ball" | "mates" | "night"
  | "arrow" | "play" | "menu" | "close" | "clock" | "location" | "chevron"
  | "instagram" | "facebook" | "tiktok" | "youtube" | "share" | "qr";

const paths: Record<IconName, string> = {
  calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  trophy: "M6 4h12v4a6 6 0 0 1-12 0V4zM6 6H4a2 2 0 0 0 2 4M18 6h2a2 2 0 0 1-2 4M9 20h6M12 14v6",
  list: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
  live: "M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14M8 8a5 5 0 0 0 0 8M16 8a5 5 0 0 1 0 8",
  star: "M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18l-5.8 3.4 1.1-6.5L2.6 9.8l6.5-.9L12 3z",
  plus: "M12 5v14M5 12h14",
  predict: "M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0M12 7v5l3 2",
  catch: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M7 13a5 5 0 0 0 10 0",
  six: "M9 7l-3 5a4 4 0 1 0 7-2c-1.5-1.5-4-2-4-3 0-1 1.5-2 4-1",
  pin: "M12 21s-7-6.7-7-12a7 7 0 0 1 14 0c0 5.3-7 12-7 12zM12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0",
  gift: "M20 12v9H4v-9M2 7h20v5H2zM12 22V7M12 7S9.5 2 7 4s2 3 5 3M12 7s2.5-5 5-3-2 3-5 3",
  quiz: "M12 18h.01M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.5-3 4M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z",
  tag: "M3 7v5l9 9 7-7-9-9H5a2 2 0 0 0-2 2zM7.5 7.5h.01",
  speed: "M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M13.4 12.6 19 7M5 20a9 9 0 1 1 14 0",
  spark: "M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3",
  target: "M12 12m-9 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0M12 12m-5 0a5 5 0 1 0 10 0 5 5 0 1 0-10 0M12 12m-1 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0",
  vs: "M4 5l4 14M8 5L4 19M16 5v14M16 5h3a3 3 0 0 1 0 6h-3",
  ball: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M12 2v20M4 7c4 2 12 2 16 0M4 17c4-2 12-2 16 0",
  mates: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6M3 20a6 6 0 0 1 12 0M17 11a3 3 0 1 0 0-6M16 20a6 6 0 0 1 5-3",
  night: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z",
  arrow: "M5 12h14M13 6l6 6-6 6",
  play: "M6 4l14 8-14 8V4z",
  menu: "M3 6h18M3 12h18M3 18h18",
  close: "M6 6l12 12M18 6L6 18",
  clock: "M12 12m-9 0a9 9 0 1 0 18 0 9 9 0 0 0-18 0M12 7v5l3 2",
  location: "M12 21s-7-6.7-7-12a7 7 0 0 1 14 0c0 5.3-7 12-7 12zM12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0",
  chevron: "M9 6l6 6-6 6",
  instagram: "M4 4h16v16H4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8M16.5 7.5h.01",
  facebook: "M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8a1 1 0 0 1 1-1z",
  tiktok: "M16 4c.5 3 2.5 4.5 5 4.7V12c-2 0-3.7-.6-5-1.6V16a5.5 5.5 0 1 1-5.5-5.5c.4 0 .7 0 1 .1v3.2a2.4 2.4 0 1 0 1.5 2.2V4h3z",
  youtube: "M22 8.2a3 3 0 0 0-2.1-2.1C18 5.5 12 5.5 12 5.5s-6 0-7.9.6A3 3 0 0 0 2 8.2 31 31 0 0 0 1.5 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.6 7.9.6 7.9.6s6 0 7.9-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22.5 12 31 31 0 0 0 22 8.2zM10 15V9l5 3-5 3z",
  share: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v14",
  qr: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z",
};

const filled: Partial<Record<IconName, boolean>> = {
  play: true,
  tiktok: true,
  youtube: true,
  facebook: true,
  qr: true,
};

export interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  style?: CSSProperties;
  strokeWidth?: number;
}

export function Icon({ name, size = 20, className, style, strokeWidth = 1.8 }: IconProps) {
  const isFilled = filled[name];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  );
}
