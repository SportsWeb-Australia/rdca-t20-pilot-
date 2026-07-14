/**
 * Footer.tsx — site footer.
 * Includes RDCA T20 branding, quick links, social, Acknowledgement of Country
 * and the "Powered by SportsWeb One / T20 OS" credit (brief 11.14).
 */
import { siteConfig } from "../../config/siteConfig";
import { assets } from "../../config/mediaConfig";
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
              <img
                className="brand__logo brand__logo--lg"
                src={assets.bbt20Logo}
                alt=""
                aria-hidden="true"
                width={64}
                height={64}
              />
              <span className="brand__name">{siteConfig.siteName}</span>
            </span>
            <p className="footer__tagline">{siteConfig.supportingLine}</p>

            {/* Association endorsement — the parent RDCA roundel sits with the
                competition mark so the T20 site reads as an official RDCA
                property, not a breakaway brand. */}
            <a
              className="footer__assoc"
              href="https://rdca.com.au"
              target="_blank"
              rel="noreferrer"
              aria-label={`${siteConfig.associationName} — visit the main site`}
            >
              <img src={assets.rdcaLogo} alt="" aria-hidden="true" width={52} height={52} />
              <span>
                An official competition of the
                <strong>{siteConfig.associationName}</strong>
              </span>
            </a>

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
