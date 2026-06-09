/**
 * SponsorPanel.tsx
 * ---------------------------------------------------------------------------
 * Sponsor hierarchy, grouped by tier (naming rights at the top, then majors,
 * supporting, match-day, etc.). This is the commercial backbone of the model
 * so it's deliberately prominent and easy to extend.
 *
 * FUTURE: sponsors come from Supabase/CMS; tiers + activations are already
 * modelled (see SponsorTier in types.ts and src/data/sponsors.ts).
 * ---------------------------------------------------------------------------
 */
import { sponsorsByTier, tierLabel } from "../../data/sponsors";

interface SponsorPanelProps {
  /** Hide the closing "become a partner" call-to-action (e.g. on the full page). */
  hideCta?: boolean;
}

export function SponsorPanel({ hideCta = false }: SponsorPanelProps) {
  const groups = sponsorsByTier();

  return (
    <div className="sponsors">
      {groups.map(({ tier, items }) => (
        <div key={tier} className={`sptier sptier--${tier}`}>
          <div className="sptier__label">{tierLabel[tier]}</div>
          <div className="spgrid">
            {items.map((s) => (
              <a
                key={s.id}
                className="splogo"
                href={s.url ?? "#"}
                target={s.url ? "_blank" : undefined}
                rel={s.url ? "noopener noreferrer" : undefined}
                aria-label={s.name}
              >
                <img src={s.logo} alt={s.name} loading="lazy" />
                {s.activation && <span className="splogo__activation">{s.activation}</span>}
              </a>
            ))}
          </div>
        </div>
      ))}

      {!hideCta && (
        <div className="sponsors__cta">
          <h3 className="display">Put your brand in the middle of the action</h3>
          <p>
            Naming rights, match-day partnerships, challenge sponsorships and junior
            program support — packages to suit every local business.
          </p>
          <a className="btn btn--accent" href="/sponsors">Become a Partner</a>
        </div>
      )}
    </div>
  );
}
