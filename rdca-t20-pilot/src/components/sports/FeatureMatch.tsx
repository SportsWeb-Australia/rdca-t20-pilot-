/**
 * FeatureMatch.tsx
 * ---------------------------------------------------------------------------
 * The marquee "next big match" card that overlaps the hero. Pulls the fixture
 * flagged isFeature (see featureMatch() selector). Shows teams, time, venue,
 * the match-day sponsor and quick actions.
 * ---------------------------------------------------------------------------
 */
import { featureMatch } from "../../data/fixtures";
import { clubById } from "../../data/clubs";
import { formatLongDate } from "../../lib/datetime";
import { Icon } from "../core/Icon";
import { Button } from "../core/Button";

export function FeatureMatch() {
  const m = featureMatch();
  const home = clubById(m.home.clubId);
  const away = clubById(m.away.clubId);

  return (
    <div className="container feature-match">
      <article className="fmatch">
        <div className="fmatch__top">
          <span className="fmatch__round">{m.round}</span>
          <span className="badge badge--upcoming">Feature Match</span>
        </div>

        <div className="fmatch__body">
          <div className="fmatch__team">
            <img className="fmatch__logo" src={home?.logo} alt={`${home?.teamName} logo`} style={{ background: home?.color }} />
            <span className="fmatch__teamname display">{home?.teamName}</span>
          </div>

          <div className="fmatch__vs display">VS</div>

          <div className="fmatch__team">
            <img className="fmatch__logo" src={away?.logo} alt={`${away?.teamName} logo`} style={{ background: away?.color }} />
            <span className="fmatch__teamname display">{away?.teamName}</span>
          </div>
        </div>

        <div className="fmatch__meta">
          <span className="mi"><Icon name="calendar" size={15} /> {formatLongDate(m.date)}</span>
          <span className="mi"><Icon name="clock" size={15} /> {m.time}</span>
          <span className="mi"><Icon name="location" size={15} /> {m.venue}</span>
        </div>

        <div className="fmatch__foot">
          {m.sponsor && (
            <span className="fmatch__sponsor">
              Match-day partner: <b>{m.sponsor}</b>
            </span>
          )}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Button href="/match-centre" variant="primary" small icon="live">Match Centre</Button>
            <Button href="/fixtures" variant="outline" small>All Fixtures</Button>
          </div>
        </div>
      </article>
    </div>
  );
}
