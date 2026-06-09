/**
 * ChallengeCard.tsx
 * ---------------------------------------------------------------------------
 * A sponsor-friendly skills challenge (fastest bowler, longest six, etc.).
 * These are designed to be easy commercial activations — each can carry a
 * sponsor name with no layout change.
 * ---------------------------------------------------------------------------
 */
import type { Challenge } from "../../data/types";
import { Icon, type IconName } from "../core/Icon";

interface ChallengeCardProps {
  challenge: Challenge;
}

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <article className="chcard">
      <span className="chcard__ic">
        <Icon name={challenge.icon as IconName} size={24} />
      </span>
      <h3 className="display">{challenge.title}</h3>
      <p>{challenge.blurb}</p>
      {challenge.sponsor && (
        <span className="chcard__sponsor">Presented by {challenge.sponsor}</span>
      )}
    </article>
  );
}
