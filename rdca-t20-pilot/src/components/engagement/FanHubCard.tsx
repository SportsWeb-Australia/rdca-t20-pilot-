/**
 * FanHubCard.tsx
 * ---------------------------------------------------------------------------
 * A single FanHub engagement module (predictor, voting, rewards, etc.). The
 * accent token drives the glow colour so the grid feels lively without being
 * noisy. Sponsors and badges are optional and data-driven.
 *
 * v1 is presentational (the brief says no live features yet) — each CTA is a
 * hook for a future interactive route.
 * ---------------------------------------------------------------------------
 */
import type { CSSProperties } from "react";
import type { FanHubModule } from "../../data/types";
import { Icon, type IconName } from "../core/Icon";

interface FanHubCardProps {
  module: FanHubModule;
}

/** Map the design-token accent name to its CSS custom property. */
const accentVar: Record<FanHubModule["accent"], string> = {
  accent: "var(--color-accent)",
  accentTwo: "var(--color-accent-2)",
  accentThree: "var(--color-accent-3)",
  secondary: "var(--color-secondary)",
};

export function FanHubCard({ module }: FanHubCardProps) {
  const color = accentVar[module.accent];

  return (
    <article className="fhcard" style={{ "--fh": color } as CSSProperties}>
      <span className="fhcard__glow" aria-hidden="true" style={{ background: color }} />
      {module.badge && <span className="fhcard__badge">{module.badge}</span>}

      <span className="fhcard__ic" style={{ color }}>
        <Icon name={module.icon as IconName} size={26} />
      </span>

      <h3 className="display">{module.title}</h3>
      <p>{module.description}</p>

      <div className="fhcard__foot">
        <button className="fhcard__cta" style={{ color }}>
          {module.cta} <Icon name="arrow" size={15} />
        </button>
        {module.sponsor && <span className="fhcard__sponsor">with {module.sponsor}</span>}
      </div>
    </article>
  );
}
