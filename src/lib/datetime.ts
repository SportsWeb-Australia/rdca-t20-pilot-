/**
 * datetime.ts
 * ---------------------------------------------------------------------------
 * Date/countdown helpers used by VideoHero (countdown to next match) and the
 * match cards. Pure functions + one small React hook.
 * ---------------------------------------------------------------------------
 */
import { useEffect, useState } from "react";

export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
}

export function getCountdown(target: string | Date): Countdown {
  const diff = +new Date(target) - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    done: false,
  };
}

/** Live-updating countdown. Respects unmount; ticks once per second. */
export function useCountdown(target: string | Date): Countdown {
  const [cd, setCd] = useState<Countdown>(() => getCountdown(target));
  useEffect(() => {
    const id = setInterval(() => setCd(getCountdown(target)), 1000);
    return () => clearInterval(id);
  }, [target]);
  return cd;
}

const pad = (n: number) => String(n).padStart(2, "0");
export const pad2 = pad;

/** "Fri 13 Jun" style short date. */
export function formatShortDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-AU", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

/** "Friday 13 June, 6:30 PM" style long date. */
export function formatLongDate(iso: string, time?: string): string {
  const d = new Date(iso).toLocaleDateString("en-AU", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  return time ? `${d} · ${time}` : d;
}
