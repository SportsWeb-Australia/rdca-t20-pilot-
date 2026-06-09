/**
 * MatchCard.tsx
 * ---------------------------------------------------------------------------
 * Compact fixture / result card used in the FixtureStrip and listing pages.
 * Pure presentational — give it a Match and it renders. Works for upcoming,
 * live and completed states (status drives the badge + whether scores show).
 *
 * FUTURE: the Match object will come from the PlayHQ fixtures/results API
 * (see src/data/types.ts). No markup change needed — only the data source.
 * ---------------------------------------------------------------------------
 */
import type { Match } from "../../data/types";
import { clubById } from "../../data/clubs";
import { formatShortDate } from "../../lib/datetime";
import { Icon } from "../core/Icon";

interface MatchCardProps {
  match: Match;
}

export function MatchCard({ match }: MatchCardProps) {
  const home = clubById(match.home.clubId);
  const away = clubById(match.away.clubId);
  const showScore = match.status !== "upcoming";

  const badge =
    match.status === "live"
      ? <span className="badge badge--live"><i />LIVE</span>
      : match.status === "completed"
      ? <span className="badge badge--completed">Result</span>
      : <span className="badge badge--upcoming">{match.time}</span>;

  return (
    <article className="mcard" aria-label={`${home?.teamName} versus ${away?.teamName}`}>
      <div className="mcard__top">
        <span>{match.round.split("—")[0].trim()}</span>
        {badge}
      </div>

      <Row club={home} score={showScore ? match.home.score : undefined} />
      <Row club={away} score={showScore ? match.away.score : undefined} />

      {match.result && <div className="mcard__result">{match.result}</div>}

      <div className="mcard__foot">
        <span className="mcard__venue">
          <Icon name="location" size={13} /> {match.venue.split(",")[0]}
        </span>
        <span className="mcard__venue">{formatShortDate(match.date)}</span>
      </div>
    </article>
  );
}

function Row({
  club,
  score,
}: {
  club: ReturnType<typeof clubById>;
  score?: string;
}) {
  return (
    <div className="mcard__row">
      <img
        className="mcard__logo"
        src={club?.logo}
        alt=""
        aria-hidden="true"
        style={{ background: club?.color }}
      />
      <span className="mcard__name">{club?.teamName ?? "TBC"}</span>
      {score && <span className="mcard__score">{score}</span>}
    </div>
  );
}
