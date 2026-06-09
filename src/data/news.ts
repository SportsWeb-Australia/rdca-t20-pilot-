/**
 * news.ts — PLACEHOLDER news + media content.
 * ---------------------------------------------------------------------------
 * TODO (real data): FUTURE source Supabase / CMS for news, Cloudinary for
 * video. Replace `image`/`videoUrl` with real assets. The `newsHero` asset is
 * the known RDCA grand-final image from the handover.
 * ---------------------------------------------------------------------------
 */
import type { ContentItem } from "./types";
import { assets, placeholder } from "../config/mediaConfig";

const img = (label: string, bg = "152d52") =>
  placeholder(label, { w: 640, h: 400, bg, fg: "00d4ff" });

export const news: ContentItem[] = [
  {
    id: "n-1",
    type: "report",
    title: "Knights edge Cobras in a Quambee Reserve thriller",
    excerpt:
      "A composed final over sealed a 12-run win for North Ringwood under lights as the Blast delivered its closest finish yet.",
    image: assets.newsHero,
    date: new Date(Date.now() - 3 * 864e5).toISOString(),
    category: "Match Report",
  },
  {
    id: "n-2",
    type: "video",
    title: "Six of the Round — into the car park!",
    excerpt: "Norwood's opener takes on the long boundary and wins. Presented by Grant Professionals.",
    image: img("VIDEO — Six of the Round", "07172d"),
    date: new Date(Date.now() - 2 * 864e5).toISOString(),
    category: "Highlights",
    videoUrl: "", // TODO: Cloudinary video URL
    durationLabel: "0:42",
  },
  {
    id: "n-3",
    type: "preview",
    title: "Friday Night Blast preview: Knights host Heat",
    excerpt:
      "Top-two implications under lights. Two of the competition's biggest hitters go head-to-head at North Ringwood.",
    image: img("MATCH PREVIEW"),
    date: new Date(Date.now() - 1 * 864e5).toISOString(),
    category: "Preview",
  },
  {
    id: "n-4",
    type: "story",
    title: "From Junior Blast to first XI: meet Priya",
    excerpt:
      "A Junior Blast Night two seasons ago started it all. Now she's opening the bowling for Mooroolbark.",
    image: img("JUNIOR STORY", "0a8a5f"),
    date: new Date(Date.now() - 5 * 864e5).toISOString(),
    category: "Junior",
  },
  {
    id: "n-5",
    type: "story",
    title: "Why Bendigo Bank backs the Blast",
    excerpt:
      "Our Match Centre Partner on supporting community cricket and the families who make it happen.",
    image: img("SPONSOR STORY", "1b3a8c"),
    date: new Date(Date.now() - 6 * 864e5).toISOString(),
    category: "Sponsor",
  },
  {
    id: "n-6",
    type: "news",
    title: "Family Blast Day returns to Bayswater Park",
    excerpt:
      "Free entry, sausage sizzle, junior skills zone and the Fastest Bowler radar gun. Bring a mate.",
    image: img("EVENT", "c2154a"),
    date: new Date(Date.now() - 7 * 864e5).toISOString(),
    category: "Events",
  },
];

export const featuredNews = (): ContentItem => news[0];
