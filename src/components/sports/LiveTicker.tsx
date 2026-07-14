/**
 * LiveTicker.tsx
 * ---------------------------------------------------------------------------
 * The scrolling score strip that sits above the header on every page — the
 * "always-on" layer that makes the site feel like a live app rather than a
 * brochure. Borrowed from the RDCA main site, tuned for T20.
 *
 * Reads live matches first, then falls back to the most recent completed
 * results so the strip is never empty out of season.
 *
 * The track is rendered twice so the CSS marquee (`@keyframes tickerScroll`,
 * translateX -50%) loops seamlessly. Pauses on hover/focus, and respects
 * prefers-reduced-motion (falls back to a horizontally scrollable strip).
 *
 * FUTURE: swap `liveMatches()` for a polled PlayHQ endpoint — the shape is
 * already the `Match` type, so this component doesn't change.
 * ---------------------------------------------------------------------------
 */
import { Link } from "react-router-dom";
import { liveMatches, completedMatches } from "../../data/fixtures";
import { clubById } from "../../data/clubs";
import type { Match } from "../../data/types";

function TickerItem({ match }: { match: Match }) {
  const home = clubById(match.home.clubId);
  const away = clubById(match.away.clubId);

  return (
    <span className="ticker__item">
      <span className="ticker__grade">
        {match.status === "live" ? "Live" : match.round.split("—")[0].trim()}
      </span>
      <b>{home?.shortCode}</b>
      <span>{match.home.score ?? "—"}</span>
      <span className="ticker__note">v</span>
      <b>{away?.shortCode}</b>
      <span>{match.away.score ?? "—"}</span>
      {match.result && <span className="ticker__note">· {match.result}</span>}
    </span>
  );
}

export function LiveTicker() {
  const live = liveMatches();
  const matches = live.length > 0 ? live : completedMatches().slice(0, 6);

  if (matches.length === 0) return null;

  const track = (
    <div className="ticker__track" aria-hidden="false">
      {/* Rendered twice for the seamless marquee loop. The duplicate is
          hidden from assistive tech so scores aren't announced twice. */}
      {matches.map((m) => (
        <TickerItem key={m.id} match={m} />
      ))}
      <span aria-hidden="true" style={{ display: "contents" }}>
        {matches.map((m) => (
          <TickerItem key={`dup-${m.id}`} match={m} />
        ))}
      </span>
    </div>
  );

  return (
    <Link
      to="/match-centre"
      className="ticker"
      aria-label="Live scores — open the Match Centre"
    >
      <span className="ticker__tag">
        <span className="ticker__dot" aria-hidden="true" />
        {live.length > 0 ? "LIVE T20" : "LATEST"}
      </span>
      {track}
    </Link>
  );
}
