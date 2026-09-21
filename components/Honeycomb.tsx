import Link from 'next/link';
import Image from 'next/image';
import { IMAGES } from '@/content/images';
import type { Place } from '@/content/places';
import { Money } from './CurrencyProvider';

/**
 * The honeycomb place grid — the signature element of the v11 design.
 *
 * Two interlocked rows on wide screens; below 900px it becomes an ordinary
 * card grid, because hexagons at phone width lose too much of the photograph
 * to the clip and the text stops fitting.
 */
export function Honeycomb({ places }: { places: Place[] }) {
  const half = Math.ceil(places.length / 2);
  const top = places.slice(0, half);
  const bottom = places.slice(half);

  return (
    <>
      {/* Wide: interlocked hexagons */}
      <div className="honeycomb max-[900px]:!hidden">
        <HexRow places={top} />
        <HexRow places={bottom} offset />
      </div>

      {/* Narrow: plain cards */}
      <div className="cardgrid min-[901px]:!hidden">
        {places.map((p) => (
          <PlainCard key={p.slug} place={p} />
        ))}
      </div>
    </>
  );
}

function HexRow({ places, offset = false }: { places: Place[]; offset?: boolean }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 'var(--hex-gap)',
        marginTop: offset ? 'calc(var(--hex-h) * -0.235)' : 0,
        // transform, not margin — a margin widens the flex line and pushes the
        // page into horizontal overflow. Each row shifts a quarter-hex in
        // opposite directions so the interlocked block stays centred.
        transform: `translateX(calc((var(--hex-w) + var(--hex-gap)) * ${offset ? '0.25' : '-0.25'}))`,
      }}
    >
      {places.map((p) => (
        <HexCard key={p.slug} place={p} />
      ))}
    </div>
  );
}

function HexCard({ place }: { place: Place }) {
  const img = IMAGES[place.image];
  return (
    <Link
      href={`/regions/${place.slug}`}
      className="hexcard hex"
      aria-label={`${place.name} — ${place.note}`}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(max-width: 1200px) 30vw, 280px"
        style={{ objectFit: 'cover' }}
      />
      <span className="hexcard-veil" aria-hidden="true" />
      <span className="hexcard-text">
        <span className="hexcard-name">{place.cardName ?? place.name}</span>
        <span className="hexcard-ar ar" lang="ar" dir="rtl">
          {place.ar}
        </span>
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
      <span style={{ position: 'relative', display: 'block', aspectRatio: '16/10' }}>
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 700px) 100vw, 45vw"
          style={{ objectFit: 'cover' }}
        />
      </span>
      <span style={{ display: 'block', padding: '16px 18px 20px' }}>
        <span style={{ display: 'flex', alignItems: 'baseline', gap: 9 }}>
          <span style={{ fontWeight: 800, color: 'var(--green)', fontSize: '1.06rem' }}>
            {place.name}
          </span>
          <span className="ar" lang="ar" dir="rtl" style={{ color: 'var(--accent-ink)', fontSize: '0.8rem' }}>
            {place.ar}
          </span>
        </span>
        <span className="small" style={{ display: 'block', marginTop: 6 }}>
          {place.note}
        </span>
        <span
          className="small"
          style={{ display: 'block', marginTop: 10, color: 'var(--sienna)', fontWeight: 700 }}
        >
          {place.days} · from <Money usd={place.usd} compact />
        </span>
      </span>
    </Link>
  );
}
