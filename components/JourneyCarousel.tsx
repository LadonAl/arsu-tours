'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IMAGES } from '@/content/images';
import { JOURNEYS } from '@/content/journeys';
import { DEMO } from '@/content/site';
import { Money } from './CurrencyProvider';
import { Ornament } from './Ornament';

export function JourneyCarousel() {
  const [i, setI] = useState(0);
  const n = JOURNEYS.length;
  const go = (next: number) => setI((next + n) % n);
  const j = JOURNEYS[i];
  const img = IMAGES[j.image];

  return (
    <section
      id="journeys"
      style={{ background: 'var(--green)', position: 'relative', overflow: 'hidden' }}
    >
      <Ornament variant="dark" side="left" inset="-8%" offset={-240} />
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '92px 40px 96px', position: 'relative' }} className="max-[640px]:!px-5">
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 20,
            flexWrap: 'wrap',
            marginBottom: 28,
          }}
        >
          <h2 className="h2" style={{ color: '#fff' }}>
            Journeys this autumn
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ color: 'var(--gold)', fontSize: '0.78rem', fontWeight: 700 }}>
              {String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
            </span>
            <button type="button" onClick={() => go(i - 1)} aria-label="Previous journey" className="carousel-btn">
              ←
            </button>
            <button type="button" onClick={() => go(i + 1)} aria-label="Next journey" className="carousel-btn">
              →
            </button>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1fr)',
            background: '#fff',
          }}
          className="max-[820px]:!grid-cols-1"
        >
          <div style={{ position: 'relative', minHeight: 320 }}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 820px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div style={{ padding: '38px 38px 34px' }}>
            <p className="eyebrow">{j.meta}</p>
            <h3 className="h2" style={{ marginTop: 12, fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}>
              {j.title}
            </h3>
            <p className="body" style={{ marginTop: 14 }}>
              {j.body}
            </p>


            <div
              style={{
                marginTop: 26,
                paddingTop: 20,
                borderTop: '1px solid var(--bone)',
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: 16,
                flexWrap: 'wrap',
              }}
            >
              <span style={{ fontWeight: 800, color: 'var(--green)', fontSize: '1.4rem' }}>
                <Money usd={j.usd} />
                <span className="small" style={{ fontWeight: 500, marginInlineStart: 6 }}>
                  per person
                </span>
              </span>
              <Link href={`/journeys/${j.slug}`} className="btn btn-solid">
                {j.slug === 'silk-road' ? 'Full itinerary' : 'See the journey'}
              </Link>
            </div>

            <p className="small" style={{ marginTop: 14, color: 'var(--sienna)' }}>
              {j.seats} · <em>{DEMO.journeyNotice}</em>
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 7, justifyContent: 'center', marginTop: 26 }}>
          {JOURNEYS.map((jj, k) => (
            <button
              key={jj.slug}
              type="button"
              onClick={() => go(k)}
              aria-label={`Show ${jj.title}`}
              aria-current={k === i ? 'true' : undefined}
              style={{
                width: k === i ? 38 : 14,
                height: 4,
                border: 0,
                padding: 0,
                cursor: 'pointer',
                background: k === i ? 'var(--gold)' : 'rgba(255,255,255,0.35)',
                transition: 'width 0.25s ease, background-color 0.25s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
