# Your Portfolio Site

A static, dependency-free portfolio website. No build step, no backend required —
open `index.html` in a browser, or upload the whole folder to any static host
(Netlify, Vercel, GitHub Pages, Cloudflare Pages, or plain shared hosting).

## Editing content — the one file that matters

Open **`js/config.js`**. Everything on the site — your name, bio, contact links,
promo banner, services, testimonials, and every portfolio project — lives in
that single file as plain JavaScript objects. Change a value, save, refresh
your browser. The layout, styling, and animations never need to be touched.

Highlights:

- **Contact section**: edit `contact.facebook`, `contact.whatsapp`, `contact.viber`,
  `contact.telegram`, `contact.email`, `contact.phone`. Leave any value as `""`
  and that button/icon disappears automatically — no HTML editing required.
- **Promo banner**: set `promo.enabled = false` to hide it instantly without
  deleting your copy, price, or link.
- **Portfolio projects**: add a new object to the `projects` array. Supports
  YouTube links, Vimeo links, or your own uploaded `.mp4` file
  (`videoType: "upload"`, then point `videoSrc` at a file in `assets/videos/`).
  There's no limit to how many you add — the grid, search, and category
  filters update automatically.
- **Services / testimonials**: same pattern — add, remove, or edit array items.
- **Thumbnail showcase**: edit the `thumbnails` array to display your YouTube
  thumbnail design work, separate from your video portfolio. Each entry needs
  `image`, `title`, `category`, and `orientation` (`"16:9"` for landscape
  YouTube thumbnails or `"9:16"` for Shorts/Reels). The grid keeps each
  image's real aspect ratio — no cropping — so landscape and vertical
  thumbnails both display correctly side by side. Leave the array empty
  (`thumbnails: []`) to hide the section entirely.

## Replacing placeholder images

All images currently in `assets/` are generated placeholders so you can see
the layout. Replace them with your own files of the same name (or update the
path in `config.js`):

- `assets/profile/profile.svg` → your headshot (JPG/PNG/WebP all work)
- `assets/projects/project-*.svg` → project thumbnails
- `assets/thumbnails/thumb-*.svg` → thumbnail showcase images (placeholders
  are 1280×720 for 16:9 and 720×1280 for 9:16 — match those dimensions,
  or any image with the same aspect ratio, for a clean fit)
- `assets/promo/promo-bg.svg` → promo banner background
- `assets/cv/` → drop your CV PDF here and point `profile.cvFile` at it
- `assets/videos/` → drop uploaded MP4s here for projects using `videoType: "upload"`

## Features included

- Responsive, mobile-first layout (desktop, tablet, mobile)
- Dark/light mode toggle (remembers the visitor's choice)
- Smooth scrolling, scroll-reveal animations, respects reduced-motion setting
- Portfolio search + category filtering
- Video modal supporting YouTube, Vimeo, and self-hosted MP4
- Copy-email button, click-to-call phone link, one-click messaging links
- Download CV button
- Editable promo banner with an enable/disable switch
- Semantic HTML, meta description/Open Graph tags for SEO
- No frameworks or build tools — just HTML, CSS, and vanilla JS

## Contact form note

The contact form currently opens the visitor's email client via a `mailto:`
link pre-filled with their message (no backend needed). If you'd like actual
form submissions collected on a server (e.g. via Formspree, a serverless
function, or your own backend), that's a small change to the `wireContactForm`
function in `js/main.js` — happy to wire that up if you tell me which service
you'd like to use.

## File structure

```
index.html          → page structure
css/style.css        → all styling, design tokens, responsive rules
js/config.js          → EDIT THIS — all editable content
js/main.js            → renders config.js into the page, handles interactivity
assets/profile/       → headshot
assets/projects/      → project thumbnails
assets/thumbnails/     → thumbnail showcase images (16:9 + 9:16)
assets/promo/         → promo banner background
assets/cv/             → your downloadable CV
assets/videos/          → self-hosted MP4 project files
```
