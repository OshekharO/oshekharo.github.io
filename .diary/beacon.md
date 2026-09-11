# SEO Optimization Journal

## 2026-03-30 - Portfolio SEO & Sitemap Audit

**Learning:** Static site sitemaps often become stale when routes are removed or added without sitemap updates, leading search engine bots to crawl dead URLs or miss newly published content pages. Additionally, research paper pages and subpages often omit Open Graph, Twitter Cards, canonical tags, and structured data schemas (e.g. `ScholarlyArticle` and `BreadcrumbList`).

**Action:** Updated `sitemap.xml` to remove dead URLs and include `/paper/ai-cybersecurity-identity-threats-2026.html`. Added missing social metadata (`og:image`, `twitter:image`), canonical tags, and structured JSON-LD data (`WebSite`, `ScholarlyArticle`, `BreadcrumbList`). Applied `noindex, follow` directive to `404.html`.
