import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { JOURNEYS, JOURNEY_BY_SLUG } from '@/content/journeys';
import { IMAGES } from '@/content/images';
import { DEMO } from '@/content/site';
import { Money } from '@/components/CurrencyProvider';
import { Reveal } from '@/components/Reveal';

export function generateStaticParams() {
  return JOURNEYS.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const j = JOURNEY_BY_SLUG[slug];
  if (!j) return {};
  return { title: j.title, description: j.body };
}

export default async function JourneyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const j = JOURNEY_BY_SLUG[slug];
  if (!j) notFound();
  const img = IMAGES[j.image];

  return (
    <>
      <section className="page-head">
        <div className="shell">
          <Link href="/journeys" className="small" style={{ color: 'var(--sienna)', fontWeight: 700 }}>
            ← Journeys
          </Link>
          <p className="eyebrow" style={{ marginTop: 16 }}>
            {j.meta}
          </p>
          <h1 className="display" style={{ marginTop: 12, maxWidth: '16ch' }}>
            {j.title}
          </h1>
          <p className="lead" style={{ marginTop: 18, maxWidth: '56ch' }}>
            {j.body}
          </p>
          <div
            style={{
              display: 'flex',
              gap: 28,
              marginTop: 26,
              flexWrap: 'wrap',
              alignItems: 'baseline',
            }}
          >
            <span style={{ fontWeight: 800, color: 'var(--green)', fontSize: '1.6rem' }}>
              <Money usd={j.usd} />
              <span className="small" style={{ fontWeight: 500, marginInlineStart: 6 }}>
                per person
              </span>
            </span>
            <span className="small" style={{ color: 'var(--sienna)', fontWeight: 700 }}>
              {j.date} · {j.seats}
            </span>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <div style={{ position: 'relative', aspectRatio: '21/9', background: 'var(--bone)' }}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority
              sizes="(max-width: 1180px) 100vw, 1180px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className="small" style={{ marginTop: 9, fontSize: '0.73rem' }}>
            {img.alt}. Photo by{' '}
            <a href={img.profileUrl} rel="noopener noreferrer nofollow" target="_blank">
              {img.photographer}
            </a>{' '}
            {img.source === 'unsplash' ? 'on Unsplash' : 'via Wikimedia Commons'}.
          </p>
          <p className="notice" style={{ marginTop: 26, maxWidth: '78ch' }}>
            <strong>Demo:</strong> {DEMO.journeyNotice}
          </p>
        </div>
      </section>

      {j.days ? (
        <section className="section">
          <div className="shell">
            <h2 className="h2">Day by day</h2>
            <Reveal stagger>
              <div style={{ marginTop: 32 }}>
                {j.days.map((d) => (
                  <article
                    key={d.n}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '84px minmax(0, 1fr)',
                      gap: 26,
                      paddingBlock: 28,
                      borderTop: '1px solid var(--bone)',
                    }}
                    className="max-[640px]:!grid-cols-1 max-[640px]:!gap-3"
                  >
                    <div>
                      <span
                        style={{
                          fontSize: '1.75rem',
                          fontWeight: 800,
                          color: 'var(--gold)',
                          lineHeight: 1,
                        }}
                      >
                        {d.n}
                      </span>
                      <span
                        className="ar"
                        lang="ar"
                        dir="rtl"
                        style={{ display: 'block', marginTop: 8, color: 'var(--muted-soft)', fontSize: '0.8rem' }}
                      >
                        {d.ar}
                      </span>
                    </div>
                    <div>
                      <p className="eyebrow">{d.place}</p>
                      <h3 className="h3" style={{ marginTop: 8, fontSize: '1.22rem' }}>
                        {d.title}
                      </h3>
                      <p className="body" style={{ marginTop: 11 }}>
                        {d.body}
                      </p>
                      <p className="small" style={{ marginTop: 11, color: 'var(--sienna)' }}>
                        {d.night}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ) : (
        <section className="section">
          <div className="shell">
            <div style={{ maxWidth: '62ch' }}>
              <h2 className="h2">The route</h2>
              <p className="body" style={{ marginTop: 16 }}>
                A full day-by-day itinerary has not been written for this route in the demo —
                only the seven-day Silk Road journey carries one. The regions it covers are
                described in detail on their own pages.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 22 }}>
                {j.regions.map((r) => (
                  <Link
                    key={r}
                    href={`/regions/${r.toLowerCase()}`}
                    className="chip"
                    style={{ textDecoration: 'none' }}
                  >
                    {r} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section style={{ background: 'var(--paper)', paddingBlock: 56 }}>
        <div className="shell" style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
          <p className="lead" style={{ flex: 1, minWidth: '26ch' }}>
            This journey cannot be booked — there is no company behind it.
          </p>
          <Link href="/plan" className="btn btn-solid">
            See the enquiry form anyway
          </Link>
        </div>
      </section>
    </>
  );
}
