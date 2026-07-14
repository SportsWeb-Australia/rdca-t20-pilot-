/**
 * sponsors.ts — sponsor / partner data (tiered).
 * ---------------------------------------------------------------------------
 * Uses the KNOWN sponsor logos from the RDCA handover where available, mapped
 * into a premium tier hierarchy that helps SELL sponsorship (the brief asks
 * for this explicitly). Naming-rights + some activations are illustrative
 * placeholders to show the commercial model.
 *
 * TODO (real data): confirm tier placement and activations with RDCA.
 * FUTURE source: Supabase / CMS.
 * ---------------------------------------------------------------------------
 */
import type { Sponsor } from "./types";
import { assets, placeholder } from "../config/mediaConfig";

export const sponsors: Sponsor[] = [
  // Naming rights — placeholder slot to demonstrate the commercial ceiling.
  {
    id: "naming",
    name: "Your Brand Here",
    tier: "naming",
    logo: placeholder("NAMING RIGHTS PARTNER", { w: 480, h: 180, bg: "07172d", fg: "f9c80e" }),
    activation: "RDCA T20 Blast — presented by",
  },

  // Major partners (known logos)
  { id: "bendigo", name: "Bendigo Bank", tier: "major", logo: assets.sponsors.bendigoBank, url: "https://www.bendigobank.com.au", activation: "Match Centre Partner" },
  { id: "altegra", name: "Altegra", tier: "major", logo: assets.sponsors.altegra, url: "https://altegra.com.au", activation: "Player of the Match" },
  { id: "seda", name: "SEDA College", tier: "major", logo: assets.sponsors.seda, url: "https://sedacollege.com.au", activation: "Junior Blast Partner" },

  // Supporting partners
  { id: "grant", name: "Grant Professionals", tier: "supporting", logo: assets.sponsors.grantProfessionals, activation: "Six of the Round" },
  { id: "fov", name: "Field of View", tier: "supporting", logo: assets.sponsors.fieldOfView, activation: "Catch of the Round" },
  { id: "dorset", name: "Dorset Gardens Hotel", tier: "matchday", logo: assets.sponsors.dorsetGardens, activation: "Family Blast Day" },
  { id: "fridge", name: "Fridge Repairs Today", tier: "challenge", logo: assets.sponsors.fridgeRepairs, activation: "Fastest Bowler Challenge" },

  // Community / technology partners
  { id: "goodsports", name: "Good Sports", tier: "community", logo: assets.sponsors.goodSports, activation: "Community Partner" },
  { id: "sportsweb", name: "SportsWeb One", tier: "technology", logo: placeholder("SportsWeb One", { w: 320, h: 120, bg: "07172d", fg: "00d4ff" }), activation: "Technology Partner" },
];

/** Group by tier for the SponsorPanel hierarchy. */
export const sponsorsByTier = () => {
  const order: Sponsor["tier"][] = [
    "naming", "major", "supporting", "matchday", "challenge", "junior", "community", "technology",
  ];
  return order
    .map((tier) => ({ tier, items: sponsors.filter((s) => s.tier === tier) }))
    .filter((group) => group.items.length > 0);
};

export const tierLabel: Record<Sponsor["tier"], string> = {
  naming: "Naming Rights Partner",
  major: "Major Partners",
  supporting: "Supporting Partners",
  matchday: "Match-Day Partners",
  challenge: "Challenge Partners",
  junior: "Junior Program Partners",
  community: "Community Partners",
  technology: "Technology Partner",
};
