import type { Metadata } from 'next';
import Link from 'next/link';
import { PLACES } from '@/content/places';
import { DEMO } from '@/content/site';
import { Honeycomb } from '@/components/Honeycomb';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Where we go',
  description:
    'Ten regions of Syria, with researched and fact-checked notes on what stands, what does not, and what it currently takes to visit.',
};

export default function RegionsPage() {
  return (
    <>
      <section className="page-head">
        <div className="shell" data-anim="page-head">
          <p className="eyebrow">Where we go</p>
          <h1 className="display" style={{ marginTop: 14, maxWidth: '17ch' }}>
            Ten regions, honestly described.
          </h1>
          <p className="lead" style={{ marginTop: 20, maxWidth: '58ch' }}>
            Each of these has a page saying what is standing, what was destroyed and when, and
            what the current access situation actually is — including where the answer is
            &ldquo;nobody has verified that since 2014&rdquo;.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 60 }}>
        <div className="shell">
          <Reveal>
            <Honeycomb places={PLACES} perRow={5} />
          </Reveal>
        </div>
      </section>

      <section style={{ paddingBottom: 70 }}>
        <div className="shell">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 1,
              background: 'var(--bone)',
              border: '1px solid var(--bone)',
            }}
          >
            {PLACES.map((p) => (
              <Link
                key={p.slug}
                href={`/regions/${p.slug}`}
                style={{ background: '#fff', padding: '22px 24px 24px', display: 'block' }}
              >
                <span style={{ display: 'flex', alignItems: 'baseline', gap: 9 }}>
                  <span style={{ fontWeight: 800, color: 'var(--green)', fontSize: '1.02rem' }}>
                    {p.name}
                  </span>
                  <span
                    className="ar"
                    lang="ar"
                    dir="rtl"
                    style={{ color: 'var(--accent-ink)', fontSize: '0.78rem' }}
                  >
                    {p.ar}
                  </span>
                </span>
                <span className="small" style={{ display: 'block', marginTop: 8 }}>
                  {p.oneLiner}
                </span>
                <span
                  className="small"
                  style={{ display: 'block', marginTop: 12, color: 'var(--sienna)', fontWeight: 700 }}
                >
                  {p.days}
                </span>
              </Link>
            ))}
          </div>

          <p className="notice" style={{ marginTop: 32, maxWidth: '78ch' }}>
            <strong>Demo:</strong> {DEMO.priceNotice}
          </p>
        </div>
      </section>
    </>
  );
}
