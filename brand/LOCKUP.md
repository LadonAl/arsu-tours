# Logo lockup

`public/brand/logo-lockup.svg` (header) and `logo-lockup-inverse.svg` (footer)
are the logo. Both are pure outlines — there is no live text, so nothing shifts
with font loading, hinting or a missing subset.

## How the wordmark was made

The Arabic أرصو is Noto Kufi Arabic at weight 600, the same face the site sets
its Arabic in, converted to curves:

1. **Shaping with HarfBuzz** (`harfbuzzjs`). Arabic needs contextual shaping and
   RTL ordering, and opentype.js could not do it for this font — it throws on
   `lookupType 6, substFormat 1`. HarfBuzz returns five glyphs for four
   characters: alef-with-hamza, reh, sad in its initial form, waw in its final
   form, and a zero-advance hamza mark positioned at +163,-5.
2. **Outlines with opentype.js**, looked up by the glyph ids HarfBuzz returned
   rather than by character, which sidesteps the shaping problem entirely.
3. **Normalised** so the path starts at 0,0 and its box is exactly the ink:
   2062 × 1209 font units.

## Alignment

Both elements are centred on their **ink boxes**, not on the baseline or the
viewBox. That is the whole point: centring Arabic on its baseline is what left
the word sitting low against the coin.

| Measure | Value |
|---|---|
| Coin ink | 1304.9 square, inset at 371.9, 372.5 in a 2048 viewBox |
| Wordmark ink | 2062 × 1209 |
| Wordmark height | 0.62 × coin diameter |
| Gap | 0.30 × coin diameter |
| Grid | coin diameter = 100 units |

0.62 is what balances a 1209-unit-tall word against a circle by eye — the alef
rises above the optical centre and the bowls of ص and و fall below it, so the
mass sits on the line.

## Regenerating

`compose.mjs` in the session scratchpad builds these from `NKA-600.ttf` plus
`brand/final/mark.svg` and `mark-inverse.svg`. The extracted outline path is
kept in `brand/final/wordmark-outlines.json` so the wordmark can be rebuilt
without re-shaping.

`wordmark.svg` is the word on its own, filled with `currentColor`.
