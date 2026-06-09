/**
 * CommunityFeed.tsx
 * ---------------------------------------------------------------------------
 * Social wall — a grid of Instagram/TikTok/Facebook style tiles to show the
 * community energy. Static in v1.
 *
 * FUTURE: pull from a social aggregator or Cloudinary-hosted UGC. The
 * SocialPost type already carries platform + isVideo for that.
 * ---------------------------------------------------------------------------
 */
import { socialFeed } from "../../data/videos";
import { siteConfig } from "../../config/siteConfig";
import { Icon, type IconName } from "../core/Icon";

export function CommunityFeed() {
  return (
    <div>
      <div className="feed__grid">
        {socialFeed.map((post) => (
          <a key={post.id} className="fpost" href="#" aria-label={post.caption}>
            <img src={post.image} alt="" loading="lazy" />
            <span className="fpost__overlay" aria-hidden="true" />
            <span className="fpost__meta">
              <Icon name={post.platform as IconName} size={16} />
            </span>
            {post.isVideo && (
              <span className="fpost__play" aria-hidden="true">
                <Icon name="play" size={18} />
              </span>
            )}
            <span className="fpost__cap">{post.caption}</span>
          </a>
        ))}
      </div>
      <p style={{ textAlign: "center", marginTop: 20 }}>
        Tag <b>{siteConfig.social.hashtag}</b> to feature on the wall.
      </p>
    </div>
  );
}
