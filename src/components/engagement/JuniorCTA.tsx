/**
 * JuniorCTA.tsx
 * ---------------------------------------------------------------------------
 * Junior recruitment block — one of the most important sections per the brief.
 * Renders the junior program grid (Try Free, Register, Find a Club, ...) with
 * the highlighted recruitment actions called out, plus a "scan to register"
 * QR panel for sign-on days and flyers.
 *
 * The QR graphic is a styled PLACEHOLDER. TO ADD A REAL QR:
 *   npm i qrcode.react  ->  render <QRCodeSVG value={registerUrl} />
 * inside .jqr__code (drop-in replacement, no layout change).
 * ---------------------------------------------------------------------------
 */
import { juniorPrograms } from "../../data/fanhub";
import type { ReactElement } from "react";
import { Icon, type IconName } from "../core/Icon";

export function JuniorCTA() {
  return (
    <>
      <div className="jgrid">
        {juniorPrograms.map((p) => (
          <article key={p.id} className={`jcard${p.highlight ? " jcard--hl" : ""}`}>
            <span className="jcard__ic">
              <Icon name={p.icon as IconName} size={24} />
            </span>
            <h3 className="display">{p.title}</h3>
            <p>{p.description}</p>
            <button className="jcard__cta">
              {p.cta} <Icon name="arrow" size={15} />
            </button>
            {p.sponsor && <span className="jcard__sponsor">Supported by {p.sponsor}</span>}
          </article>
        ))}
      </div>

      <aside className="jqr">
        <div className="jqr__code" aria-hidden="true">
          <QrPlaceholder />
        </div>
        <div>
          <h3 className="display">Scan to register a junior</h3>
          <p>
            Point your camera here at any club sign-on day to jump straight to
            Junior Blast registration. {/* TODO: link to real registration URL / PlayHQ */}
          </p>
          <a className="btn btn--accent btn--sm" href="/juniors">Register Now</a>
        </div>
      </aside>
    </>
  );
}

/** Decorative QR-style SVG placeholder (not a scannable code). */
function QrPlaceholder() {
  const cells = 11;
  const size = 132;
  const unit = size / cells;
  // Deterministic pattern so it looks like a QR but stays stable across renders.
  const filled = (r: number, c: number) => {
    if ((r < 3 && c < 3) || (r < 3 && c > cells - 4) || (r > cells - 4 && c < 3)) {
      // finder squares
      const inCornerRing =
        r === 0 || c === 0 || r === 2 || c === 2 ||
        (r > cells - 4 && (r === cells - 3 || r === cells - 1)) ||
        (c > cells - 4 && (c === cells - 3 || c === cells - 1));
      return inCornerRing || (r === 1 && c === 1) ||
        (r === 1 && c === cells - 2) || (r === cells - 2 && c === 1);
    }
    return (r * 7 + c * 3 + ((r * c) % 5)) % 2 === 0;
  };
  const rects: ReactElement[] = [];
  for (let r = 0; r < cells; r++) {
    for (let c = 0; c < cells; c++) {
      if (filled(r, c)) {
        rects.push(
          <rect key={`${r}-${c}`} x={c * unit} y={r * unit} width={unit} height={unit} />,
        );
      }
    }
  }
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} role="img" aria-label="QR placeholder">
      <rect width={size} height={size} fill="#fff" rx="8" />
      <g fill="#0d1f3c">{rects}</g>
    </svg>
  );
}
