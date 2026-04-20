# Source Accessibility website

Static HTML/CSS site for Source Accessibility. Pages share common header, footer and contact sections that are injected at runtime via `js/load-partials.js`, so view the site over HTTP rather than opening files directly.

## Project structure
- `index.html`, `about.html`, `services.html`, `accessibility-statement.html`, `legal.html`, `testing-in-action.html` plus demo pages for threads/trusted content.
- `partials/` contains the shared `header.html`, `footer.html`, and `contact.html` fragments pulled into each page.
- `css/base.css` holds the full visual system (color tokens, layout, components).
- `js/load-partials.js` fetches partials into `[data-include]` targets and keeps the footer year in sync.
- `assets/` stores images and badges referenced across the site.

## Run locally
1. From the project root, start any simple HTTP server (required for partial loading):
   - Python 3: `python3 -m http.server 8000`
2. Open http://localhost:8000 in your browser. The homepage is `index.html`; other pages are linked in the header/footer nav.

## Editing
- Update shared nav/footer/contact copy in `partials/` to keep pages consistent.
- Adjust typography, spacing, and color tokens in `css/base.css`.
- Add new sections by extending existing markup patterns in the HTML files; keep ARIA labels/headings aligned with current accessibility approach.
- Swap or add assets under `assets/`, updating references in the HTML or CSS as needed.

## Deploy
This is a static site: upload the repository contents to any static host (S3 + CloudFront, Netlify, GitHub Pages, etc.). Ensure the site is served over HTTP/HTTPS so the JS partial fetching works; no build step is required.

## ToDo - Think Tank Page
Centre for Accessible Travel Booking Standards(CATBS) 
A research-led initiative defining what accessible digital journeys look like in practice, grounded in disabled user experience.

It combines standards for real task completion, academic and AI-assisted research into journey-level accessibility, and education partnerships (Teach Access Europe) to embed lived-experience insight into European digital curricula, using travel booking as one applied case study.