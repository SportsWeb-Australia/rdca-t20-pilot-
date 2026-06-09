/**
 * PageShell.tsx
 * ---------------------------------------------------------------------------
 * Small helpers for inner pages:
 *  - PageHeader: consistent page title block for "real" content pages.
 *  - PageStub: a friendly placeholder for pages not yet built out, with a
 *    clear note that the section is coming. Keeps navigation honest in v1.
 * ---------------------------------------------------------------------------
 */
import type { ReactNode } from "react";
import { Button } from "../components/core/Button";

export function PageHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <section className="section section--dark" style={{ paddingBottom: "calc(var(--section-y) * 0.6)" }}>
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="display" style={{ fontSize: "clamp(40px, 9vw, 76px)", lineHeight: 0.95 }}>
          {title}
        </h1>
        {sub && <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "60ch", marginTop: 12 }}>{sub}</p>}
      </div>
    </section>
  );
}

export function PageStub({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="pagestub">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="display">{title}</h1>
        <p>
          {children ??
            "This section is part of the RDCA T20 Blast pilot and is coming next. The structure, data model and navigation are already in place."}
        </p>
        <Button href="/" variant="primary" icon="arrow">Back to home</Button>
      </div>
    </div>
  );
}
