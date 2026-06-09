/**
 * NewsCard.tsx
 * ---------------------------------------------------------------------------
 * News / match report / video tile. `lead` makes the first card larger for a
 * magazine-style grid. Video items show a play affordance + duration.
 *
 * FUTURE: news from Supabase/CMS, video from Cloudinary (see ContentItem).
 * ---------------------------------------------------------------------------
 */
import type { ContentItem } from "../../data/types";
import { formatShortDate } from "../../lib/datetime";

interface NewsCardProps {
  item: ContentItem;
  lead?: boolean;
}

export function NewsCard({ item, lead = false }: NewsCardProps) {
  const isVideo = item.type === "video";

  return (
    <article className={`ncard${lead ? " ncard--lead" : ""}`}>
      <a className="ncard__media" href="#" aria-label={item.title}>
        <img className="ncard__img" src={item.image} alt="" loading="lazy" />
        <span className="ncard__cat">{item.category}</span>
        {isVideo && (
          <>
            <span className="ncard__play"><span /></span>
            {item.durationLabel && <span className="ncard__dur">{item.durationLabel}</span>}
          </>
        )}
      </a>
      <div className="ncard__body">
        <span className="ncard__date">{formatShortDate(item.date)}</span>
        <h3 className="ncard__title">{item.title}</h3>
        <p className="ncard__excerpt">{item.excerpt}</p>
      </div>
    </article>
  );
}
