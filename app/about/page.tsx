import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ARSU } from '@/content/site';
import { IMAGES } from '@/content/images';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Why this demonstration site is called Arsu — a Palmyrene guardian of travellers, referenced as heritage rather than devotion.',
};

export default function AboutPage() {
  const relief = IMAGES.arsuRelief;
  const pair = IMAGES.arsuAzizos;
  const colonnade = IMAGES.palmyraColonnade;

  return (
    <>
      <section className="page-head">
        <div className="shell">
          <p className="eyebrow">About</p>
          <h1 className="display" style={{ marginTop: 14, maxWidth: '16ch' }}>
            A guardian of the caravan roads.
          </h1>
          <p className="lead" style={{ marginTop: 20, maxWidth: '58ch' }}>
            {ARSU.short}
          </p>
        </div>
      </section>

      <section>
        <div className="shell">
          <div style={{ position: 'relative', aspectRatio: '16/9', background: 'var(--bone)' }}>
            <Image
              src={pair.src}
              alt={pair.alt}
              fill
              priority
              sizes="(max-width: 1240px) 100vw, 1240px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className="illus-note">
            <strong>Illustration, not a photograph.</strong> {pair.archivalNote} Arsu rides the
            camel in armour; his twin Azizos rides the horse in ordinary clothes; a priest makes
            an offering at the altar between them.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div
            style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.7fr) minmax(0, 1.3fr)', gap: 52 }}
            className="max-[900px]:!grid-cols-1 max-[900px]:!gap-8"
          >
            <div>
              <h2 className="h2">Who Arsu was</h2>
              <p className="small" style={{ marginTop: 14, maxWidth: '30ch' }}>
                1st century BCE to 3rd century CE, Palmyra and Dura-Europos.
              </p>
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  marginTop: 26,
                  border: '1px solid var(--bone)',
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={relief.src}
                  alt={relief.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 360px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="illus-note" style={{ marginTop: 10 }}>
                <strong>Illustration.</strong> {relief.archivalNote}
              </p>
            </div>
            <Reveal className="prose">
              {ARSU.body.map((p, i) => (
                <p className="body" key={i} style={{ marginTop: i === 0 ? 0 : 16 }}>
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* The bit that matters most. Stated plainly, not buried. */}
      <section style={{ background: 'var(--paper)', paddingBlock: 60 }}>
        <div className="shell">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 52,
              alignItems: 'start',
            }}
          >
          <div>
            <h2 className="h2">On using the name</h2>
            <p className="body" style={{ marginTop: 16 }}>
              Arsu is an archaeological subject, not a religious one. The cult ended with
              Palmyra&rsquo;s caravan economy after the city&rsquo;s defeat by Rome in 272&ndash;273
              CE — more than seventeen centuries ago — and the related North Arabian cult of
              Ruḍaw is understood by specialists to have died out before the rise of Islam.
            </p>
            <p className="body" style={{ marginTop: 14 }}>
              The name is used here the way a shipping line uses Hermes or a sportswear company
              uses Nike: as a piece of shared heritage from the place the company would be from.
              Nothing on this site invokes, revives, venerates or endorses anything, and nothing
              here is intended as a statement about any living faith.
            </p>
            <p className="body" style={{ marginTop: 14 }}>
              Syria&rsquo;s heritage is layered — Aramean, Roman, Byzantine, Umayyad, Ayyubid,
              Mamluk, Ottoman, and modern — and every layer belongs to the people who live there
              now, whatever they believe. If any of this reads wrong to a Syrian reader, that is
              worth telling us; getting it right matters more than the name does.
            </p>
          </div>

          <figure style={{ margin: 0 }}>
            <div
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                border: '1px solid var(--bone)',
                borderRadius: 4,
                overflow: 'hidden',
              }}
            >
              <Image
                src={colonnade.src}
                alt={colonnade.alt}
                fill
                sizes="(max-width: 900px) 100vw, 520px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <figcaption className="small" style={{ marginTop: 10, fontSize: 12 }}>
              The Great Colonnade at Palmyra, where Arsu had his temple and where excavators
              recovered a jar of 125 clay banquet tokens. Photo by{' '}
              <a href={colonnade.profileUrl} rel="noopener noreferrer nofollow" target="_blank">
                {colonnade.photographer}
              </a>{' '}
              on Unsplash.
            </figcaption>
          </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2 className="h2">Where this comes from</h2>
          <p className="body" style={{ marginTop: 14, maxWidth: '62ch' }}>
            The account above is drawn from museum catalogues and published scholarship rather
            than from memory. The star-pairing of Arsu and Azizos in particular is a
            long-standing scholarly reading, not something the Palmyrenes recorded, and it is
            presented that way.
          </p>
          <ul className="sourcelist">
            {ARSU.sources.map((src) => (
              <li key={src.href}>
                <a href={src.href} target="_blank" rel="noopener noreferrer nofollow">
                  <span>{src.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 28 }}>
            <Link href="/demo" className="link-gold">
              How the rest of this site was researched →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
