/**
 * Button.tsx — reusable button / link button.
 * Variants map to the .btn--* classes in globals.css.
 */
import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "accent" | "ghost" | "outline";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  small?: boolean;
  block?: boolean;
  icon?: IconName;
  onClick?: () => void;
  ariaLabel?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  small,
  block,
  icon,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const cls = [
    "btn",
    `btn--${variant}`,
    small ? "btn--sm" : "",
    block ? "btn--block" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {children}
      {icon && <Icon name={icon} size={small ? 15 : 17} />}
    </>
  );

  if (href) {
    return (
      <a className={cls} href={href} aria-label={ariaLabel} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button className={cls} onClick={onClick} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
