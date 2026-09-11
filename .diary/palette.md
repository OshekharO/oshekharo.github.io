# Accessibility & UX Journal

## 2026-03-30 - Portfolio Accessibility & Landmark Audit

**Learning:** Static single-page portfolio sites often lack skip navigation links, explicit focus rings on dark themes, and descriptive ARIA labels on recurring generic link texts like "GitHub" and "Read". Furthermore, heading levels (`<h1>` through `<h3>`) were misused as visual sizing classes instead of structural document outline markers.

**Action:** Add a "Skip to main content" link, wrap page areas in semantic landmarks (`<header>`, `<main>`, `<footer>`), establish strict single `<h1>` heading hierarchy, enhance generic links with descriptive `aria-label`s, ensure `:focus-visible` emerald outlines for keyboard navigation, and add `prefers-reduced-motion` CSS overrides.
