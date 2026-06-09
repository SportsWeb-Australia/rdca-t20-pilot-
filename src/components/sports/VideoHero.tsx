/**
 * VideoHero.tsx
 * ---------------------------------------------------------------------------
 * Full-bleed hero. Plays a background video when one is supplied, otherwise
 * shows the fallback image (so the prototype works with no video + on slow
 * mobile connections, exactly as the brief requires).
 *
 * TO ADD THE REAL VIDEO LATER:
 *   1. Drop the file in /public (e.g. /public/hero.mp4) or use a Cloudinary URL
 *   2. Set assets.heroVideo in src/config/mediaConfig.ts
 * No markup changes needed.
 * ---------------------------------------------------------------------------
 */
import { siteConfig } from "../../config/siteConfig";
import { assets } from "../../config/mediaConfig";
import { useCountdown, pad2 } from "../../lib/datetime";
import { featureMatch } from "../../data/fixtures";
import { clubById } from "../../data/clubs";
import { Button } from "../core/Button";

export function VideoHero() {
  const next = featureMatch();
  const cd = useCountdown(next.date);
  const home = clubById(next.home.clubId);
  const away = clubById(next.away.clubId);

  return (
    <section className="hero" aria-label="Welcome">
      <div className="hero__media">
        {assets.heroVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={assets.heroBackground}
            aria-hidden="true"
          >
            <source src={assets.heroVideo} type="video/mp4" />
          </video>
        ) : (
          // Fallback image — also the <video> poster above.
          <img src={assets.heroBackground} alt="" aria-hidden="true" />
        )}
      </div>
      <div className="hero__overlay" />
      <div className="hero__streak" aria-hidden="true" />

      <div className="hero__content">
        <div className="container">
          <span className="hero__kicker">
            <span className="pill">{next.round.split("—")[0].trim()}</span>
            {home?.shortCode} v {away?.shortCode} · {next.venue.split(",")[0]}
          </span>

          <h1 className="hero__title display">
            Local Cricket.
            <br />
            <span className="accent">Big Bash Energy.</span>
          </h1>

          <p className="hero__sub">{siteConfig.supportingLine}</p>

          <div className="hero__ctas">
            <Button href="/fixtures" variant="accent" icon="arrow">View Fixtures</Button>
            <Button href="/match-centre" variant="ghost" icon="live">Match Centre</Button>
            <Button href="/juniors" variant="ghost">Join The Blast</Button>
            <Button href="/sponsors" variant="ghost">Sponsor The Competition</Button>
          </div>

          {/* Countdown to next/opening match */}
          {!cd.done && (
            <div className="countdown" role="timer" aria-label="Countdown to next match">
              <div>
                <div className="countdown__label">Next Match · {next.time}</div>
                <div className="countdown__units">
                  <CdUnit n={cd.days} l="Days" />
                  <span className="cd-sep">:</span>
                  <CdUnit n={cd.hours} l="Hrs" />
                  <span className="cd-sep">:</span>
                  <CdUnit n={cd.minutes} l="Min" />
                  <span className="cd-sep">:</span>
                  <CdUnit n={cd.seconds} l="Sec" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function CdUnit({ n, l }: { n: number; l: string }) {
  return (
    <div className="cd-unit">
      <div className="cd-unit__num">{pad2(n)}</div>
      <div className="cd-unit__lbl">{l}</div>
    </div>
  );
}
