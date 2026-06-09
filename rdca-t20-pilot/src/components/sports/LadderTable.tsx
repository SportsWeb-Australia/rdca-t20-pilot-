/**
 * LadderTable.tsx
 * ---------------------------------------------------------------------------
 * The competition ladder. `preview` shows the top N rows for the homepage;
 * the full table renders on /ladder. Top 4 are highlighted (finals line).
 *
 * FUTURE: rows come from the PlayHQ ladder API (see LadderRow in types.ts).
 * ---------------------------------------------------------------------------
 */
import { ladder } from "../../data/ladder";
import { clubById } from "../../data/clubs";

interface LadderTableProps {
  /** Limit rows (e.g. 5 for the homepage preview). Omit to show all. */
  limit?: number;
}

export function LadderTable({ limit }: LadderTableProps) {
  const rows = limit ? ladder.slice(0, limit) : ladder;

  return (
    <div className="ladder" role="table" aria-label="Competition ladder">
      <div className="ladder__row ladder__row--head" role="row">
        <span className="ladder__pos" role="columnheader">#</span>
        <span className="lh-team" role="columnheader">Club</span>
        <span role="columnheader" title="Played">P</span>
        <span role="columnheader" title="Won">W</span>
        <span role="columnheader" title="Lost">L</span>
        <span className="ladder__pts" role="columnheader" title="Points">Pts</span>
        <span className="ladder__nrr" role="columnheader" title="Net run rate">NRR</span>
      </div>

      {rows.map((r) => {
        const club = clubById(r.clubId);
        const top4 = r.position <= 4;
        return (
          <div
            key={r.clubId}
            className={`ladder__row${top4 ? " ladder__row--top4" : ""}`}
            role="row"
          >
            <span className="ladder__pos" role="cell">{r.position}</span>
            <span className="ladder__team" role="cell">
              <img src={club?.logo} alt="" aria-hidden="true" style={{ background: club?.color }} />
              <b>{club?.teamName ?? "TBC"}</b>
            </span>
            <span className="ladder__num" role="cell">{r.played}</span>
            <span className="ladder__num" role="cell">{r.won}</span>
            <span className="ladder__num" role="cell">{r.lost}</span>
            <span className="ladder__pts" role="cell">{r.points}</span>
            <span className="ladder__nrr" role="cell">
              {r.netRunRate > 0 ? "+" : ""}
              {r.netRunRate.toFixed(2)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
