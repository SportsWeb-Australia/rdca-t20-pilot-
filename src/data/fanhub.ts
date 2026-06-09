/**
 * fanhub.ts — FanHub engagement modules.
 * ---------------------------------------------------------------------------
 * Non-functional in v1 but designed as real future modules. Each card can map
 * to a future feature route. Sponsors are attached to show the commercial
 * model. Icons resolve in components/core/Icon.tsx.
 * ---------------------------------------------------------------------------
 */
import type { FanHubModule } from "./types";

export const fanhubModules: FanHubModule[] = [
  { id: "predictor", title: "T20 Predictor", description: "Pick the winner, total runs and top scorer. Climb the leaderboard each round.", icon: "predict", cta: "Make a pick", accent: "accent", badge: "Round open" },
  { id: "potm", title: "Player of the Match Voting", description: "Your vote decides the official Player of the Match.", icon: "star", cta: "Vote now", accent: "accentTwo", sponsor: "Altegra" },
  { id: "catch", title: "Catch of the Round", description: "Nominate and vote for the season's best grab.", icon: "catch", cta: "Vote", accent: "accent", sponsor: "Field of View" },
  { id: "six", title: "Six of the Round", description: "The biggest hits, decided by the fans.", icon: "six", cta: "Vote", accent: "secondary", sponsor: "Grant Professionals" },
  { id: "checkin", title: "Match Day Check-In", description: "Check in at the ground to unlock rewards and prizes.", icon: "pin", cta: "Check in", accent: "accentThree" },
  { id: "rewards", title: "Fan Rewards", description: "Earn points for predictions, check-ins and referrals. Redeem for gear.", icon: "gift", cta: "View rewards", accent: "accentTwo" },
  { id: "trivia", title: "Blast Trivia", description: "Weekly cricket trivia with sponsor prizes up for grabs.", icon: "quiz", cta: "Play", accent: "accent" },
  { id: "offers", title: "Sponsor Offers", description: "Exclusive deals from Blast partners for checked-in fans.", icon: "tag", cta: "See offers", accent: "secondary" },
];

/* ------------------------------------------------------------------------- */

/**
 * challenges.ts — T20 sponsor-friendly challenges.
 */
import type { Challenge, JuniorProgram, StoreItem } from "./types";

export const challenges: Challenge[] = [
  { id: "fastest-bowler", title: "Fastest Bowler Challenge", blurb: "Radar gun at every Family Blast Day. Top the leaderboard.", icon: "speed", sponsor: "Fridge Repairs Today" },
  { id: "longest-six", title: "Longest Six Challenge", blurb: "Measured sixes, season-long board, big prizes.", icon: "six", sponsor: "Grant Professionals" },
  { id: "catch", title: "Catch Challenge", blurb: "High-ball catching gauntlet for all ages.", icon: "catch", sponsor: "Field of View" },
  { id: "trick-shot", title: "Trick Shot Challenge", blurb: "Film it, post it, tag us. Best clip wins.", icon: "spark", },
  { id: "beat-the-pro", title: "Beat The Pro", blurb: "Face a local star and try to take them down.", icon: "target" },
  { id: "club-v-club", title: "Club v Club Challenges", blurb: "Inter-club skills battles for bragging rights.", icon: "vs" },
];

/* ------------------------------------------------------------------------- */

/**
 * juniors.ts — Junior recruitment modules (one of the strongest sections).
 */
export const juniorPrograms: JuniorProgram[] = [
  { id: "try-free", title: "Try Cricket Free", description: "A no-cost first session at your local club. Bats and balls provided.", icon: "ball", cta: "Book a free session", highlight: true, sponsor: "SEDA College" },
  { id: "register", title: "Register Your Child", description: "Sign up for the Junior Blast in minutes.", icon: "plus", cta: "Register now", highlight: true },
  { id: "find-club", title: "Find Your Local Club", description: "Ten clubs across Ringwood & district. Find your closest.", icon: "pin", cta: "Find a club" },
  { id: "bring-a-mate", title: "Bring A Mate Round", description: "Bring a friend who's never played — both get a prize.", icon: "mates", cta: "Learn more" },
  { id: "blast-night", title: "Junior Blast Night", description: "Lights, music, games and a real T20 under-card.", icon: "night", cta: "Join a Blast Night" },
  { id: "fastest-bowler", title: "Fastest Bowler Challenge", description: "How fast can you bowl? Find out on the radar gun.", icon: "speed", cta: "Take the challenge" },
  { id: "catch", title: "Catching Challenge", description: "Test your hands in the junior catching gauntlet.", icon: "catch", cta: "Take the challenge" },
  { id: "meet-players", title: "Meet Local Players", description: "Senior Blast players coach and play with the juniors.", icon: "star", cta: "See dates" },
];

/* ------------------------------------------------------------------------- */

/**
 * store.ts — T20 Store / merchandise / fundraising (future commerce).
 */
export const storeItems: StoreItem[] = [
  { id: "hoodie", name: "Blast Hoodie", priceLabel: "From $65", image: "", category: "apparel", badge: "New" },
  { id: "cap", name: "Blast Cap", priceLabel: "From $30", image: "", category: "headwear" },
  { id: "shirt", name: "Playing Shirt (Replica)", priceLabel: "From $55", image: "", category: "apparel" },
  { id: "club-pack", name: "Club Supporter Pack", priceLabel: "From $45", image: "", category: "club" },
  { id: "raffle", name: "Blast Season Raffle", priceLabel: "$10 / ticket", image: "", category: "fundraiser", badge: "Fundraiser" },
  { id: "sponsor-offer", name: "Partner Offers", priceLabel: "Members", image: "", category: "offer" },
];
