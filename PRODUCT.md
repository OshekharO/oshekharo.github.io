# OSHEKHARO — Product Definition

## Product Purpose

A minimal, terminal-inspired personal landing page introducing Saksham Shekher (OshekharO). The website serves as a digital identity card — calm, professional, and memorable.

## Personal Identity

- **Name:** Saksham Shekher
- **Online Identity:** OshekharO
- **Brand:** OSHEKHARO
- **Description:** Developer · Creator · Tech Enthusiast
- **Tagline:** Building things, exploring ideas, and learning along the way.
- **Email:** me@saksham.eu.org
- **GitHub:** https://github.com/OshekharO/
- **LinkedIn:** https://www.linkedin.com/in/oshekher/

## Target Experience

A developer opening their personal terminal — clean, focused, slightly playful. One page. No sections. No fluff.

## Design Direction

- **Aesthetic:** Minimal developer terminal
- **Theme:** Dark (#0B0D0C background)
- **Tone:** Sober, professional, understated
- **Interaction:** Subtle, purposeful, never distracting

## Visual Hierarchy

1. **Header** — OSHEKHARO wordmark + subtle status label
2. **Terminal Panel** — Main introduction (whoami, echo, ls commands)
3. **Social Links** — GitHub, LinkedIn, Email with hover interactions
4. **Footer** — Copyright + optional secondary text

## Content Structure

### Header
```
OSHEKHARO
PERSONAL SPACE / EST. 2026
```

### Terminal Panel
```
● ● ●    saksham@oshekhar: ~

$ whoami
Saksham Shekher
Also known as OshekharO
Developer · Creator · Tech Enthusiast  ← typewriter cycles here

$ echo "Hello, World!"
Building things, exploring ideas, and learning along the way.

$ ls interests/
software/    open-source/    ai/    creativity/
```

### Social Links
- GitHub (icon + label)
- LinkedIn (icon + label)
- Email (icon + label + copy interaction)

### Footer
```
© 2026 OSHEKHARO
Built with curiosity and code.
```

## Interactions

1. **Typewriter Animation** — Cycles through identity phrases on the role line
2. **Terminal Cursor** — Blinking green cursor after typewriter text
3. **Page Entrance** — Fade + subtle upward movement
4. **Social Link Hover** — Upward movement, scale, color transition, soft glow
5. **Email Copy** — Click to copy, temporary confirmation toast
6. **Reduced Motion** — Respect `prefers-reduced-motion`

## Responsive Requirements

- **320px+** — Terminal fits width, commands wrap naturally
- **Tablet** — Centered, comfortable spacing
- **Desktop** — Max-width terminal, generous negative space
- **Large Desktop** — Balanced, not excessively wide

## Accessibility

- Semantic HTML5
- Correct heading hierarchy (h1 → h2)
- Visible focus states (2px solid terminal-green)
- Color contrast ≥ 4.5:1
- Keyboard-accessible interactions
- `prefers-reduced-motion` support
- Screen-reader-friendly animated content (static fallback)
- Decorative SVGs hidden via `aria-hidden="true"`

## Performance

- Zero dependencies beyond Bootstrap 5 CSS (CDN)
- Vanilla JS only (~2KB)
- No images except favicon
- System font fallbacks
- CSS animations over JS where possible
- Works offline (except fonts/CDN)

## Static Hosting

- GitHub Pages compatible
- Cloudflare Pages compatible
- No build step
- No package.json
- Direct static file serving