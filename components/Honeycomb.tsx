import Link from 'next/link';
import { IMAGES } from '@/content/images';
import type { Place } from '@/content/places';
import { Money } from './CurrencyProvider';

/**
 * The honeycomb place grid, ported from the v11 design rather than
 * reconstructed from a screenshot. The values here are the design's own:
 *
 *   - pointy-top hexagon: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)
 *   - aspect-ratio 1 / 1.1547  (2/sqrt3 — the true hexagon ratio)
 *   - flex basis (100% - gap*(n-0.5)) / (n+0.5), so a row is n hexes plus the
 *     half-cell the offset row needs
 *   - a 1px #E6E2D8 frame drawn as padding behind the clipped photo, turning
 *     gold on hover
 *   - the label is NOT permanent: it fades in over a 95% white panel on hover
 *
 * That last point is the one that matters most. Baking a label into every cell
 * is what made this read as cluttered; the design shows photographs and
 * reveals the text.
 *
 * The price stays reactive to the header currency switch, as it is in the
 * design, via the small <Money> client island.
 */

const CLIP = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
const GAP = 14;

function basis(perRow: number) {
  return `calc((100% - ${GAP * (perRow - 0.5)}px) / ${perRow + 0.5})`;
}

export function Honeycomb({ places, perRow = 5 }: { places: Place[]; perRow?: number }) {
  const half = Math.ceil(places.length / 2);
  const top = places.slice(0, half);
  const bottom = places.slice(half);
  const b = basis(perRow);

  return (
    <>
      <div className="honeycomb max-[720px]:!hidden" data-hexgrid="1" style={{ ['--hex-basis' as string]: b }}>
        <div className="hexrow">
          {top.map((p) => (
            <HexCard key={p.slug} place={p} />
          ))}
        </div>
        <div
          className="hexrow"
          style={{
            // Pull the row up by the hexagon overlap, then indent a half cell.
            marginTop: `calc(${b} * -0.2887 + ${GAP * 0.865}px)`,
          }}
        >
          <span aria-hidden="true" style={{ flex: `0 0 calc(${b} / 2 - ${GAP / 2}px)` }} />
          {bottom.map((p) => (
            <HexCard key={p.slug} place={p} />
          ))}
        </div>
      </div>

      {/* Below 720px a hexagon loses too much of the photograph to the clip and
          the label stops fitting, so the grid becomes ordinary cards. */}
      <div className="cardgrid min-[721px]:!hidden">
        {places.map((p) => (
          <PlainCard key={p.slug} place={p} />
        ))}
      </div>
    </>
  );
}

function HexCard({ place }: { place: Place }) {
  const img = IMAGES[place.image];
  return (
    <Link
      href={`/regions/${place.slug}`}
      className="hexcard"
      data-anim="hex"
      style={{ clipPath: CLIP, flex: '0 0 var(--hex-basis)' }}
    >
      <span
        className="hexcard-photo"
        style={{ clipPath: CLIP, backgroundImage: `url("${img.src}")` }}
        role="img"
        aria-label={img.alt}
      />
      <span className="hexcard-panel" style={{ clipPath: CLIP }}>
        <span className="ar hexcard-ar" lang="ar" dir="rtl">
          {place.ar}
        </span>
        <span className="hexcard-name">{place.name}</span>
        <span className="hexcard-note">{place.note}</span>
        <span className="hexcard-meta">
          {place.days} · from <Money usd={place.usd} compact />
        </span>
      </span>
    </Link>
  );
}

function PlainCard({ place }: { place: Place }) {
  const img = IMAGES[place.image];
  return (
    <Link href={`/regions/${place.slug}`} className="plaincard">
      <span
        style={{
          display: 'block',
          aspectRatio: '16/10',
          backgroundImage: `url("${img.src}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        role="img"
        aria-label={img.alt}
      />
      <span style={{ display: 'block', padding: '16px 18px 20px' }}>
        <span style={{ display: 'flex', alignItems: 'baseline', gap: 9 }}>
          <span style={{ fontWeight: 700, color: 'var(--green)', fontSize: '1.08rem' }}>
            {place.name}
          </span>
          <span
            className="ar"
            lang="ar"
            dir="rtl"
            style={{ color: 'var(--accent-ink)', fontSize: '0.78rem' }}
          >
            {place.ar}
          </span>
        </span>
        <span className="small" style={{ display: 'block', marginTop: 6 }}>
          {place.note}
        </span>
        <span
          className="small"
          style={{ display: 'block', marginTop: 10, color: 'var(--green)', fontWeight: 700 }}
        >
          {place.days} · from <Money usd={place.usd} compact />
        </span>
      </span>
    </Link>
  );
}
