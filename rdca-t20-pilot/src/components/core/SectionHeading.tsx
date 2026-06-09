/**
 * SectionHeading.tsx — eyebrow + title + sub + optional right-side action.
 * Used by every homepage section so headings stay consistent and reusable.
 */
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  action?: ReactNode;
  id?: string;
}

export function SectionHeading({ eyebrow, title, sub, action, id }: SectionHeadingProps) {
  return (
    <div className="section-head">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="section-heading" id={id}>
          {title}
        </h2>
        {sub && <p className="section-sub">{sub}</p>}
      </div>
      {action && <div className="section-head__action">{action}</div>}
    </div>
  );
}
