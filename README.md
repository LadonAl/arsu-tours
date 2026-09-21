# Arsu Tours — demonstration site

A demo website for a **fictional** Syria travel company, built from a Claude
Design mock (`Arsu v11`) with researched and fact-checked destination content.

**Arsu Tours does not exist.** It sells nothing, takes no bookings and holds no
money. The site says so on a persistent bar, in the footer, at every price, and
on a dedicated `/demo` page.

Live: <https://arsu.tours>

---

## What is real and what is not

| Real | Invented |
|---|---|
| Everything about the places — what stands, what was destroyed and when, UNESCO status, road distances, conservation and access | The company, its office, guides and staff |
| Travel advisories, visa position, currency redenomination, card-payment status (checked 21 September 2026) | All prices and currency conversions |
| The history of Arsu, sourced to museum catalogues and published scholarship | All departure dates and remaining places |
| Every photograph, credited to its photographer | Every figure on the ledger page |
| — | The journal entries and the enquiry form |

## Stack

- **Next.js 16** (App Router, Turbopack) · React 19 · TypeScript
- **Tailwind 4** for layout utilities; the design system itself is CSS custom
  properties in `app/globals.css`, lifted from the mock's own values
- **GSAP + ScrollTrigger** for scroll reveals, loaded dynamically and skipped
  entirely under `prefers-reduced-motion`
- `next/font` for **Manrope** and **Noto Kufi Arabic**
- Deployed on **Vercel**, DNS on **Cloudflare**

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm start        # serve the build
pnpm lint         # eslint
pnpm typecheck    # tsc --noEmit
```

## Layout

```
app/                 routes — one per page of the v11 mock, plus /credits and /demo
components/          Header, Footer, DemoBar, Honeycomb, JourneyCarousel, …
content/             all copy and data, typed. No prose lives in components.
  images.ts          every photo with photographer, source and licence
  places.ts          the ten destinations
  practicalities.ts  visas, advisories, money — the page held to the tightest bar
lib/localPref.ts     localStorage-backed prefs via useSyncExternalStore
brand/               logo generation, candidates and final marks
research/            the research this site is built on (committed on purpose)
```

## How the content was fact-checked

Each destination was researched independently, then handed to a **separate
adversarial pass** whose only instruction was to try to refute it: verify every
date, number, Arabic name, UNESCO status and distance against sources it
fetched itself, and delete anything it could not stand up.

All ten destinations came back with corrections — **87 in total**. Some of what
that caught:

- A distance to the Lebanese border that was actually the distance to Beirut
  (≈40 km vs ≈85 km).
- A tourism-police headcount that was a training cohort in another governorate.
- Shrapnel holes in a souq roof described as though they were attractive.
- "Qalb Lozeh inspired Notre-Dame" — traceable to one early-20th-century
  opinion, not consensus.

The mock's own copy had two material errors, both corrected:

1. **Visas were backwards.** It said visas are arranged in advance with an
   invitation letter; visa on arrival is in fact the norm for most
   nationalities.
2. **The Syrian pound rate predated redenomination.** The Central Bank cut two
   zeros on 1 January 2026.

`research/CONTENT-CORRECTIONS.md` records every change, with sources.

### Photographs

Image captions on stock sites are written by uploaders and are frequently
wrong. Every candidate was downloaded and **looked at** before use. A search for
"palmyra syria" returned a photograph of **Petra, Jordan**; a search for "krak
des chevaliers" returned two **châteaux in France**. None was published.

Unsplash is the primary source, hotlinked from its CDN as Unsplash asks.
Where Unsplash has no free, correctly-identified photograph of a place — a
search for Bosra returns zero results — **Wikimedia Commons** is used instead
and self-hosted with full attribution. A photograph of the wrong place is worse
than a photograph from a different source. Full list at `/credits`.

One genuine Palmyra photograph was rejected because it shows the **Tetrapylon**,
12 of whose 16 columns were toppled in January 2017; publishing it as current
would misrepresent the site.

## On tone

Syria is not a ruin to be admired. War damage is stated factually and never
aestheticised; religious sites are described as places of worship rather than
attractions; and the site never claims the country is safe or unsafe — it
reports what the advisories say and leaves the judgement to the reader.

The name is handled on `/about`: **Arsu** was a Palmyrene guardian of caravans
and travellers, attested from roughly the 1st century BCE to the 3rd century CE.
He is referenced as archaeology and heritage — the way a shipping line is named
for Hermes — with no devotional framing, no claim of revival, and no statement
about any living faith.

## Accessibility

`axe-core` (WCAG 2.0/2.1 A and AA) reports **zero violations** across all twelve
routes. Two issues found during the build were fixed rather than waived:

- Brand gold `#C8A046` is only 2.44:1 on white. `--accent-ink` is used for text
  on light grounds; the gold stays on the green panels where it has contrast.
- Inline links in running text are underlined, not colour-only.

The honeycomb grid falls back to ordinary cards below 900px, where hexagons lose
too much of the photograph to the clip.

## Licence

Site code: for demonstration. Photographs remain under their own licences —
see `/credits`. The research notes in `research/` cite their sources inline.
