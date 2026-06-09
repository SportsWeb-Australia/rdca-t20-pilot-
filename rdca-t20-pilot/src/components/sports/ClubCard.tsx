/**
 * ClubCard.tsx
 * ---------------------------------------------------------------------------
 * A franchise club tile. The coloured bar uses the club's brand colour so the
 * grid reads like a Big Bash team wall. Logos are placeholders until real
 * club marks are supplied (see src/data/clubs.ts).
 *
 * FUTURE: clubs come from Supabase/CMS; "Follow" becomes a real subscribe.
 * ---------------------------------------------------------------------------
 */
import type { Club } from "../../data/types";
import { Icon } from "../core/Icon";

interface ClubCardProps {
  club: Club;
}

export function ClubCard({ club }: ClubCardProps) {
  return (
    <article className="club">
      <div
        className="club__bar"
        style={{ background: `linear-gradient(135deg, ${club.color}, ${club.colorSecondary ?? club.color})` }}
      >
        <img className="club__logo" src={club.logo} alt={`${club.teamName} logo`} />
      </div>
      <div className="club__team">{club.teamName}</div>
      <div className="club__name">{club.name}</div>
      {club.tagline && <div className="club__tag">{club.tagline}</div>}
      <button className="club__follow" aria-label={`Follow ${club.teamName}`}>
        <Icon name="plus" size={14} /> Follow
      </button>
    </article>
  );
}
