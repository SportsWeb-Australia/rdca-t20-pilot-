#!/usr/bin/env python3
"""
build_preview.py
-------------------------------------------------------------------------------
Generates a SELF-CONTAINED preview.html for the RDCA T20 Blast homepage.

Why this exists: the build sandbox has no network, so `npm install` + `vite`
can't run here. This script renders a static mirror of the homepage using the
SAME CSS (theme.css + globals.css inlined) and the SAME placeholder data as the
React app, so the design can be viewed instantly by opening one file.

It is NOT the app — it's a faithful static snapshot for review. The real,
interactive site is the Vite/React project (run `npm install && npm run dev`).
-------------------------------------------------------------------------------
"""
import html
from urllib.parse import quote

ROOT = "/home/claude/rdca-t20-pilot"

# --- replicate placeholder() / logo() / tile() / img() from the app ----------
def placeholder(label, w=400, h=300, bg="0d1f3c", fg="00d4ff"):
    fs = round(w / 18)
    svg = (
        f"<svg xmlns='http://www.w3.org/2000/svg' width='{w}' height='{h}' viewBox='0 0 {w} {h}'>"
        f"<rect width='100%' height='100%' fill='#{bg}'/>"
        f"<rect x='8' y='8' width='{w-16}' height='{h-16}' fill='none' stroke='#{fg}' "
        f"stroke-width='2' stroke-dasharray='8 6'/>"
        f"<text x='50%' y='50%' fill='#{fg}' font-family='Arial, sans-serif' font-size='{fs}' "
        f"font-weight='700' text-anchor='middle' dominant-baseline='middle'>{label}</text></svg>"
    )
    return "data:image/svg+xml;utf8," + quote(svg)

def logo(code, color):
    return placeholder(code, 160, 160, color.replace("#", ""), "ffffff")

def tile(label, bg="0d1f3c"):
    return placeholder(label, 600, 600, bg, "ffffff")

def img(label, bg="152d52"):
    return placeholder(label, 800, 500, bg, "f9c80e")

CLOUD = "https://res.cloudinary.com/dozdbhjhs/image/upload/"
HERO_IMG = CLOUD + "q_auto/f_auto/v1780756094/RDCA_Hero_bucegz.png"
NEWS_HERO = CLOUD + "q_auto/f_auto/v1780759506/RDCA_GF_CroydonNth_v_Powelltown_23-3-25-050_p6l8qs.jpg"

# --- icons (subset used on the homepage) -------------------------------------
ICON = {
    "calendar": "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
    "clock": "M12 12m-9 0a9 9 0 1 0 18 0 9 9 0 0 0-18 0M12 7v5l3 2",
    "location": "M12 21s-7-6.7-7-12a7 7 0 0 1 14 0c0 5.3-7 12-7 12zM12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0",
    "arrow": "M5 12h14M13 6l6 6-6 6",
    "live": "M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14M8 8a5 5 0 0 0 0 8M16 8a5 5 0 0 1 0 8",
    "plus": "M12 5v14M5 12h14",
    "predict": "M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0M12 7v5l3 2",
    "star": "M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18l-5.8 3.4 1.1-6.5L2.6 9.8l6.5-.9L12 3z",
    "catch": "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M7 13a5 5 0 0 0 10 0",
    "six": "M9 7l-3 5a4 4 0 1 0 7-2c-1.5-1.5-4-2-4-3 0-1 1.5-2 4-1",
    "speed": "M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M13.4 12.6 19 7M5 20a9 9 0 1 1 14 0",
    "spark": "M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3",
    "target": "M12 12m-9 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0M12 12m-5 0a5 5 0 1 0 10 0 5 5 0 1 0-10 0M12 12m-1 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0",
    "vs": "M4 5l4 14M8 5L4 19M16 5v14M16 5h3a3 3 0 0 1 0 6h-3",
    "ball": "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M12 2v20M4 7c4 2 12 2 16 0M4 17c4-2 12-2 16 0",
    "mates": "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6M3 20a6 6 0 0 1 12 0M17 11a3 3 0 1 0 0-6M16 20a6 6 0 0 1 5-3",
    "night": "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z",
    "gift": "M20 12v9H4v-9M2 7h20v5H2zM12 22V7M12 7S9.5 2 7 4s2 3 5 3M12 7s2.5-5 5-3-2 3-5 3",
    "quiz": "M12 18h.01M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.5-3 4M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z",
    "tag": "M3 7v5l9 9 7-7-9-9H5a2 2 0 0 0-2 2zM7.5 7.5h.01",
    "pin": "M12 21s-7-6.7-7-12a7 7 0 0 1 14 0c0 5.3-7 12-7 12zM12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0",
    "play": "M6 4l14 8-14 8V4z",
    "instagram": "M4 4h16v16H4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8M16.5 7.5h.01",
    "tiktok": "M16 4c.5 3 2.5 4.5 5 4.7V12c-2 0-3.7-.6-5-1.6V16a5.5 5.5 0 1 1-5.5-5.5c.4 0 .7 0 1 .1v3.2a2.4 2.4 0 1 0 1.5 2.2V4h3z",
    "youtube": "M22 8.2a3 3 0 0 0-2.1-2.1C18 5.5 12 5.5 12 5.5s-6 0-7.9.6A3 3 0 0 0 2 8.2 31 31 0 0 0 1.5 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.6 7.9.6 7.9.6s6 0 7.9-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22.5 12 31 31 0 0 0 22 8.2zM10 15V9l5 3-5 3z",
    "facebook": "M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8a1 1 0 0 1 1-1z",
    "menu": "M3 6h18M3 12h18M3 18h18",
}
FILLED = {"play", "tiktok", "youtube"}

def icon(name, size=20, color=None):
    d = ICON.get(name, "")
    style = f' style="color:{color}"' if color else ""
    if name in FILLED:
        return (f'<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="currentColor"{style} '
                f'aria-hidden="true"><path d="{d}"/></svg>')
    return (f'<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
            f'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"{style} aria-hidden="true">'
            f'<path d="{d}"/></svg>')

def esc(s):
    return html.escape(str(s), quote=True)

# --- data --------------------------------------------------------------------
CLUBS = [
    ("North Ringwood Knights", "North Ringwood CC", "Defenders of the north.", "#1b3a8c", "#f9c80e", "NRW"),
    ("Heathmont Heat", "Heathmont CC", "Bring the heat.", "#d2491b", "#ffd000", "HMT"),
    ("Norwood Nitro", "Norwood CC", "Fast. Fearless.", "#0a8a5f", "#c6f000", "NOR"),
    ("South Croydon Strikers", "South Croydon CC", "Strike first.", "#6a1bb0", "#00d4ff", "SCR"),
    ("Croydon Cobras", "Croydon CC", "Strike from the grass.", "#0c6e6e", "#f9c80e", "CRO"),
    ("Bayswater Park Blaze", "Bayswater Park CC", "Light it up.", "#c2154a", "#ffb000", "BWP"),
    ("Mooroolbark Magic", "Mooroolbark CC", "Make it magic.", "#1e6fd6", "#ff3d7f", "MBK"),
    ("Montrose Mavericks", "Montrose CC", "Play your own way.", "#b34700", "#00d4ff", "MON"),
    ("Scoresby Scorpions", "Scoresby CC", "Sting in the tail.", "#2b2b8f", "#c6f000", "SCB"),
    ("Wonga Park Warriors", "Wonga Park CC", "Defend the valley.", "#0f7a3d", "#f9c80e", "WPK"),
]
CLUB_BY_CODE = {c[5]: c for c in CLUBS}

LADDER = [
    (1, "NOR", 4, 4, 0, 16, 1.84), (2, "NRW", 4, 3, 1, 12, 1.12),
    (3, "MBK", 4, 3, 1, 12, 0.76), (4, "SCR", 4, 2, 1, 10, 0.41),
    (5, "BWP", 4, 2, 2, 8, 0.05),
]

FANHUB = [
    ("predict", "T20 Predictor", "Pick the winner, total runs and top scorer. Climb the leaderboard each round.", "Make a pick", "accent", "Round open", None),
    ("star", "Player of the Match Voting", "Your vote decides the official Player of the Match.", "Vote now", "accentTwo", None, "Altegra"),
    ("catch", "Catch of the Round", "Nominate and vote for the season's best grab.", "Vote", "accent", None, "Field of View"),
    ("six", "Six of the Round", "The biggest hits, decided by the fans.", "Vote", "secondary", None, "Grant Professionals"),
    ("pin", "Match Day Check-In", "Check in at the ground to unlock rewards and prizes.", "Check in", "accentThree", None, None),
    ("gift", "Fan Rewards", "Earn points for predictions, check-ins and referrals. Redeem for gear.", "View rewards", "accentTwo", None, None),
    ("quiz", "Blast Trivia", "Weekly cricket trivia with sponsor prizes up for grabs.", "Play", "accent", None, None),
    ("tag", "Sponsor Offers", "Exclusive deals from Blast partners for checked-in fans.", "See offers", "secondary", None, None),
]
ACCENT_VAR = {"accent": "var(--color-accent)", "accentTwo": "var(--color-accent-2)",
              "accentThree": "var(--color-accent-3)", "secondary": "var(--color-secondary)"}

CHALLENGES = [
    ("speed", "Fastest Bowler Challenge", "Radar gun at every Family Blast Day. Top the leaderboard.", "Fridge Repairs Today"),
    ("six", "Longest Six Challenge", "Measured sixes, season-long board, big prizes.", "Grant Professionals"),
    ("catch", "Catch Challenge", "High-ball catching gauntlet for all ages.", "Field of View"),
    ("spark", "Trick Shot Challenge", "Film it, post it, tag us. Best clip wins.", None),
    ("target", "Beat The Pro", "Face a local star and try to take them down.", None),
    ("vs", "Club v Club Challenges", "Inter-club skills battles for bragging rights.", None),
]

JUNIORS = [
    ("ball", "Try Cricket Free", "A no-cost first session at your local club. Bats and balls provided.", "Book a free session", True, "SEDA College"),
    ("plus", "Register Your Child", "Sign up for the Junior Blast in minutes.", "Register now", True, None),
    ("pin", "Find Your Local Club", "Ten clubs across Ringwood & district. Find your closest.", "Find a club", False, None),
    ("mates", "Bring A Mate Round", "Bring a friend who's never played — both get a prize.", "Learn more", False, None),
    ("night", "Junior Blast Night", "Lights, music, games and a real T20 under-card.", "Join a Blast Night", False, None),
    ("speed", "Fastest Bowler Challenge", "How fast can you bowl? Find out on the radar gun.", "Take the challenge", False, None),
    ("catch", "Catching Challenge", "Test your hands in the junior catching gauntlet.", "Take the challenge", False, None),
    ("star", "Meet Local Players", "Senior Blast players coach and play with the juniors.", "See dates", False, None),
]

NEWS = [
    ("Match Report", "Knights edge Cobras in a Quambee Reserve thriller",
     "A composed final over sealed a 12-run win for North Ringwood under lights as the Blast delivered its closest finish yet.",
     NEWS_HERO, "3 days ago", False, None),
    ("Highlights", "Six of the Round — into the car park!",
     "Norwood's opener takes on the long boundary and wins. Presented by Grant Professionals.",
     img("VIDEO — Six of the Round", "07172d"), "2 days ago", True, "0:42"),
    ("Preview", "Friday Night Blast preview: Knights host Heat",
     "Top-two implications under lights. Two of the competition's biggest hitters go head-to-head at North Ringwood.",
     img("MATCH PREVIEW"), "1 day ago", False, None),
    ("Junior", "From Junior Blast to first XI: meet Priya",
     "A Junior Blast Night two seasons ago started it all. Now she's opening the bowling for Mooroolbark.",
     img("JUNIOR STORY", "0a8a5f"), "5 days ago", False, None),
    ("Sponsor", "Why Bendigo Bank backs the Blast",
     "Our Match Centre Partner on supporting community cricket and the families who make it happen.",
     img("SPONSOR STORY", "1b3a8c"), "6 days ago", False, None),
    ("Events", "Family Blast Day returns to Bayswater Park",
     "Free entry, sausage sizzle, junior skills zone and the Fastest Bowler radar gun. Bring a mate.",
     img("EVENT", "c2154a"), "7 days ago", False, None),
]

SPONSOR_TIERS = [
    ("Naming Rights Partner", [("Your Brand Here", placeholder("NAMING RIGHTS PARTNER", 480, 180, "07172d", "f9c80e"), "RDCA T20 Blast — presented by")], True),
    ("Major Partners", [
        ("Bendigo Bank", CLOUD + "v1780769147/Resized_Sponsor_logos10_jgn2lt.avif", "Match Centre Partner"),
        ("Altegra", CLOUD + "v1780760760/Altegra.com_.au-logo_350x100_tqmti7.png", "Player of the Match"),
        ("SEDA College", CLOUD + "v1780760760/seda-vic-logo_cxgyvs.svg", "Junior Blast Partner"),
    ], False),
    ("Supporting Partners", [
        ("Grant Professionals", CLOUD + "v1780769907/images_18_iq66l4.png", "Six of the Round"),
        ("Field of View", CLOUD + "v1780760760/FOV_p2scu1.avif", "Catch of the Round"),
    ], False),
    ("Match-Day Partners", [("Dorset Gardens Hotel", CLOUD + "v1780769044/images_4_x9mrk5.jpg", "Family Blast Day")], False),
    ("Challenge Partners", [("Fridge Repairs Today", CLOUD + "v1780769263/Fridge-Repairs-Melbourne_gxvytd.webp", "Fastest Bowler Challenge")], False),
    ("Community Partners", [("Good Sports", CLOUD + "v1780770434/good-sports-social.width-1280_uvdayn.png", "Community Partner")], False),
    ("Technology Partner", [("SportsWeb One", placeholder("SportsWeb One", 320, 120, "07172d", "00d4ff"), "Technology Partner")], False),
]

STORE = [
    ("Blast Hoodie", "From $65", "apparel", "New", "152d52"),
    ("Blast Cap", "From $30", "headwear", None, "1b3a8c"),
    ("Playing Shirt (Replica)", "From $55", "apparel", None, "0a8a5f"),
    ("Club Supporter Pack", "From $45", "club", None, "6a1bb0"),
    ("Blast Season Raffle", "$10 / ticket", "fundraiser", "Fundraiser", "c2154a"),
    ("Partner Offers", "Members", "offer", None, "0c6e6e"),
]

SOCIAL = [
    ("tiktok", "REEL — Last over drama", "07172d", "That final over 😱 #RDCAT20Blast", True),
    ("instagram", "FAN PHOTO — Family Blast Day", "1b3a8c", "Best night of the season with the kids 🏏", False),
    ("instagram", "CLUB POST — Nitro celebrate", "0a8a5f", "Top of the table! 💚 #NorwoodNitro", False),
    ("youtube", "VIDEO — Catch of the Round", "d2491b", "How did he hold that?! 🔥", True),
    ("instagram", "JUNIOR POST — first wicket", "6a1bb0", "First wicket in the Junior Blast 🙌", False),
    ("tiktok", "REEL — Beat the Pro", "c2154a", "Beat the Pro challenge — your turn 👀", True),
]

NAV = ["Home", "Match Centre", "Fixtures", "Ladder", "Clubs", "FanHub", "Juniors", "News", "Sponsors", "Store"]

# Upcoming fixtures for the strip
FIXTURES = [
    ("Round 5", "NRW", None, "HMT", None, "Quambee Reserve", "Fri 6:30 PM", "upcoming", None),
    ("Round 5", "MBK", None, "SCB", None, "Esther Park", "Sat 2:00 PM", "upcoming", None),
    ("Round 5", "CRO", None, "MON", None, "Croydon Oval", "Sat 5:30 PM", "upcoming", None),
    ("Round 6", "BWP", None, "WPK", None, "Bayswater Park", "Sun 11:00 AM", "upcoming", None),
]

def club_logo_by_code(code):
    c = CLUB_BY_CODE[code]
    return logo(c[5], c[3]), c[0], c[3]

# --- markup builders ---------------------------------------------------------
def build_clubs():
    cards = []
    for name, full, tag, color, color2, code in CLUBS:
        cards.append(f"""
      <article class="club">
        <div class="club__bar" style="background:linear-gradient(135deg,{color},{color2})">
          <img class="club__logo" src="{logo(code,color)}" alt="{esc(name)} logo"/>
        </div>
        <div class="club__team">{esc(name)}</div>
        <div class="club__name">{esc(full)}</div>
        <div class="club__tag">{esc(tag)}</div>
        <button class="club__follow">{icon('plus',14)} Follow</button>
      </article>""")
    return f'<div class="clubs__grid">{"".join(cards)}</div>'

def build_ladder():
    rows = ['<div class="ladder__row ladder__row--head"><span class="ladder__pos">#</span>'
            '<span class="lh-team">Club</span><span>P</span><span>W</span><span>L</span>'
            '<span class="ladder__pts">Pts</span><span class="ladder__nrr">NRR</span></div>']
    for pos, code, p, w, l, pts, nrr in LADDER:
        lg, name, color = club_logo_by_code(code)
        top4 = " ladder__row--top4" if pos <= 4 else ""
        nrr_s = ("+" if nrr > 0 else "") + f"{nrr:.2f}"
        rows.append(f"""<div class="ladder__row{top4}">
          <span class="ladder__pos">{pos}</span>
          <span class="ladder__team"><img src="{lg}" alt="" style="background:{color}"/><b>{esc(name)}</b></span>
          <span class="ladder__num">{p}</span><span class="ladder__num">{w}</span><span class="ladder__num">{l}</span>
          <span class="ladder__pts">{pts}</span><span class="ladder__nrr">{nrr_s}</span></div>""")
    return f'<div class="ladder">{"".join(rows)}</div>'

def build_fixtures():
    cards = []
    for rnd, hc, hs, ac, as_, venue, time, status, result in FIXTURES:
        hl, hn, hcol = club_logo_by_code(hc)
        al, an, acol = club_logo_by_code(ac)
        cards.append(f"""
      <article class="mcard">
        <div class="mcard__top"><span>{esc(rnd)}</span><span class="badge badge--upcoming">{esc(time)}</span></div>
        <div class="mcard__row"><img class="mcard__logo" src="{hl}" alt="" style="background:{hcol}"/><span class="mcard__name">{esc(hn)}</span></div>
        <div class="mcard__row"><img class="mcard__logo" src="{al}" alt="" style="background:{acol}"/><span class="mcard__name">{esc(an)}</span></div>
        <div class="mcard__foot"><span class="mcard__venue">{icon('location',13)} {esc(venue)}</span></div>
      </article>""")
    return (f'<div class="tabs"><button class="is-active">Upcoming</button><button>Results</button></div>'
            f'<div class="strip" style="margin-top:16px">{"".join(cards)}</div>')

def build_match_centre():
    hl, hn, hcol = club_logo_by_code("SCR")
    al, an, acol = club_logo_by_code("NOR")
    mods = [("predict", "Predict the Result", "Lock in your call before the next over."),
            ("star", "Vote Player of the Match", "Your vote decides the official award."),
            ("six", "Six of the Round", "Nominate the biggest hit you've seen."),
            ("catch", "Catch of the Round", "Vote for the grab of the weekend.")]
    mod_html = "".join(
        f'<div class="mc__mod">{icon(i,22)}<h4 class="display">{esc(t)}</h4><p>{esc(d)}</p></div>'
        for i, t, d in mods)
    return f"""<div class="mc"><div class="mc__streak"></div><div class="mc__grid">
      <div class="mc__scorecard">
        <div class="mc__live"><span class="badge badge--live"><i></i>LIVE NOW</span>
          <span style="font-family:var(--font-mono);font-size:12px;opacity:.7">Round 5</span></div>
        <div class="mc__inning"><span class="mc__team"><img src="{hl}" alt="" style="background:{hcol}"/><span class="display">{esc(hn)}</span></span>
          <span class="mc__rs">142/4<small>(15.2)</small></span></div>
        <div class="mc__inning"><span class="mc__team"><img src="{al}" alt="" style="background:{acol}"/><span class="display">{esc(an)}</span></span>
          <span class="mc__rs">171/6<small>(20.0)</small></span></div>
        <div class="mc__rr"><span class="mc__stat"><span class="k">Status</span>
          <span class="v">South Croydon Strikers need 30 from 28 balls</span></span></div>
        <div style="margin-top:20px"><a class="btn btn--accent btn--sm" href="#">Open Match Centre {icon('arrow',15)}</a></div>
      </div>
      <div class="mc__modules">{mod_html}</div>
    </div></div>"""

def build_fanhub():
    cards = []
    for ic, title, desc, cta, accent, badge, sponsor in FANHUB:
        col = ACCENT_VAR[accent]
        badge_h = f'<span class="fhcard__badge">{esc(badge)}</span>' if badge else ""
        sp_h = f'<span class="fhcard__sponsor">with {esc(sponsor)}</span>' if sponsor else ""
        cards.append(f"""<article class="fhcard" style="--fh:{col}">
          <span class="fhcard__glow" style="background:{col}"></span>{badge_h}
          <span class="fhcard__ic" style="color:{col}">{icon(ic,26)}</span>
          <h3 class="display">{esc(title)}</h3><p>{esc(desc)}</p>
          <div class="fhcard__foot"><button class="fhcard__cta" style="color:{col}">{esc(cta)} {icon('arrow',15)}</button>{sp_h}</div>
        </article>""")
    return f'<div class="fanhub__grid">{"".join(cards)}</div>'

def build_challenges():
    cards = []
    for ic, title, blurb, sponsor in CHALLENGES:
        sp = f'<span class="chcard__sponsor">Presented by {esc(sponsor)}</span>' if sponsor else ""
        cards.append(f'<article class="chcard"><span class="chcard__ic">{icon(ic,24)}</span>'
                     f'<h3 class="display">{esc(title)}</h3><p>{esc(blurb)}</p>{sp}</article>')
    return f'<div class="chgrid">{"".join(cards)}</div>'

def qr_svg():
    cells, size = 11, 132
    unit = size / cells
    def filled(r, c):
        if (r < 3 and c < 3) or (r < 3 and c > cells-4) or (r > cells-4 and c < 3):
            ring = (r in (0, 2) or c in (0, 2) or
                    (r > cells-4 and r in (cells-3, cells-1)) or
                    (c > cells-4 and c in (cells-3, cells-1)))
            return ring or (r == 1 and c == 1) or (r == 1 and c == cells-2) or (r == cells-2 and c == 1)
        return (r*7 + c*3 + ((r*c) % 5)) % 2 == 0
    rects = "".join(f'<rect x="{c*unit}" y="{r*unit}" width="{unit}" height="{unit}"/>'
                    for r in range(cells) for c in range(cells) if filled(r, c))
    return (f'<svg viewBox="0 0 {size} {size}" width="{size}" height="{size}" role="img" aria-label="QR placeholder">'
            f'<rect width="{size}" height="{size}" fill="#fff" rx="8"/><g fill="#0d1f3c">{rects}</g></svg>')

def build_juniors():
    cards = []
    for ic, title, desc, cta, hl, sponsor in JUNIORS:
        hlc = " jcard--hl" if hl else ""
        sp = f'<span class="jcard__sponsor">Supported by {esc(sponsor)}</span>' if sponsor else ""
        cards.append(f"""<article class="jcard{hlc}"><span class="jcard__ic">{icon(ic,24)}</span>
          <h3 class="display">{esc(title)}</h3><p>{esc(desc)}</p>
          <button class="jcard__cta">{esc(cta)} {icon('arrow',15)}</button>{sp}</article>""")
    return f"""<div class="jgrid">{"".join(cards)}</div>
      <aside class="jqr"><div class="jqr__code">{qr_svg()}</div>
      <div><h3 class="display">Scan to register a junior</h3>
      <p>Point your camera here at any club sign-on day to jump straight to Junior Blast registration.</p>
      <a class="btn btn--accent btn--sm" href="#">Register Now</a></div></aside>"""

def build_news():
    cards = []
    for i, (cat, title, exc, image, date, is_video, dur) in enumerate(NEWS):
        lead = " ncard--lead" if i == 0 else ""
        vid = ""
        if is_video:
            vid = '<span class="ncard__play"><span></span></span>'
            if dur:
                vid += f'<span class="ncard__dur">{esc(dur)}</span>'
        cards.append(f"""<article class="ncard{lead}">
          <a class="ncard__media" href="#"><img class="ncard__img" src="{image}" alt=""/>
          <span class="ncard__cat">{esc(cat)}</span>{vid}</a>
          <div class="ncard__body"><span class="ncard__date">{esc(date)}</span>
          <h3 class="ncard__title">{esc(title)}</h3><p class="ncard__excerpt">{esc(exc)}</p></div></article>""")
    return f'<div class="news__grid">{"".join(cards)}</div>'

def build_sponsors():
    groups = []
    for label, items, naming in SPONSOR_TIERS:
        logos = "".join(
            f'<a class="splogo" href="#"><img src="{lg}" alt="{esc(nm)}"/>'
            f'<span class="splogo__activation">{esc(act)}</span></a>'
            for nm, lg, act in items)
        cls = " sptier--naming" if naming else ""
        groups.append(f'<div class="sptier{cls}"><div class="sptier__label">{esc(label)}</div>'
                      f'<div class="spgrid">{logos}</div></div>')
    cta = """<div class="sponsors__cta"><h3 class="display">Put your brand in the middle of the action</h3>
      <p>Naming rights, match-day partnerships, challenge sponsorships and junior program support — packages to suit every local business.</p>
      <a class="btn btn--accent" href="#">Become a Partner</a></div>"""
    return f'<div class="sponsors">{"".join(groups)}{cta}</div>'

def build_store():
    cards = []
    for name, price, cat, badge, bg in STORE:
        b = f'<span class="stcard__badge">{esc(badge)}</span>' if badge else ""
        cards.append(f"""<article class="stcard"><div class="stcard__img">
          <img src="{placeholder(name,320,240,bg,'f9c80e')}" alt="{esc(name)}"/>{b}</div>
          <div class="stcard__body"><span class="stcard__name">{esc(name)}</span>
          <span class="stcard__price">{esc(price)}</span></div></article>""")
    return f'<div class="store__grid">{"".join(cards)}</div>'

def build_feed():
    cards = []
    for plat, label, bg, cap, is_video in SOCIAL:
        play = f'<span class="fpost__play">{icon("play",18)}</span>' if is_video else ""
        cards.append(f"""<a class="fpost" href="#"><img src="{tile(label,bg)}" alt=""/>
          <span class="fpost__overlay"></span><span class="fpost__meta">{icon(plat,16)}</span>{play}
          <span class="fpost__cap">{esc(cap)}</span></a>""")
    return (f'<div class="feed__grid">{"".join(cards)}</div>'
            '<p style="text-align:center;margin-top:20px">Tag <b>#RDCAT20Blast</b> to feature on the wall.</p>')

def section(cls, eyebrow, title, sub, body, action=None):
    act = f'<div class="section-head__action">{action}</div>' if action else ""
    return f"""<section class="section {cls}"><div class="container">
      <div class="section-head"><div><span class="eyebrow">{esc(eyebrow)}</span>
      <h2 class="section-heading">{esc(title)}</h2><p class="section-sub">{esc(sub)}</p></div>{act}</div>
      {body}</div></section>"""

def link_btn(label):
    return f'<a class="btn btn--outline btn--sm" href="#">{esc(label)} {icon("arrow",15)}</a>'

# --- hero + feature ----------------------------------------------------------
def build_hero():
    return f"""<section class="hero" aria-label="Welcome">
      <div class="hero__media"><img src="{HERO_IMG}" alt="" aria-hidden="true"/></div>
      <div class="hero__overlay"></div><div class="hero__streak"></div>
      <div class="hero__content"><div class="container">
        <span class="hero__kicker"><span class="pill">Round 5</span> NRW v HMT · Quambee Reserve</span>
        <h1 class="hero__title display">Local Cricket.<br/><span class="accent">Big Bash Energy.</span></h1>
        <p class="hero__sub">The RDCA T20 Blast brings clubs, players, families, juniors, sponsors and supporters together for fast, exciting community cricket.</p>
        <div class="hero__ctas">
          <a class="btn btn--accent" href="#">View Fixtures {icon('arrow',17)}</a>
          <a class="btn btn--ghost" href="#">Match Centre {icon('live',17)}</a>
          <a class="btn btn--ghost" href="#">Join The Blast</a>
          <a class="btn btn--ghost" href="#">Sponsor The Competition</a>
        </div>
        <div class="countdown"><div><div class="countdown__label">Next Match · Fri 6:30 PM</div>
        <div class="countdown__units">
          <div class="cd-unit"><div class="cd-unit__num">02</div><div class="cd-unit__lbl">Days</div></div><span class="cd-sep">:</span>
          <div class="cd-unit"><div class="cd-unit__num">14</div><div class="cd-unit__lbl">Hrs</div></div><span class="cd-sep">:</span>
          <div class="cd-unit"><div class="cd-unit__num">30</div><div class="cd-unit__lbl">Min</div></div><span class="cd-sep">:</span>
          <div class="cd-unit"><div class="cd-unit__num">00</div><div class="cd-unit__lbl">Sec</div></div>
        </div></div></div>
      </div></div></section>"""

def build_feature():
    hl, hn, hcol = club_logo_by_code("NRW")
    al, an, acol = club_logo_by_code("HMT")
    return f"""<div class="container feature-match"><article class="fmatch">
      <div class="fmatch__top"><span class="fmatch__round">Round 5 — Friday Night Blast</span>
        <span class="badge badge--upcoming">Feature Match</span></div>
      <div class="fmatch__body">
        <div class="fmatch__team"><img class="fmatch__logo" src="{hl}" alt="" style="background:{hcol}"/><span class="fmatch__teamname display">{esc(hn)}</span></div>
        <div class="fmatch__vs display">VS</div>
        <div class="fmatch__team"><img class="fmatch__logo" src="{al}" alt="" style="background:{acol}"/><span class="fmatch__teamname display">{esc(an)}</span></div>
      </div>
      <div class="fmatch__meta">
        <span class="mi">{icon('calendar',15)} Friday</span>
        <span class="mi">{icon('clock',15)} 6:30 PM</span>
        <span class="mi">{icon('location',15)} Quambee Reserve, North Ringwood</span></div>
      <div class="fmatch__foot"><span class="fmatch__sponsor">Match-day partner: <b>Bendigo Bank</b></span>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <a class="btn btn--primary btn--sm" href="#">Match Centre {icon('live',15)}</a>
          <a class="btn btn--outline btn--sm" href="#">All Fixtures</a></div></div>
    </article></div>"""

def build_header():
    links = "".join(
        f'<a href="#"{" class=\"is-active\"" if n == "Home" else ""}>{esc(n)}</a>' for n in NAV
    )
    return f"""<header class="header"><div class="container header__inner">
      <a class="brand" href="#"><span class="brand__mark" aria-hidden="true">T20</span>
      <span class="brand__name">RDCA T20 Blast</span><span class="brand__sub">Local Cricket. Big Bash Energy.</span></a>
      <nav class="nav">{links}</nav>
      <a class="btn btn--accent btn--sm header__cta" href="#">Join The Blast</a>
      <button class="hamburger" aria-label="Menu">{icon('menu',24)}</button>
    </div></header>"""

def build_footer():
    quick = ["Match Centre", "Fixtures", "Results", "Ladder"]
    more = ["FanHub", "Juniors", "Challenges", "Store"]
    about = ["Clubs", "Sponsors", "News", "Contact"]
    def col(title, items):
        links = "".join(f'<a href="#">{esc(i)}</a>' for i in items)
        return f'<div class="footer__col"><h4>{esc(title)}</h4>{links}</div>'
    social = "".join(f'<a href="#" aria-label="{p}">{icon(p,20)}</a>'
                     for p in ["instagram", "facebook", "tiktok", "youtube"])
    return f"""<footer class="footer"><div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <span class="brand"><span class="brand__mark" aria-hidden="true">T20</span>
          <span class="brand__name">RDCA T20 Blast</span></span>
          <p class="footer__tagline">The RDCA T20 Blast brings clubs, players, families, juniors, sponsors and supporters together for fast, exciting community cricket.</p>
          <p class="footer__powered">Powered by SportsWeb One · T20 OS</p>
          <div class="footer__social">{social}</div>
        </div>
        {col("Cricket", quick)}
        {col("The Blast", more)}
        {col("Association", about)}
      </div>
      <p class="footer__acknowledgement">The Ringwood &amp; District Cricket Association acknowledges the Wurundjeri Woi-wurrung people of the Kulin Nation as the Traditional Owners of the land on which we play, and pays respect to Elders past, present and emerging.</p>
      <div class="footer__bottom"><span>© 2026 Ringwood &amp; District Cricket Association. All rights reserved.</span>
        <span>A SportsWeb One build · Template Pilot 001</span></div>
    </div></footer>"""

# --- assemble ----------------------------------------------------------------
with open(f"{ROOT}/src/styles/theme.css") as f:
    theme_css = f.read()
with open(f"{ROOT}/src/styles/globals.css") as f:
    globals_css = f.read()

body = "".join([
    build_header(),
    '<main id="main">',
    build_hero(),
    build_feature(),
    section("", "Fixtures & Results", "This Round", "Swipe through what's on and what just happened.", build_fixtures(), link_btn("All fixtures")),
    section("section--dark", "Live Match Centre", "Follow Every Ball", "Live scores, in-play voting and the season's best moments.", build_match_centre()),
    section("", "The Teams", "Ten Clubs. One Blast.", "Find your team and follow them all season.", build_clubs(), link_btn("View all clubs")),
    section("section--tint", "Standings", "The Ladder", "Top four make finals. Net run rate breaks ties.", f'<div style="max-width:760px;margin-inline:auto">{build_ladder()}</div>', link_btn("Full ladder")),
    section("", "FanHub", "Get In The Game", "Predict, vote and earn rewards every round.", build_fanhub(), link_btn("Explore FanHub")),
    section("juniors", "Junior Blast", "Cricket Starts Here", "Free first sessions, easy sign-up and a heap of fun for new players.", build_juniors()),
    section("", "Blast Challenges", "Take On The Challenges", "Sponsor-backed skills challenges for players and fans of all ages.", build_challenges()),
    section("section--tint", "News & Video", "The Latest", "Match reports, highlights and stories from around the Blast.", build_news(), link_btn("All news")),
    section("", "Our Partners", "Powered By Local Business", "The Blast is made possible by partners who back community cricket.", build_sponsors()),
    section("section--tint", "Store & Fundraising", "Wear The Blast", "Gear up and back your club. Every purchase supports local cricket.", build_store(), link_btn("Visit store")),
    section("", "Community", "From The Grounds", "Follow the action and tag #RDCAT20Blast.", build_feed()),
    '</main>',
    build_footer(),
])

note = ("<!-- This is a STATIC, self-contained preview of the RDCA T20 Blast homepage. "
        "It mirrors the React/Vite app's design and data so it can be opened with no build step "
        "(useful because the build sandbox has no network). The real interactive site is the "
        "Vite project: npm install && npm run dev. Some images load from Cloudinary and require "
        "an internet connection when you open this file. -->")

doc = f"""<!doctype html>
<html lang="en-AU">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="theme-color" content="#0d1f3c"/>
<title>RDCA T20 Blast — Preview</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500;700&display=swap"/>
{note}
<style>
{theme_css}
{globals_css}
</style>
</head>
<body class="has-quicknav">
{body}
</body>
</html>
"""

with open(f"{ROOT}/preview.html", "w") as f:
    f.write(doc)

print(f"preview.html written: {len(doc):,} bytes")
