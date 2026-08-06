# Jesus Celebration Centre – Kitengela Town

A premium, responsive website for **Jesus Celebration Centre (JCC) Kitengela Town** — a
vibrant, Christ-centred church. The site welcomes visitors, shares the church's vision,
promotes events, provides sermons, enables online giving, and helps people connect.

> *Raising Kingdom Ambassadors Through Worship, Prayer, and the Word.*

## Tech Stack

Built as a fast, dependency-free **static site**:

- **HTML5** — clean, semantic, accessible markup
- **CSS3** — dark luxury theme, glassmorphism, gradients, responsive (mobile-first), scroll animations
- **JavaScript (ES6+)** — no frameworks or libraries

No build step is required.

## Project Structure

```
.
├── index.html          # Single-page site (all sections + SEO meta + structured data)
├── css/
│   └── styles.css      # Global stylesheet (theme, layout, animations, responsive)
├── js/
│   └── main.js         # Interactions: nav, particles, counters, reveal, countdown,
│                       # lightbox, testimonial slider, forms, loader
├── assets/
│   ├── icons/          # logo.svg, favicon.svg
│   └── img/            # SVG placeholders (pastor, sermons, events, gallery, avatars, og-image)
├── robots.txt
└── sitemap.xml
```

## Features

- Sticky nav that turns solid on scroll + animated mobile hamburger menu
- Full-screen hero with animated particle canvas, light rays and scroll indicator
- Animated stat counters, scroll-reveal animations, ripple buttons, page loader
- Service times, pastor section (with modal), 8 ministry cards
- Sermon cards (watch / listen / notes), event cards with live countdown timers
- Filterable masonry gallery with a fullscreen lightbox
- M-PESA giving section (Paybill **247247**, Account **400132**) with copy-to-clipboard
- Auto-playing testimonial slider
- Prayer-request & contact forms with client-side validation and loading state
- SEO: meta tags, Open Graph/Twitter cards, JSON-LD `Church` structured data, sitemap, robots.txt
- Accessibility: semantic landmarks, skip link, focus states, `prefers-reduced-motion` support

## Running Locally

Serve the folder with any static server, e.g.:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Customising

- **Content** (ministries, sermons, events, gallery, testimonials) lives in the data arrays at
  the top of `js/main.js` — edit those to update the site.
- **Colours / fonts** are CSS custom properties in `:root` at the top of `css/styles.css`.
- **Placeholder graphics** in `assets/img/` can be replaced with real church photos
  (keep the same filenames, or update the paths in `js/main.js` / `index.html`).

## License

MIT © M1E2N3
