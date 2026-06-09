/**
 * MobileQuickNav.tsx — sticky bottom quick-action bar (mobile only).
 * Gives the site a PWA/app feel on phones. Hidden >=1000px via CSS.
 * Items + icons come from mobileQuickNav config.
 */
import { NavLink } from "react-router-dom";
import { mobileQuickNav } from "../../config/navigationConfig";
import { Icon, type IconName } from "./Icon";

export function MobileQuickNav() {
  return (
    <nav className="quicknav" aria-label="Quick navigation">
      {mobileQuickNav.map((item) => (
        <NavLink
          key={item.path + item.label}
          to={item.path}
          className={({ isActive }) => (isActive ? "is-active" : "")}
          end={item.path === "/"}
        >
          <Icon name={item.icon as IconName} size={22} className="qn-ic" />
          {item.short ?? item.label}
        </NavLink>
      ))}
    </nav>
  );
}
