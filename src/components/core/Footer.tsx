/**
 * Footer.tsx — site footer.
 * Includes RDCA T20 branding, quick links, social, Acknowledgement of Country
 * and the "Powered by SportsWeb One / T20 OS" credit (brief 11.14).
 */
import { siteConfig } from "../../config/siteConfig";
import { Icon, type IconName } from "./Icon";

const quickLinks = [
  { label: "Fixtures", path: "/fixtures" },
  { label: "Results", path: "/results" },
  { label: "Ladder", path: "/ladder" },
  { label: "Clubs", path: "/clubs" },
  { label: "News", path: "/news" },
];

const moreLinks = [
  { label: "Match Centre", path: "/match-centre" },
  { label: "FanHub", path: "/fanhub" },
  { label: "Junior Blast", path: "/juniors" },
  { label: "Sponsors", path: "/sponsors" },
  { label: "T20 Store", path: "/store" },
];

const aboutLinks = [
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy" }, // TODO: real policy
  { label: "Code of Conduct", path: "/conduct" }, // TODO: real policy
];

export function Footer() {
  const social: { key: IconName; url?: string }[] = [
    { key: "instagram", url: siteConfig.social.instagram },
    { key: "facebook", url: siteConfig.social.facebook },
    { key: "tiktok", url: siteConfig.social.tiktok },
    { key: "youtube", url: siteConfig.social.youtube },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="brand">
              <span className="brand__mark" aria-hidden="true">T20</span>
              <span className="brand__name">{siteConfig.siteName}</span>
            </span>
            <p className="footer__tagline">{siteConfig.supportingLine}</p>
            <p className="footer__powered">
              Powered by {siteConfig.poweredBy} · {siteConfig.productLayer}
            </p>
            <div className="footer__social">
              {social.map((s) => (
                <a key={s.key} href={s.url ?? "#"} aria-label={s.key} target="_blank" rel="noreferrer">
                  <Icon name={s.key} size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4>Cricket</h4>
            {quickLinks.map((l) => (
              <a key={l.path} href={l.path}>{l.label}</a>
            ))}
          </div>

          <div className="footer__col">
            <h4>The Blast</h4>
            {moreLinks.map((l) => (
              <a key={l.path} href={l.path}>{l.label}</a>
            ))}
          </div>

          <div className="footer__col">
            <h4>Association</h4>
            {aboutLinks.map((l) => (
              <a key={l.path} href={l.path}>{l.label}</a>
            ))}
          </div>
        </div>

        {/* Acknowledgement of Country (brief 11.14) */}
        <p className="footer__acknowledgement">
          The {siteConfig.associationName} acknowledges the Wurundjeri Woi-wurrung people of the Kulin
          Nation as the Traditional Owners of the land on which we play, and pays respect to Elders past,
          present and emerging. {/* TODO: confirm Traditional Owner wording with RDCA / local council. */}
        </p>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {siteConfig.associationName}. All rights reserved.</span>
          <span>
            {/* SportsWeb credit (brief 11.14) */}
            A {siteConfig.poweredBy} build · Template Pilot 001
          </span>
        </div>
      </div>
    </footer>
  );
}
