import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PLACES, PLACE_BY_SLUG } from '@/content/places';
import { IMAGES } from '@/content/images';
import { JOURNEYS } from '@/content/journeys';
import { DEMO } from '@/content/site';
import { AS_OF } from '@/content/practicalities';
import { Money } from '@/components/CurrencyProvider';
import { Reveal } from '@/components/Reveal';

export function generateStaticParams() {
  return PLACES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const place = PLACE_BY_SLUG[slug];
  if (!place) return {};
  return { title: place.name, description: place.oneLiner };
}

export default async function PlacePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const place = PLACE_BY_SLUG[slug];
  if (!place) notFound();

  const img = IMAGES[place.image];
  const trips = JOURNEYS.filter((j) => j.regions.includes(place.name));

  return (
    <>
      <section className="page-head">
        <div className="shell">
          <Link href="/regions" className="small" style={{ color: 'var(--sienna)', fontWeight: 700 }}>
            ← Where we go
          </Link>
          <div
            style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginTop: 16, flexWrap: 'wrap' }}
          >
            <h1 className="display">{place.name}</h1>
            <span className="ar" lang="ar" dir="rtl" style={{ color: 'var(--accent-ink)', fontSize: '1.7rem' }}>
              {place.ar}
            </span>
          </div>
          <p className="lead" style={{ marginTop: 16, maxWidth: '56ch' }}>
            {place.oneLiner}
          </p>
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
            {img.source === 'unsplash' ? 'on Unsplash' : 'via Wikimedia Commons'} ·{' '}
            <a href={img.licenceUrl} rel="noopener noreferrer nofollow" target="_blank">
              {img.licence}
            </a>
            {img.archivalNote ? ` · ${img.archivalNote}` : ''}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div
            style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 0.7fr)', gap: 52 }}
            className="max-[900px]:!grid-cols-1 max-[900px]:!gap-9"
          >
            <div className="prose">
              <p className="lead">{place.blurb}</p>
              {place.body.map((p, i) => (
                <p className="body" key={i} style={{ marginTop: 16 }}>
                  {p}
                </p>
              ))}
            </div>

            <aside>
              <dl style={{ margin: 0, border: '1px solid var(--bone)' }}>
                <Row label="Typical stay" value={place.days} />
                <Row label="Indicative from" value={<Money usd={place.usd} compact />} />
                <Row label="Best season" value={place.bestSeason} />
                <Row label="Getting there" value={place.gettingThere} />
                <Row label="UNESCO" value={place.unesco} />
              </dl>
              <p className="small" style={{ marginTop: 12, fontSize: '0.73rem' }}>
                Checked {AS_OF}. {DEMO.priceNotice}
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper)', paddingBlock: 64 }}>
        <div className="shell">
          <h2 className="h2">What is actually there</h2>
          <p className="small" style={{ marginTop: 10, maxWidth: '60ch' }}>
            Condition notes are given for each site, including where something was destroyed or
            is closed. They are the point of this page.
          </p>

          <Reveal stagger>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 18,
                marginTop: 30,
              }}
            >
              {place.highlights.map((h) => (
                <article key={h.name} className="hl-card">
                  <div className="hl-head">
                    <h3 className="h3">{h.name}</h3>
                    {h.nameAr && (
                      <span className="ar hl-ar" lang="ar" dir="rtl">
                        {h.nameAr}
                      </span>
                    )}
                  </div>
                  <p className="body hl-blurb">{h.blurb}</p>
                  <p className="condition">{h.condition}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 34 }}
          >
            <Block title="Conservation" body={place.conservation} />
            <Block title="Access" body={place.access} />
            <Block title="On the table" body={place.flavour} />
          </div>

          {trips.length > 0 && (
            <div style={{ marginTop: 54 }}>
              <h2 className="h2">Journeys that include {place.name}</h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
                  gap: 18,
                  marginTop: 24,
                }}
              >
                {trips.map((j) => (
                  <Link
                    key={j.slug}
                    href={`/journeys/${j.slug}`}
                    style={{ border: '1px solid var(--bone)', padding: '22px 24px', display: 'block' }}
                  >
                    <span className="eyebrow">{j.meta}</span>
                    <span
                      style={{
                        display: 'block',
                        marginTop: 10,
                        fontWeight: 800,
                        color: 'var(--green)',
                        fontSize: '1.05rem',
                      }}
                    >
                      {j.title}
                    </span>
                    <span className="small" style={{ display: 'block', marginTop: 12 }}>
                      <Money usd={j.usd} /> per person · demo pricing
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: 44 }}>
            <Link href="/plan" className="btn btn-solid">
              Plan a journey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div style={{ padding: '15px 18px', borderBottom: '1px solid var(--bone)' }}>
      <dt
        style={{
          fontSize: '0.68rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--muted-soft)',
          fontWeight: 700,
        }}
      >
        {label}
      </dt>
      <dd style={{ margin: '6px 0 0', fontSize: '0.87rem', lineHeight: 1.55, color: 'var(--ink)' }}>
        {value}
      </dd>
    </div>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="eyebrow">{title}</h2>
      <p className="body" style={{ marginTop: 12 }}>
        {body}
      </p>
    </div>
  );
}
