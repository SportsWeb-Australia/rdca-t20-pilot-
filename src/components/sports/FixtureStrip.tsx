/**
 * FixtureStrip.tsx
 * ---------------------------------------------------------------------------
 * Horizontally-scrolling strip of matches with an Upcoming / Results toggle.
 * Mobile-first: swipe on touch, scroll-snaps to each card. On the homepage it
 * shows a slice; the full lists live on /fixtures and /results.
 *
 * FUTURE: swap the upcomingMatches()/completedMatches() selectors for live
 * PlayHQ queries. The component only consumes Match[] so nothing else changes.
 * ---------------------------------------------------------------------------
 */
import { useState } from "react";
import { upcomingMatches, completedMatches } from "../../data/fixtures";
import { MatchCard } from "./MatchCard";

type Tab = "upcoming" | "results";

interface FixtureStripProps {
  /** How many cards to show per tab on the homepage. */
  limit?: number;
}

export function FixtureStrip({ limit = 6 }: FixtureStripProps) {
  const [tab, setTab] = useState<Tab>("upcoming");

  const matches =
    tab === "upcoming"
      ? upcomingMatches().slice(0, limit)
      : completedMatches().slice(0, limit);

  return (
    <div>
      <div className="tabs" role="tablist" aria-label="Fixtures and results">
        <button
          role="tab"
          aria-selected={tab === "upcoming"}
          className={tab === "upcoming" ? "is-active" : ""}
          onClick={() => setTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          role="tab"
          aria-selected={tab === "results"}
          className={tab === "results" ? "is-active" : ""}
          onClick={() => setTab("results")}
        >
          Results
        </button>
      </div>

      <div className="strip" style={{ marginTop: 16 }}>
        {matches.map((m) => (
          <MatchCard key={m.id} match={m} />
        ))}
      </div>
    </div>
  );
}
