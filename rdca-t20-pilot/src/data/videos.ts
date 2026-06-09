/**
 * videos.ts — PLACEHOLDER community / social feed.
 * ---------------------------------------------------------------------------
 * Drives the Instagram/TikTok-style community feed. TODO (real data): wire to
 * the real RDCA T20 social accounts (see siteConfig.social) or a CMS. FUTURE:
 * Cloudinary / social embed.
 * ---------------------------------------------------------------------------
 */
import type { SocialPost } from "./types";
import { placeholder } from "../config/mediaConfig";

const tile = (label: string, bg: string) =>
  placeholder(label, { w: 400, h: 400, bg, fg: "ffffff" });

export const socialFeed: SocialPost[] = [
  { id: "s-1", platform: "tiktok", image: tile("REEL — Last over drama", "07172d"), caption: "That final over 😱 #RDCAT20Blast", likes: 1280, isVideo: true },
  { id: "s-2", platform: "instagram", image: tile("FAN PHOTO — Family Blast Day", "1b3a8c"), caption: "Best night of the season with the kids 🏏", likes: 642 },
  { id: "s-3", platform: "instagram", image: tile("CLUB POST — Nitro celebrate", "0a8a5f"), caption: "Top of the table! 💚 #NorwoodNitro", likes: 503 },
  { id: "s-4", platform: "youtube", image: tile("VIDEO — Catch of the Round", "d2491b"), caption: "How did he hold that?! 🔥", likes: 2110, isVideo: true },
  { id: "s-5", platform: "instagram", image: tile("JUNIOR POST — first wicket", "6a1bb0"), caption: "First wicket in the Junior Blast 🙌", likes: 388 },
  { id: "s-6", platform: "tiktok", image: tile("REEL — Beat the Pro", "c2154a"), caption: "Beat the Pro challenge — your turn 👀", likes: 974, isVideo: true },
];
