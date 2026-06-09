/**
 * mediaConfig.ts
 * ---------------------------------------------------------------------------
 * Single source of truth for images, logos and video.
 *
 * The known Cloudinary assets from the RDCA handover are listed here so they
 * are easy to swap or extend. Anything not yet supplied falls back to a
 * clearly-labelled placeholder (see `placeholder()`), so the prototype never
 * renders a broken image.
 *
 * FUTURE: when the Cloudinary library or a CMS is wired in, replace these
 * string constants or load them from `import.meta.env.VITE_CLOUDINARY_BASE`.
 * ---------------------------------------------------------------------------
 */

/** Known Cloudinary delivery base from the RDCA handover. */
export const CLOUDINARY_BASE =
  "https://res.cloudinary.com/dozdbhjhs/image/upload/";

const cloud = (path: string) => `${CLOUDINARY_BASE}${path}`;

/**
 * Inline SVG placeholder so the prototype works fully offline / without the
 * real assets. Label text makes it obvious what belongs in each slot.
 */
export const placeholder = (
  label: string,
  opts: { w?: number; h?: number; bg?: string; fg?: string } = {},
): string => {
  const { w = 400, h = 300, bg = "0d1f3c", fg = "00d4ff" } = opts;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>
    <rect width='100%' height='100%' fill='#${bg}'/>
    <rect x='8' y='8' width='${w - 16}' height='${h - 16}' fill='none' stroke='#${fg}' stroke-width='2' stroke-dasharray='8 6'/>
    <text x='50%' y='50%' fill='#${fg}' font-family='Arial, sans-serif' font-size='${Math.round(w / 18)}' font-weight='700' text-anchor='middle' dominant-baseline='middle'>${label}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

/**
 * Known RDCA / sponsor assets (from the handover doc). These are reused where
 * appropriate. TODO: confirm each renders for the T20 brand before launch.
 */
export const assets = {
  // Brand / hero
  heroBackground: cloud("q_auto/f_auto/v1780756094/RDCA_Hero_bucegz.png"),
  newsHero: cloud(
    "q_auto/f_auto/v1780759506/RDCA_GF_CroydonNth_v_Powelltown_23-3-25-050_p6l8qs.jpg",
  ),
  rdcaLogo: cloud("v1780757750/rdca_logo-_Transparent_grugfj.png"),
  bbt20Logo: cloud(
    "v1780771648/Untitled-design---2025-01-09T100835635-m5oigune_nluqhv.png",
  ),

  // TODO: replace with the real T20 Blast hero video once produced/uploaded.
  // The VideoHero component is built to swap this for an .mp4/.webm or a
  // Cloudinary video URL with zero markup changes.
  heroVideo: "", // empty => VideoHero shows the fallback image (heroBackground)

  // Sponsor logos (known)
  sponsors: {
    seda: cloud("v1780760760/seda-vic-logo_cxgyvs.svg"),
    grantProfessionals: cloud("v1780769907/images_18_iq66l4.png"),
    altegra: cloud("v1780760760/Altegra.com_.au-logo_350x100_tqmti7.png"),
    fieldOfView: cloud("v1780760760/FOV_p2scu1.avif"),
    dorsetGardens: cloud("v1780769044/images_4_x9mrk5.jpg"),
    bendigoBank: cloud("v1780769147/Resized_Sponsor_logos10_jgn2lt.avif"),
    fridgeRepairs: cloud("v1780769263/Fridge-Repairs-Melbourne_gxvytd.webp"),
    goodSports: cloud("v1780770434/good-sports-social.width-1280_uvdayn.png"),
  },
} as const;
