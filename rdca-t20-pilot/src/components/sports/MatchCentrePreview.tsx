/**
 * MatchCentrePreview.tsx
 * ---------------------------------------------------------------------------
 * A taste of the live Match Centre: a dark scorecard for the current live game
 * plus a couple of in-play engagement modules (predictor / POTM). If no match
 * is live it falls back to the next upcoming fixture framed as "Coming up".
 *
 * FUTURE: live scores stream from PlayHQ; modules become interactive (FanHub).
 * ---------------------------------------------------------------------------
 */
import { liveMatches, upcomingMatches } from "../../data/fixtures";
import { clubById } from "../../data/clubs";
import { Icon } from "../core/Icon";
import { Button } from "../core/Button";

export function MatchCentrePreview() {
  const live = liveMatches();
  const match = live[0] ?? upcomingMatches()[0];
  const isLive = live.length > 0;
  const home = clubById(match.home.clubId);
  const away = clubById(match.away.clubId);

  return (
    <div className="mc">
      <div className="mc__streak" aria-hidden="true" />
      <div className="mc__grid">
        <div className="mc__scorecard">
          <div className="mc__live">
            {isLive ? (
              <span className="badge badge--live"><i />LIVE NOW</span>
            ) : (
              <span className="badge badge--upcoming">Coming Up</span>
            )}
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, opacity: 0.7 }}>
              {match.round.split("—")[0].trim()}
            </span>
          </div>

          <div className="mc__inning">
            <span className="mc__team">
              <img src={home?.logo} alt="" aria-hidden="true" style={{ background: home?.color }} />
              <span className="display">{home?.teamName}</span>
            </span>
            <span className="mc__rs">
              {match.home.score ?? "—"}
              {match.home.overs && <small>({match.home.overs})</small>}
            </span>
          </div>

          <div className="mc__inning">
            <span className="mc__team">
              <img src={away?.logo} alt="" aria-hidden="true" style={{ background: away?.color }} />
              <span className="display">{away?.teamName}</span>
            </span>
            <span className="mc__rs">
              {match.away.score ?? "—"}
              {match.away.overs && <small>({match.away.overs})</small>}
            </span>
          </div>

          {match.result && (
            <div className="mc__rr">
              <span className="mc__stat">
                <span className="k">Status</span>
                <span className="v">{match.result}</span>
              </span>
            </div>
          )}

          <div style={{ marginTop: 20 }}>
            <Button href="/match-centre" variant="accent" small icon="arrow">
              Open Match Centre
            </Button>
          </div>
        </div>

        <div className="mc__modules">
          <div className="mc__mod">
            <Icon name="predict" size={22} />
            <h4 className="display">Predict the Result</h4>
            <p>Lock in your call before the next over.</p>
          </div>
          <div className="mc__mod">
            <Icon name="star" size={22} />
            <h4 className="display">Vote Player of the Match</h4>
            <p>Your vote decides the official award.</p>
          </div>
          <div className="mc__mod">
            <Icon name="six" size={22} />
            <h4 className="display">Six of the Round</h4>
            <p>Nominate the biggest hit you've seen.</p>
          </div>
          <div className="mc__mod">
            <Icon name="catch" size={22} />
            <h4 className="display">Catch of the Round</h4>
            <p>Vote for the grab of the weekend.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
