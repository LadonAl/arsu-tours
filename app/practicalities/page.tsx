import type { Metadata } from 'next';
import Link from 'next/link';
import { GROUPS, ADVISORIES, ADVISORY_SUMMARY, AS_OF } from '@/content/practicalities';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Practicalities',
  description:
    'Visas, arrival routes, money, advisories and etiquette for travel to Syria — sourced and dated as of September 2026.',
};

export default function PracticalitiesPage() {
  return (
    <>
      <section className="page-head">
        <div className="shell" data-anim="page-head">
          <p className="eyebrow">Practicalities</p>
          <h1 className="display" style={{ marginTop: 14, maxWidth: '15ch' }}>
            The questions people actually ask.
          </h1>
          <p className="lead" style={{ marginTop: 20, maxWidth: '58ch' }}>
            Checked against government sources on {AS_OF}. Syria is changing quickly — flights,
            border crossings, sanctions and payments have all shifted within the last year — so
            treat every answer below as dated, and re-check before you commit to anything.
          </p>
        </div>
      </section>

      {/* Advisories first. Anything else at the top would be burying it. */}
      <section style={{ paddingBottom: 20 }}>
        <div className="shell">
          <div style={{ border: '1px solid var(--bone)', background: 'var(--paper)' }}>
            <div style={{ padding: '26px 28px 8px' }}>
              <h2 className="h3" style={{ color: 'var(--sienna)' }}>
                What the travel advisories say
              </h2>
              <p className="body" style={{ marginTop: 12, maxWidth: '70ch' }}>
                {ADVISORY_SUMMARY}
              </p>
            </div>
            <div style={{ padding: '10px 28px 26px', display: 'grid', gap: 1 }}>
              {ADVISORIES.map((a) => (
                <div
                  key={a.body}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 0.7fr) minmax(0, 1.5fr)',
                    gap: 18,
                    paddingBlock: 16,
                    borderTop: '1px solid var(--bone)',
                    alignItems: 'start',
                  }}
                  className="max-[760px]:!grid-cols-1 max-[760px]:!gap-2"
                >
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--green)' }}
                  >
                    {a.body} ↗
                  </a>
                  <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--sienna)' }}>
                    {a.level}
                  </span>
                  <span className="small">{a.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div style={{ display: 'grid', gap: 54 }}>
            {GROUPS.map((g) => (
              <Reveal key={g.title}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 0.55fr) minmax(0, 1.45fr)',
                    gap: 40,
                  }}
                  className="max-[860px]:!grid-cols-1 max-[860px]:!gap-5"
                >
                  <div>
                    <h2 className="h2" style={{ fontSize: 'clamp(1.35rem, 2.3vw, 1.8rem)' }}>
                      {g.title}
                    </h2>
                    <span
                      className="ar"
                      lang="ar"
                      dir="rtl"
                      style={{ display: 'block', marginTop: 8, color: 'var(--accent-ink)', fontSize: '0.92rem' }}
                    >
                      {g.ar}
                    </span>
                  </div>

                  <div>
                    {g.items.map((it) => (
                      <div
                        key={it.q}
                        style={{ paddingBlock: 22, borderTop: '1px solid var(--bone)' }}
                      >
                        <h3 className="h3" style={{ fontSize: '1.05rem' }}>
                          {it.q}
                        </h3>
                        <p className="body" style={{ marginTop: 10 }}>
                          {it.a}
                        </p>
                        {it.note && (
                          <p className="notice" style={{ marginTop: 12 }}>
                            {it.note}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="notice" style={{ marginTop: 50, maxWidth: '78ch' }}>
            <strong>Demo:</strong> this is a demonstration site, not a licensed tour operator, and
            nothing here is travel advice you should rely on.{' '}
            <Link href="/demo" style={{ textDecoration: 'underline', textUnderlineOffset: 3 }}>
              More about that
            </Link>
            . If you are genuinely planning to travel, start with your own government&rsquo;s
            current advisory.
          </p>
        </div>
      </section>
    </>
  );
}
