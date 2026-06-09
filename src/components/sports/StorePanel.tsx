/**
 * StorePanel.tsx
 * ---------------------------------------------------------------------------
 * T20 Store / fundraising teaser. Commerce is out of scope for v1 (no cart),
 * so each tile is a future product/fundraiser hook. Images fall back to a
 * branded placeholder when none is supplied.
 *
 * FUTURE: products + checkout via Zoho/Shopify (see StoreItem in types.ts).
 * ---------------------------------------------------------------------------
 */
import { storeItems } from "../../data/fanhub";
import { placeholder } from "../../config/mediaConfig";

export function StorePanel() {
  return (
    <div className="store__grid">
      {storeItems.map((item) => (
        <article key={item.id} className="stcard">
          <div className="stcard__img">
            <img
              src={item.image || placeholder(item.name, { w: 320, h: 240, bg: "152d52", fg: "f9c80e" })}
              alt={item.name}
              loading="lazy"
            />
            {item.badge && <span className="stcard__badge">{item.badge}</span>}
          </div>
          <div className="stcard__body">
            <span className="stcard__name">{item.name}</span>
            <span className="stcard__price">{item.priceLabel}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
