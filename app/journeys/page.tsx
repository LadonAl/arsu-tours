import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { JOURNEYS } from '@/content/journeys';
import { IMAGES } from '@/content/images';
import { DEMO } from '@/content/site';
import { Money } from '@/components/CurrencyProvider';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Journeys',
  description: 'Illustrative Syria itineraries built on real routes, distances and drive times.',
};

export default function JourneysPage() {
  return (
    <>
      <section className="page-head">
        <div className="shell">
          <p className="eyebrow">Journeys</p>
          <h1 className="display" style={{ marginTop: 14, maxWidth: '16ch' }}>
            Three routes, built around the roads.
          </h1>
          <p className="lead" style={{ marginTop: 20, maxWidth: '58ch' }}>
            The routes and the driving times are real — they come from actual distances on the
            M1, M4 and M5. The departure dates, the prices and the places remaining are invented
            for this demonstration.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 70 }}>
        <div className="shell">
          <p className="notice" style={{ marginBottom: 34, maxWidth: '78ch' }}>
            <strong>Demo:</strong> {DEMO.journeyNotice}
          </p>

          <Reveal stagger>
            <div style={{ display: 'grid', gap: 26 }}>
              {JOURNEYS.map((j) => {
                const img = IMAGES[j.image];
                return (
                  <article
                    key={j.slug}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
                      border: '1px solid var(--bone)',
                      background: '#fff',
                    }}
                    className="max-[780px]:!grid-cols-1"
                  >
                    <div style={{ position: 'relative', minHeight: 260 }}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 780px) 100vw, 45vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ padding: '32px 34px 30px' }}>
                      <p className="eyebrow">{j.meta}</p>
                      <h2 className="h2" style={{ marginTop: 12, fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)' }}>
                        {j.title}
                      </h2>
                      <p className="body" style={{ marginTop: 14 }}>
                        {j.body}
                      </p>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 18 }}>
                        {j.regions.map((r) => (
                          <span
                            key={r}
                            style={{
                              border: '1px solid var(--bone)',
                              padding: '5px 11px',
                              fontSize: '0.74rem',
                              fontWeight: 600,
                              color: 'var(--muted)',
                            }}
                          >
                            {r}
                          </span>
                        ))}
                      </div>
                      <div
                        style={{
                          marginTop: 24,
                          paddingTop: 18,
                          borderTop: '1px solid var(--bone)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'baseline',
                          gap: 14,
                          flexWrap: 'wrap',
                        }}
                      >
                        <span style={{ fontWeight: 800, color: 'var(--green)', fontSize: '1.3rem' }}>
                          <Money usd={j.usd} />
                          <span className="small" style={{ fontWeight: 500, marginInlineStart: 6 }}>
                            per person
                          </span>
                        </span>
                        <Link href={`/journeys/${j.slug}`} className="link-gold">
                          {j.days ? 'Full itinerary' : 'See the journey'} →
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
