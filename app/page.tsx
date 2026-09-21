import Link from 'next/link';
import Image from 'next/image';
import { HERO, ARSU, DEMO } from '@/content/site';
import { PLACES } from '@/content/places';
import { IMAGES } from '@/content/images';
import { LEAD } from '@/content/journal';
import { Honeycomb } from '@/components/Honeycomb';
import { JourneyCarousel } from '@/components/JourneyCarousel';
import { Reveal } from '@/components/Reveal';

export default function Home() {
  const hero = IMAGES.damascusSouq;

  return (
    <>
      {/* ---------------------------------------------------------------- hero */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <span
          className="pattern"
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: -60,
            right: -120,
            width: 720,
            height: 620,
            opacity: 0.14,
            pointerEvents: 'none',
          }}
        />
        <div className="shell" style={{ paddingBlock: '64px 30px', position: 'relative' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.05fr)',
              gap: 52,
              alignItems: 'center',
            }}
            className="max-[900px]:!grid-cols-1 max-[900px]:!gap-9"
          >
            <div>
              <h1 className="display">{HERO.title}</h1>
              <p className="lead" style={{ marginTop: 20, maxWidth: '44ch' }}>
                {HERO.lead}
              </p>
              <div style={{ display: 'flex', gap: 18, alignItems: 'center', marginTop: 30, flexWrap: 'wrap' }}>
                <Link href="/plan" className="btn btn-solid">
                  Plan a journey
                </Link>
                <Link href="/regions" className="link-gold">
                  See the ten regions →
                </Link>
              </div>
            </div>

            <div>
              <div style={{ position: 'relative', aspectRatio: '4/3', background: 'var(--bone)' }}>
                <Image
                  src={hero.src}
                  alt={hero.alt}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 560px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="small" style={{ marginTop: 9, fontSize: '0.72rem' }}>
                Souq al-Hamidiyya, Damascus. Photo by{' '}
                <a href={hero.profileUrl} rel="noopener noreferrer nofollow" target="_blank">
                  {hero.photographer}
                </a>{' '}
                on Unsplash.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 20,
                  marginTop: 22,
                }}
                className="max-[560px]:!grid-cols-1"
              >
                {HERO.facts.map((f) => (
                  <div key={f.title} className="fact-col">
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '0.86rem', color: 'var(--green)' }}>
                      {f.title}
                    </p>
                    <p className="small" style={{ marginTop: 3, fontSize: '0.76rem' }}>
                      {f.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="shell">
        <div className="rule-ornament" aria-hidden="true">
          <span
            className="hex"
            style={{ width: 15, height: 17, background: 'var(--gold)', flex: '0 0 auto' }}
          />
        </div>
      </div>

      {/* ------------------------------------------------------------- regions */}
      <section className="section" id="regions">
        <div className="shell">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: 24,
              flexWrap: 'wrap',
              marginBottom: 40,
            }}
          >
            <h2 className="h2">Where we go</h2>
            <p className="small" style={{ maxWidth: '38ch' }}>
              Ten regions, each with a guide who grew up there. Indicative prices per person,
              workshop fees included.
            </p>
          </div>

          <Reveal>
            <Honeycomb places={PLACES} />
          </Reveal>

          <p className="notice" style={{ marginTop: 44, maxWidth: '76ch' }}>
            <strong>Demo:</strong> {DEMO.priceNotice} The destination information, by contrast, is
            researched and fact-checked —{' '}
            <Link href="/demo" style={{ textDecoration: 'underline', textUnderlineOffset: 3 }}>
              how that was done
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ journeys */}
      <JourneyCarousel />

      {/* ---------------------------------------------------------------- arsu */}
      <section className="section">
        <div className="shell">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.15fr)',
              gap: 52,
            }}
            className="max-[900px]:!grid-cols-1 max-[900px]:!gap-8"
          >
            <div>
              <p className="eyebrow">{ARSU.headline}</p>
              <h2 className="h2" style={{ marginTop: 14 }}>
                A guardian of the caravan roads
              </h2>
            </div>
            <div className="prose">
              <p className="lead">{ARSU.short}</p>
              <p className="body" style={{ marginTop: 16 }}>
                {ARSU.body[1]}
              </p>
              <Link href="/about" className="link-gold" style={{ marginTop: 20 }}>
                The whole story, and the sources →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- journal */}
      <section className="section-tight" style={{ background: 'var(--paper)' }}>
        <div className="shell">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
              gap: 40,
              alignItems: 'center',
            }}
            className="max-[820px]:!grid-cols-1"
          >
            <div style={{ position: 'relative', aspectRatio: '4/3' }}>
              <Image
                src={IMAGES[LEAD.image!].src}
                alt={IMAGES[LEAD.image!].alt}
                fill
                sizes="(max-width: 820px) 100vw, 440px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <p className="eyebrow">
                From the journal · {LEAD.place} · {LEAD.read}
              </p>
              <h2 className="h2" style={{ marginTop: 14, fontSize: 'clamp(1.45rem, 2.5vw, 1.95rem)' }}>
                {LEAD.title}
              </h2>
              <p className="body" style={{ marginTop: 14 }}>
                {LEAD.dek}
              </p>
              <Link href="/journal" className="link-gold" style={{ marginTop: 20 }}>
                Read the journal →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
