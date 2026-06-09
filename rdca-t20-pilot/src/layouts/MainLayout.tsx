/**
 * MainLayout.tsx
 * ---------------------------------------------------------------------------
 * The app shell: skip link, sticky Header, page content, Footer, and the
 * mobile sticky quick-nav. Every page renders inside this via the router.
 *
 * `.has-quicknav` adds bottom padding so the sticky mobile bar never covers
 * page content / the footer.
 * ---------------------------------------------------------------------------
 */
import type { ReactNode } from "react";
import { Header } from "../components/core/Header";
import { Footer } from "../components/core/Footer";
import { MobileQuickNav } from "../components/core/MobileQuickNav";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="app has-quicknav">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <MobileQuickNav />
    </div>
  );
}
