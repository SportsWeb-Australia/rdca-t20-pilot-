/**
 * pages.tsx
 * ---------------------------------------------------------------------------
 * Inner route pages. Where the data model already supports it, these show real
 * (placeholder-data) content by reusing the same components as the homepage —
 * proving the components are genuinely reusable. The rest are honest stubs.
 *
 * Grids use a small inline `auto-fill` layout so cards that are tuned for the
 * homepage strip also work full-width here with no extra CSS.
 * ---------------------------------------------------------------------------
 */
import { PageHeader, PageStub } from "./PageShell";
import type { CSSProperties } from "react";
import { MatchCard } from "../components/sports/MatchCard";
import { LadderTable } from "../components/sports/LadderTable";
import { ClubCard } from "../components/sports/ClubCard";
import { SponsorPanel } from "../components/sports/SponsorPanel";
import { NewsCard } from "../components/sports/NewsCard";
import { StorePanel } from "../components/sports/StorePanel";
import { MatchCentrePreview } from "../components/sports/MatchCentrePreview";
import { FanHubCard } from "../components/engagement/FanHubCard";
import { ChallengeCard } from "../components/engagement/ChallengeCard";
import { JuniorCTA } from "../components/engagement/JuniorCTA";
import { SectionHeading } from "../components/core/SectionHeading";

import { upcomingMatches, completedMatches } from "../data/fixtures";
import { clubs } from "../data/clubs";
import { fanhubModules, challenges } from "../data/fanhub";
import { news } from "../data/news";
import { siteConfig } from "../config/siteConfig";

const cardGrid: CSSProperties = {
  display: "grid",
  gap: 16,
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
};

/* ------------------------------------------------------------------ Fixtures */
export function Fixtures() {
  return (
    <>
      <PageHeader eyebrow="Fixtures" title="Fixtures" sub="Every upcoming match across the RDCA T20 Blast. Live data will sync from PlayHQ." />
      <section className="section">
        <div className="container">
          <div style={cardGrid}>
            {upcomingMatches().map((m) => <MatchCard key={m.id} match={m} />)}
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------- Results */
export function Results() {
  return (
    <>
      <PageHeader eyebrow="Results" title="Results" sub="Recent results and match reports." />
      <section className="section">
        <div className="container">
          <div style={cardGrid}>
            {completedMatches().map((m) => <MatchCard key={m.id} match={m} />)}
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------- Ladder */
export function Ladder() {
  return (
    <>
      <PageHeader eyebrow="Standings" title="Ladder" sub="Top four qualify for finals. Net run rate separates equal teams." />
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <LadderTable />
        </div>
      </section>
    </>
  );
}

/* --------------------------------------------------------------------- Clubs */
export function Clubs() {
  return (
    <>
      <PageHeader eyebrow="The Teams" title="Clubs" sub="Ten clubs across Ringwood & district. Placeholder franchises until confirmed." />
      <section className="section">
        <div className="container">
          <div className="clubs__grid">
            {clubs.map((c) => <ClubCard key={c.id} club={c} />)}
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------- Match Centre */
export function MatchCentre() {
  return (
    <>
      <PageHeader eyebrow="Live" title="Match Centre" sub="Live scores, in-play voting and the moments of the round." />
      <section className="section section--dark">
        <div className="container">
          <MatchCentrePreview />
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------- FanHub */
export function FanHub() {
  return (
    <>
      <PageHeader eyebrow="FanHub" title="FanHub" sub="Predict, vote, check in and earn rewards. Interactive features land in a later phase." />
      <section className="section">
        <div className="container">
          <div className="fanhub__grid">
            {fanhubModules.map((m) => <FanHubCard key={m.id} module={m} />)}
          </div>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="Blast Challenges" title="Challenges" />
          <div className="chgrid">
            {challenges.map((c) => <ChallengeCard key={c.id} challenge={c} />)}
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------- Juniors */
export function Juniors() {
  return (
    <>
      <PageHeader eyebrow="Junior Blast" title="Juniors" sub="The most important pathway in the competition — getting new kids into cricket." />
      <section className="section juniors">
        <div className="container">
          <JuniorCTA />
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ Sponsors */
export function Sponsors() {
  return (
    <>
      <PageHeader eyebrow="Partners" title="Sponsors" sub="Naming rights through to community partners — the commercial engine of the Blast." />
      <section className="section">
        <div className="container">
          <SponsorPanel />
        </div>
      </section>
    </>
  );
}

/* ---------------------------------------------------------------------- News */
export function News() {
  return (
    <>
      <PageHeader eyebrow="News & Video" title="News" sub="Reports, highlights and stories from around the grounds." />
      <section className="section">
        <div className="container">
          <div className="news__grid">
            {news.map((n, i) => <NewsCard key={n.id} item={n} lead={i === 0} />)}
          </div>
        </div>
      </section>
    </>
  );
}

/* --------------------------------------------------------------------- Store */
export function Store() {
  return (
    <>
      <PageHeader eyebrow="Store & Fundraising" title="Store" sub="Merch, supporter packs and fundraisers. Checkout integration comes later (Zoho/Shopify)." />
      <section className="section">
        <div className="container">
          <StorePanel />
        </div>
      </section>
    </>
  );
}

/* --------------------------------------------------------------------- About */
export function About() {
  return (
    <PageStub eyebrow="About" title="About The Blast">
      The RDCA T20 Blast is the short-form competition of the {siteConfig.associationName},
      built to bring Big Bash energy to local cricket. Full history, format and contacts coming soon.
    </PageStub>
  );
}

/* ------------------------------------------------------------------- Contact */
export function Contact() {
  return (
    <PageStub eyebrow="Contact" title="Get In Touch">
      For competition, sponsorship or junior enquiries, email{" "}
      <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      A full contact form is on the roadmap.
    </PageStub>
  );
}

/* ------------------------------------------------------------------ NotFound */
export function NotFound() {
  return (
    <PageStub eyebrow="404" title="Not Found">
      That page isn't here. It may be part of a later phase of the Blast build.
    </PageStub>
  );
}
