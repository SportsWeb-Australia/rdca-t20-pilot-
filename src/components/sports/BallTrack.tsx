/**
 * BallTrack.tsx
 * ---------------------------------------------------------------------------
 * The last N deliveries as beads — the single most-glanced-at element in any
 * live cricket UI. Colour carries the meaning: lime = six, cyan = four,
 * pink = wicket, glass = everything else.
 *
 * Deliveries are plain strings so this maps 1:1 onto a PlayHQ / Play Cricket
 * ball-by-ball feed with no transform: "0" | "1" | "2" | "3" | "4" | "6" |
 * "W" | "wd" | "nb".
 * ---------------------------------------------------------------------------
 */

export interface BallTrackProps {
  /** Most recent last, e.g. ["1", "4", "6", "W", "1", "2"]. */
  deliveries: string[];
  /** Optional label rendered above the beads. */
  label?: string;
}

function classFor(ball: string): string {
  const b = ball.toUpperCase();
  if (b === "W") return "balltrack__ball balltrack__ball--wicket";
  if (b === "6") return "balltrack__ball balltrack__ball--six";
  if (b === "4") return "balltrack__ball balltrack__ball--four";
  return "balltrack__ball";
}

function describe(ball: string): string {
  const b = ball.toUpperCase();
  if (b === "W") return "Wicket";
  if (b === "WD") return "Wide";
  if (b === "NB") return "No ball";
  if (b === "0") return "Dot ball";
  return `${ball} run${ball === "1" ? "" : "s"}`;
}

export function BallTrack({ deliveries, label = "Last 6 balls" }: BallTrackProps) {
  return (
    <div>
      {label && <div className="ncard__date">{label}</div>}
      <div
        className="balltrack"
        role="list"
        aria-label={`${label}: ${deliveries.map(describe).join(", ")}`}
      >
        {deliveries.map((ball, i) => (
          <span
            key={`${ball}-${i}`}
            role="listitem"
            className={classFor(ball)}
            title={describe(ball)}
          >
            {ball.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}
