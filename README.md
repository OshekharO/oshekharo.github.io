# OSHEKHARO — Minimal Terminal-Inspired Personal Website

Personal landing page for **Saksham Shekher** (OshekharO) — Developer · Creator · Tech Enthusiast.

🔗 **Live site:** [oshekharo.github.io](https://oshekharo.github.io/)

---

## Design

- **Aesthetic:** Minimal terminal-inspired interface
- **Theme:** Dark (#0B0D0C background, #101412 terminal surface)
- **Accent:** Terminal green (#A3D977) for prompts, cursor, interactions
- **Typography:** Geist (primary) + JetBrains Mono (terminal/monospace)
- **Layout:** Single-page, centered terminal panel, generous negative space

---

## Features

- **Terminal Introduction** — `whoami`, `echo`, `ls` commands displaying identity
- **Typewriter Animation** — Cycles through role phrases (Developer, Creator, Tech Enthusiast, Always learning something new)
- **Blinking Cursor** — Authentic terminal feel
- **Social Links** — GitHub, LinkedIn, Email with hover/tap interactions
- **Email Copy** — Click email to copy with toast confirmation
- **Page Entrance Animation** — Subtle fade + slide up
- **Fully Responsive** — 320px to large desktop
- **Accessible** — Semantic HTML, focus states, reduced-motion support, screen-reader friendly
- **Zero Build Step** — Pure static files

---

## Technology Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, animations, responsive design
- **Vanilla JavaScript (ES6+)** — Typewriter, copy, toast (no dependencies)
- **Bootstrap 5 (CDN)** — Grid/utilities only
- **Google Fonts** — Geist + JetBrains Mono
- **SVG** — Favicon, inline icons

---

## Project Structure

```text
oshekharo.github.io/
│
├── index.html          # Main landing page
├── style.css           # Custom terminal styles
├── script.js           # Typewriter + interactions
├── PRODUCT.md          # Product definition
├── assets/
│   └── favicon.svg     # Terminal-themed favicon
├── robots.txt          # Crawler directives
├── sitemap.xml         # Site map
└── README.md           # This file
```

---

## Local Development

### Option 1: Open Directly
Double-click `index.html` or open in browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Option 2: Local Static Server (Recommended)
Some features (fonts, CSP) work better over HTTP:

```bash
# Python 3
python -m http.server 8000

# Node.js (if available)
npx serve .

# PHP
php -S localhost:8000
```
Then visit `http://localhost:8000`

---

## Deployment

### GitHub Pages
1. Push to `main` branch of `oshekharo.github.io` repository
2. Go to Settings → Pages
3. Source: "Deploy from a branch" → `main` → `/ (root)`
4. Site publishes at `https://oshekharo.github.io/`

**No build command required.** Static files served directly.

### Cloudflare Pages
1. Connect repository in Cloudflare Pages dashboard
2. Build command: *leave empty*
3. Build output directory: *leave empty* (or `.`)
4. Deploy

### Any Static Host
Upload all files to:
- Netlify (drag & drop)
- Vercel (import project, no build config)
- Firebase Hosting
- AWS S3 + CloudFront
- Traditional FTP/SFTP web hosting

---

## Customization

### Colors
Edit CSS custom properties in `style.css`:
```css
:root {
  --color-bg-main: #0B0D0C;
  --color-terminal-green: #A3D977;
  --color-accent-green: #6FAF69;
  /* ... */
}
```

### Typewriter Phrases
Edit the `phrases` array in `script.js`:
```javascript
const phrases = [
  'Developer',
  'Creator',
  'Tech Enthusiast',
  'Always learning something new'
];
```

### Social Links
Update URLs in `index.html`:
- GitHub: `https://github.com/OshekharO`
- LinkedIn: `https://www.linkedin.com/in/oshekher/`
- Email: `mailto:me@saksham.eu.org`

---

## Performance

- **No npm, no build tools, no bundlers**
- **~3 KB JavaScript** (gzipped ~1 KB)
- **~6 KB CSS** (gzipped ~1.5 KB)
- **Zero images** (except favicon)
- **System font fallbacks** if Google Fonts unavailable
- **Works offline** (except external fonts/CDN)

---

## Accessibility

- Semantic HTML5 structure
- Heading hierarchy (h1 → h2)
- Visible focus outlines (terminal green)
- WCAG AA contrast ratios
- `prefers-reduced-motion` respected
- `prefers-contrast: high` supported
- Screen-reader friendly (static fallback for typewriter)
- Keyboard navigable
- Skip link for main content

---

## Browser Support

Modern evergreen browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Graceful degradation for older browsers (CSS custom properties, `navigator.clipboard` with fallback).

---

## License

This project is **free to use** and does not contain any license.

---

<h4 align="center">© 2026 OSHEKHARO</h4>
<h4 align="center">Built with curiosity and code.</h4>