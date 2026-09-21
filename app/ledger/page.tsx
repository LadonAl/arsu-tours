import type { Metadata } from 'next';
import { SPLIT, STATS, SAMPLE_TOTAL_USD, SAMPLE_LABEL, LEDGER_INTRO, REAL_NOTE } from '@/content/ledger';
import { DEMO } from '@/content/site';
import { Money } from '@/components/CurrencyProvider';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'The ledger',
  description: 'An illustrative breakdown of where the money from a booking would go.',
};

export default function LedgerPage() {
  return (
    <>
      <section className="page-head" style={{ position: 'relative', overflow: 'hidden' }}>
        <span
          className="pattern"
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: -80,
            right: -140,
            width: 640,
            height: 560,
            opacity: 0.16,
            pointerEvents: 'none',
          }}
        />
        <div className="shell" style={{ position: 'relative' }}>
          <p className="eyebrow">The ledger</p>
          <h1 className="display" style={{ marginTop: 14, maxWidth: '14ch' }}>
            Where the money goes, line by line.
          </h1>
          <p className="lead" style={{ marginTop: 20, maxWidth: '58ch' }}>
            {LEDGER_INTRO}
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 30 }}>
        <div className="shell">
          <p className="notice" style={{ maxWidth: '78ch' }}>
            <strong>Every number on this page is invented.</strong> {DEMO.ledgerNotice}
          </p>
        </div>
      </section>

      {/* Hexagon stat cells — the design's signature treatment for this page */}
      <section style={{ paddingBottom: 56 }}>
        <div className="shell">
          <Reveal stagger>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: 20,
              }}
            >
              {STATS.map((s) => (
                <div key={s.label} style={{ position: 'relative', aspectRatio: '1 / 1.08' }}>
                  <span
                    className="hex-outline"
                    aria-hidden="true"
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    <span style={{ position: 'absolute', inset: 1, background: '#fff' }} />
                  </span>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      padding: '0 17%',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 'clamp(1.7rem, 3.4vw, 2.3rem)',
                        fontWeight: 800,
                        color: 'var(--green)',
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </span>
                    <span className="small" style={{ marginTop: 10, fontSize: '0.75rem' }}>
                      {s.label}
                    </span>
                    {s.illustrative && (
                      <span
                        style={{
                          marginTop: 7,
                          fontSize: '0.67rem',
                          color: 'var(--sienna)',
                          fontWeight: 700,
                        }}
                      >
                        (illustrative)
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Breakdown */}
      <section style={{ background: 'var(--paper)', paddingBlock: 64 }}>
        <div className="shell">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: 20,
              flexWrap: 'wrap',
            }}
          >
            <h2 className="h2">One booking, broken down</h2>
            <p className="small" style={{ fontWeight: 700, color: 'var(--green)' }}>
              {SAMPLE_LABEL} · <Money usd={SAMPLE_TOTAL_USD} />
            </p>
          </div>
          <p className="body" style={{ marginTop: 14, maxWidth: '58ch' }}>
            Amounts update with the currency you chose in the header. The Syrian pound figures
            use the redenominated currency introduced on 1 January 2026, at an indicative rate.
          </p>

          <Reveal stagger>
            <div style={{ marginTop: 32 }}>
              {SPLIT.map((s) => (
                <div
                  key={s.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.3fr) 58px 84px',
                    gap: 18,
                    alignItems: 'center',
                    paddingBlock: 18,
                    borderTop: '1px solid var(--bone)',
                  }}
                  className="max-[760px]:!grid-cols-[minmax(0,1fr)_60px]"
                >
                  <div>
                    <p style={{ margin: 0, fontWeight: 700, color: 'var(--green)', fontSize: '0.93rem' }}>
                      {s.label}
                    </p>
                    <p className="small" style={{ marginTop: 4, fontSize: '0.77rem' }}>
                      {s.note}
                    </p>
                  </div>
                  <div
                    className="max-[760px]:!hidden"
                    style={{ height: 8, background: 'var(--bone)', position: 'relative' }}
                    role="img"
                    aria-label={`${s.pct} percent`}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: `${s.pct}%`,
                        background: 'var(--gold)',
                      }}
                    />
                  </div>
                  <span style={{ fontWeight: 800, color: 'var(--green)', fontSize: '0.95rem' }}>
                    {s.pct}%
                  </span>
                  <span
                    className="small max-[760px]:!hidden"
                    style={{ textAlign: 'right', fontWeight: 600 }}
                  >
                    <Money usd={(SAMPLE_TOTAL_USD * s.pct) / 100} />
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div style={{ maxWidth: '68ch' }}>
            <h2 className="h2">What is actually true here</h2>
            <p className="body" style={{ marginTop: 16 }}>
              {REAL_NOTE.text}
            </p>
            <p style={{ marginTop: 18 }}>
              <a
                href={REAL_NOTE.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="link-gold"
              >
                UNESCO Intangible Cultural Heritage lists ↗
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
