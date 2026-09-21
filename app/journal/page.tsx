import type { Metadata } from 'next';
import Image from 'next/image';
import { LEAD, POSTS } from '@/content/journal';
import { IMAGES } from '@/content/images';
import { DEMO } from '@/content/site';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Illustrative field notes written for this demonstration site.',
};

export default function JournalPage() {
  const img = IMAGES[LEAD.image!];
  return (
    <>
      <section className="page-head">
        <div className="shell">
          <p className="eyebrow">Journal</p>
          <h1 className="display" style={{ marginTop: 14, maxWidth: '15ch' }}>
            Notes from the road.
          </h1>
          <p className="lead" style={{ marginTop: 20, maxWidth: '56ch' }}>
            What changed this month, what we stopped doing, and why.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 26 }}>
        <div className="shell">
          <p className="notice" style={{ maxWidth: '78ch' }}>
            <strong>Demo:</strong> {DEMO.journalNotice} The conditions they describe — the state
            of the Aleppo souq restoration, the Palmyra desert road, the norias at dusk — are
            drawn from the same research as the rest of the site.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 56 }}>
        <div className="shell">
          <article
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)',
              border: '1px solid var(--bone)',
            }}
            className="max-[820px]:!grid-cols-1"
          >
            <div style={{ position: 'relative', minHeight: 300 }}>
              <Image src={img.src} alt={img.alt} fill priority sizes="(max-width: 820px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '36px 36px 32px' }}>
              <p className="eyebrow">
                {LEAD.date} · {LEAD.place} · {LEAD.read}
              </p>
              <h2 className="h2" style={{ marginTop: 12, fontSize: 'clamp(1.45rem, 2.5vw, 2rem)' }}>
                {LEAD.title}
              </h2>
              <p className="lead" style={{ marginTop: 14 }}>{LEAD.dek}</p>
              {LEAD.body?.map((p, i) => (
                <p className="body" key={i} style={{ marginTop: 14 }}>{p}</p>
              ))}
              <p className="small" style={{ marginTop: 18, color: 'var(--sienna)' }}>{LEAD.author}</p>
            </div>
          </article>
        </div>
      </section>

      <section style={{ paddingBottom: 70 }}>
        <div className="shell">
          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 1, background: 'var(--bone)', border: '1px solid var(--bone)' }}>
              {POSTS.map((p) => (
                <article key={p.slug} style={{ background: '#fff', padding: '26px 26px 28px' }}>
                  <p className="eyebrow" style={{ fontSize: '0.66rem' }}>
                    {p.date} · {p.place} · {p.read}
                  </p>
                  <h2 className="h3" style={{ marginTop: 11, fontSize: '1.08rem' }}>{p.title}</h2>
                  <p className="small" style={{ marginTop: 10 }}>{p.dek}</p>
                  <span className="ar" lang="ar" dir="rtl" style={{ display: 'block', marginTop: 14, color: 'var(--accent-ink)', fontSize: '0.8rem' }}>
                    {p.ar}
                  </span>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
