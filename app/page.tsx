import Link from 'next/link';
import Image from 'next/image';
import { HERO, DEMO } from '@/content/site';
import { PLACES } from '@/content/places';
import { IMAGES } from '@/content/images';
import { LEAD, POSTS } from '@/content/journal';
import { Honeycomb } from '@/components/Honeycomb';
import { JourneyCarousel } from '@/components/JourneyCarousel';
import { Reveal } from '@/components/Reveal';
import { HexStats } from '@/components/HexStats';
import { Ornament } from '@/components/Ornament';
import { STATS } from '@/content/ledger';

/**
 * Home. Layout values are the v11 design's own — the 1240/40px container, the
 * 96/104 hero padding, the auto-fit 340px grid with a 56px gutter, and the
 * ornament bleeding off the right edge.
 */
export default function Home() {
  const hero = IMAGES.damascusSouq;

  return (
    <>
      {/* ---------------------------------------------------------------- hero */}
      <section id="top" style={{ position: 'relative', background: '#fff', overflow: 'hidden' }}>
        <Ornament variant="light" side="right" inset="-6%" offset={-230} />
        <div
          style={{
            position: 'relative',
            maxWidth: 1240,
            margin: '0 auto',
            padding: '96px 40px 104px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 56,
            alignItems: 'center',
          }}
          className="max-[640px]:!px-5 max-[640px]:!pt-14 max-[640px]:!pb-16"
        >
          <div style={{ minWidth: 0 }}>
            <h1 className="display" data-anim="hero-h1" style={{ margin: '0 0 26px' }}>
              {HERO.title}
            </h1>
            <p
              className="lead"
              data-anim="hero-lead"
              style={{ maxWidth: 480, margin: '0 0 40px', textWrap: 'pretty' }}
            >
              {HERO.lead}
            </p>
            <div data-anim="hero-cta" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px 28px' }}>
              <Link href="/plan" className="btn btn-solid">
                Plan a journey
              </Link>
              <Link href="/regions" className="link-gold">
                See the ten regions <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div style={{ minWidth: 0 }}>
            <div
              data-anim="hero-photo"
              style={{
                borderRadius: 4,
                overflow: 'hidden',
                border: '1px solid var(--bone)',
                boxShadow: '0 20px 50px rgba(11,59,47,0.1)',
                position: 'relative',
                aspectRatio: '4 / 3',
              }}
            >
              <Image
                src={hero.src}
                alt={hero.alt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 560px"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div
              data-anim="hero-facts"
              style={{
                marginTop: 22,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 120px), 1fr))',
                gap: '18px 26px',
              }}
            >
              {HERO.facts.map((f) => (
                <div
                  key={f.title}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 5,
                    paddingLeft: 14,
                    borderLeft: '2px solid var(--gold)',
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--green)' }}>
                    {f.title}
                  </span>
                  <span style={{ fontSize: 12, lineHeight: '18px', color: 'var(--muted-soft)' }}>
                    {f.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider: a hairline rule broken by the gold hexagon mark. */}
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
        }}
        className="max-[640px]:!px-5"
        aria-hidden="true"
      >
        <span style={{ height: 1, background: 'var(--bone)', flex: 1 }} />
        <span
          data-anim="hex-mark"
          style={{
            width: 24,
            height: 27,
            backgroundImage: 'url(/brand/ornament-hex.svg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: 'block',
          }}
        />
        <span style={{ height: 1, background: 'var(--bone)', flex: 1 }} />
      </div>

      {/* ------------------------------------------------------------- regions */}
      <section id="regions" style={{ background: '#fff', padding: '84px 40px 96px' }} className="max-[640px]:!px-5">
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '16px 40px',
              marginBottom: 44,
            }}
          >
            <h2 className="h2" style={{ minWidth: 0 }}>
              <Link href="/regions" style={{ color: 'inherit' }}>
                Where we go
              </Link>
            </h2>
            <p className="body" style={{ maxWidth: 360 }}>
              Ten regions, each with a guide who grew up there. Indicative prices per person,
              workshop fees included.
            </p>
          </div>

          <Reveal>
            <Honeycomb places={PLACES} perRow={5} />
          </Reveal>

          <p className="notice" style={{ marginTop: 44, maxWidth: '76ch' }}>
            <strong>Demo:</strong> {DEMO.priceNotice} The destination information, by contrast, is
            researched and fact-checked — <Link href="/demo">how that was done</Link>.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ journeys */}
      <JourneyCarousel />

      {/* ----------------------------------------------------------- the money */}
      <section id="money" style={{ background: '#fff', padding: '88px 40px 104px' }} className="max-[640px]:!px-5">
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <Reveal style={{ maxWidth: 620, marginBottom: 52 }}>
            <h2 className="h2" style={{ margin: '0 0 18px' }}>
              Where the money goes
            </h2>
            <p style={{ fontSize: 16, lineHeight: '27px', color: 'var(--muted)', margin: '0 0 24px' }}>
              A real operator would publish the split on every booking. On this demonstration
              site the figures are invented, and every one of them is labelled as such.
            </p>
            <Link href="/ledger" className="link-gold">
              Read the ledger <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <HexStats stats={STATS} ghosts={2} />
        </div>
      </section>

      {/* ------------------------------------------------------------- journal */}
      <section
        style={{
          background: 'var(--paper)',
          borderTop: '1px solid var(--bone)',
          padding: '78px 40px 84px',
        }}
        className="max-[640px]:!px-5"
      >
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '16px 40px',
              marginBottom: 36,
            }}
          >
            <h2 className="h2" style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.08 }}>
              From the road, this month
            </h2>
            <Link href="/journal" className="link-gold">
              The whole journal <span aria-hidden="true">→</span>
            </Link>
          </div>

          <Reveal stagger>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: 1,
                background: 'var(--bone)',
                border: '1px solid var(--bone)',
              }}
            >
              {[LEAD, ...POSTS].slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  href="/journal"
                  style={{
                    background: '#fff',
                    padding: '34px 30px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    color: 'inherit',
                  }}
                >
                  <span className="eyebrow">
                    {post.date} · {post.place} · {post.read}
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 19,
                      lineHeight: 1.3,
                      color: 'var(--green)',
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {post.title}
                  </span>
                  <span className="small">{post.dek}</span>
                  <span
                    className="ar"
                    lang="ar"
                    dir="rtl"
                    style={{ color: 'var(--accent-ink)', fontSize: 13, marginTop: 'auto', paddingTop: 8 }}
                  >
                    {post.ar}
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>

          <p className="notice" style={{ marginTop: 32, maxWidth: '76ch' }}>
            <strong>Demo:</strong> {DEMO.journalNotice}
          </p>
        </div>
      </section>
    </>
  );
}
