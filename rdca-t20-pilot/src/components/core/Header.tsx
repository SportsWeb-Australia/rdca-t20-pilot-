/**
 * Header.tsx — sticky top header.
 * - Desktop: full nav + primary CTA (shown >=1000px)
 * - Mobile: hamburger opens a full-screen drawer
 * Nav items come from navigationConfig (data-driven, reusable).
 */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navigationConfig } from "../../config/navigationConfig";
import { siteConfig } from "../../config/siteConfig";
import { Icon } from "./Icon";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="brand" aria-label={`${siteConfig.siteName} home`}>
          {/* TODO: replace mark with real RDCA T20 / BBT20 logo (Cloudinary) */}
          <span className="brand__mark" aria-hidden="true">T20</span>
          <span>
            <span className="brand__name">{siteConfig.shortName}</span>
            <span className="brand__sub">Blast</span>
          </span>
        </NavLink>

        <nav className="nav" aria-label="Primary">
          {navigationConfig.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "is-active" : "")}
              end={item.path === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a className="btn btn--accent btn--sm header__cta" href="/juniors">
          Join The Blast
        </a>

        <button
          className="hamburger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Icon name="menu" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`drawer ${open ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-hidden={!open}>
        <div className="drawer__top">
          <span className="brand">
            <span className="brand__mark" aria-hidden="true">T20</span>
            <span className="brand__name">{siteConfig.shortName}</span>
          </span>
          <button className="drawer__close" aria-label="Close menu" onClick={() => setOpen(false)}>
            <Icon name="close" />
          </button>
        </div>
        <nav aria-label="Mobile">
          {navigationConfig.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} end={item.path === "/"}>
              {item.label}
              <Icon name="chevron" size={22} className="chev" />
            </NavLink>
          ))}
        </nav>
        <div className="drawer__cta">
          <a className="btn btn--accent btn--block" href="/juniors" onClick={() => setOpen(false)}>
            Join The Blast
          </a>
          <a className="btn btn--ghost btn--block" href="/sponsors" onClick={() => setOpen(false)}>
            Sponsor The Competition
          </a>
        </div>
      </div>
    </header>
  );
}
