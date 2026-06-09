/**
 * Home.tsx
 * ---------------------------------------------------------------------------
 * The homepage. Sections are NOT hard-coded in order here — they're driven by
 * src/config/sectionsConfig.ts. We build a map of {sectionKey -> JSX} and then
 * render only the enabled sections, in the order the config lists them.
 *
 * This is the core "SportsWeb One builder" pattern: a future admin UI flips
 * `enabled` / reorders the array and the page recomposes with zero code edits.
 * ---------------------------------------------------------------------------
 */
import type { ReactElement } from "react";
import { homeSections, type HomeSectionKey } from "../config/sectionsConfig";

import { VideoHero } from "../components/sports/VideoHero";
import { FeatureMatch } from "../components/sports/FeatureMatch";
import { FixtureStrip } from "../components/sports/FixtureStrip";
import { MatchCentrePreview } from "../components/sports/MatchCentrePreview";
import { LadderTable } from "../components/sports/LadderTable";
import { ClubCard } from "../components/sports/ClubCard";
import { SponsorPanel } from "../components/sports/SponsorPanel";
import { NewsCard } from "../components/sports/NewsCard";
import { StorePanel } from "../components/sports/StorePanel";
import { CommunityFeed } from "../components/sports/CommunityFeed";
import { FanHubCard } from "../components/engagement/FanHubCard";
import { ChallengeCard } from "../components/engagement/ChallengeCard";
import { JuniorCTA } from "../components/engagement/JuniorCTA";
import { SectionHeading } from "../components/core/SectionHeading";
import { Button } from "../components/core/Button";

import { clubs } from "../data/clubs";
import { fanhubModules, challenges } from "../data/fanhub";
import { news } from "../data/news";
import { siteConfig } from "../config/siteConfig";

export function Home() {
  /** Each section keyed so the config can show/hide/reorder them. */
  const sectionMap: Record<HomeSectionKey, ReactElement> = {
    hero: <VideoHero key="hero" />,

    featureMatch: <FeatureMatch key="featureMatch" />,

    fixtureStrip: (
      <section className="section" key="fixtureStrip" aria-labelledby="h-fix">
        <div className="container">
          <SectionHeading
            id="h-fix"
            eyebrow="Fixtures & Results"
            title="This Round"
            sub="Swipe through what's on and what just happened."
            action={<Button href="/fixtures" variant="outline" small icon="arrow">All fixtures</Button>}
          />
          <FixtureStrip />
        </div>
      </section>
    ),

    matchCentrePreview: (
      <section className="section section--dark" key="matchCentrePreview" aria-labelledby="h-mc">
        <div className="container">
          <SectionHeading
            id="h-mc"
            eyebrow="Live Match Centre"
            title="Follow Every Ball"
            sub="Live scores, in-play voting and the season's best moments."
          />
          <MatchCentrePreview />
        </div>
      </section>
    ),

    clubs: (
      <section className="section" key="clubs" aria-labelledby="h-clubs">
        <div className="container">
          <SectionHeading
            id="h-clubs"
            eyebrow="The Teams"
            title="Ten Clubs. One Blast."
            sub="Find your team and follow them all season."
            action={<Button href="/clubs" variant="outline" small icon="arrow">View all clubs</Button>}
          />
          <div className="clubs__grid">
            {clubs.map((c) => (
              <ClubCard key={c.id} club={c} />
            ))}
          </div>
        </div>
      </section>
    ),

    ladderPreview: (
      <section className="section section--tint" key="ladderPreview" aria-labelledby="h-ladder">
        <div className="container">
          <SectionHeading
            id="h-ladder"
            eyebrow="Standings"
            title="The Ladder"
            sub="Top four make finals. Net run rate breaks ties."
            action={<Button href="/ladder" variant="outline" small icon="arrow">Full ladder</Button>}
          />
          <LadderTable limit={5} />
        </div>
      </section>
    ),

    fanhub: (
      <section className="section" key="fanhub" aria-labelledby="h-fanhub">
        <div className="container">
          <SectionHeading
            id="h-fanhub"
            eyebrow="FanHub"
            title="Get In The Game"
            sub="Predict, vote and earn rewards every round."
            action={<Button href="/fanhub" variant="outline" small icon="arrow">Explore FanHub</Button>}
          />
          <div className="fanhub__grid">
            {fanhubModules.map((m) => (
              <FanHubCard key={m.id} module={m} />
            ))}
          </div>
        </div>
      </section>
    ),

    juniors: (
      <section className="section juniors" key="juniors" aria-labelledby="h-juniors">
        <div className="container">
          <SectionHeading
            id="h-juniors"
            eyebrow="Junior Blast"
            title="Cricket Starts Here"
            sub="Free first sessions, easy sign-up and a heap of fun for new players."
          />
          <JuniorCTA />
        </div>
      </section>
    ),

    challenges: (
      <section className="section" key="challenges" aria-labelledby="h-ch">
        <div className="container">
          <SectionHeading
            id="h-ch"
            eyebrow="Blast Challenges"
            title="Take On The Challenges"
            sub="Sponsor-backed skills challenges for players and fans of all ages."
          />
          <div className="chgrid">
            {challenges.map((c) => (
              <ChallengeCard key={c.id} challenge={c} />
            ))}
          </div>
        </div>
      </section>
    ),

    newsVideo: (
      <section className="section section--tint" key="newsVideo" aria-labelledby="h-news">
        <div className="container">
          <SectionHeading
            id="h-news"
            eyebrow="News & Video"
            title="The Latest"
            sub="Match reports, highlights and stories from around the Blast."
            action={<Button href="/news" variant="outline" small icon="arrow">All news</Button>}
          />
          <div className="news__grid">
            {news.map((n, i) => (
              <NewsCard key={n.id} item={n} lead={i === 0} />
            ))}
          </div>
        </div>
      </section>
    ),

    sponsors: (
      <section className="section" key="sponsors" aria-labelledby="h-sp">
        <div className="container">
          <SectionHeading
            id="h-sp"
            eyebrow="Our Partners"
            title="Powered By Local Business"
            sub="The Blast is made possible by partners who back community cricket."
          />
          <SponsorPanel />
        </div>
      </section>
    ),

    store: (
      <section className="section section--tint" key="store" aria-labelledby="h-store">
        <div className="container">
          <SectionHeading
            id="h-store"
            eyebrow="Store & Fundraising"
            title="Wear The Blast"
            sub="Gear up and back your club. Every purchase supports local cricket."
            action={<Button href="/store" variant="outline" small icon="arrow">Visit store</Button>}
          />
          <StorePanel />
        </div>
      </section>
    ),

    communityFeed: (
      <section className="section" key="communityFeed" aria-labelledby="h-feed">
        <div className="container">
          <SectionHeading
            id="h-feed"
            eyebrow="Community"
            title="From The Grounds"
            sub={`Follow the action and tag ${siteConfig.social.hashtag}.`}
          />
          <CommunityFeed />
        </div>
      </section>
    ),
  };

  return (
    <>
      {homeSections
        .filter((s) => s.enabled)
        .map((s) => sectionMap[s.key])}
    </>
  );
}
