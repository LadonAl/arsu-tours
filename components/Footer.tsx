import Link from 'next/link';
import { NAV, SITE, DEMO } from '@/content/site';

const SECONDARY = [
  { href: '/plan', label: 'Plan a journey' },
  { href: '/credits', label: 'Photo credits' },
  { href: '/demo', label: 'About this demo' },
];

export function Footer() {
  return (
    <footer style={{ background: 'var(--green)', color: '#fff', marginTop: 96 }}>
      <div className="shell" style={{ paddingBlock: '56px 40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 40,
            alignItems: 'start',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/mark-inverse.svg" alt="" width={62} height={62} aria-hidden="true" />
              <span
                className="ar"
                lang="ar"
                dir="rtl"
                style={{ color: 'var(--gold)', fontSize: 26, lineHeight: 1, fontWeight: 600 }}
              >
                {SITE.ar}
              </span>
            </div>
            <p
              style={{
                marginTop: 18,
                fontSize: '0.86rem',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.74)',
                maxWidth: '30ch',
              }}
            >
              Named for a Palmyrene guardian of travellers on the caravan roads. Used as
              heritage, not devotion —{' '}
              <Link href="/about" style={{ color: 'var(--gold)' }}>
                the full story
              </Link>
              .
            </p>
          </div>

          <nav aria-label="Footer">
            <h2
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.19em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                margin: '0 0 16px',
              }}
            >
              Explore
            </h2>
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                style={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.82)',
                  fontSize: '0.87rem',
                  padding: '6px 0',
                }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <nav aria-label="This site">
            <h2
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.19em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                margin: '0 0 16px',
              }}
            >
              This site
            </h2>
            {SECONDARY.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                style={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.82)',
                  fontSize: '0.87rem',
                  padding: '6px 0',
                }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        <div
          style={{
            marginTop: 44,
            paddingTop: 22,
            borderTop: '1px solid rgba(255,255,255,0.16)',
            display: 'flex',
            gap: 18,
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.72)', maxWidth: '68ch' }}>
            <strong style={{ color: '#fff' }}>{DEMO.short}</strong> Arsu Tours does not exist, sells
            nothing and takes no bookings. Destination information is researched and
            fact-checked; prices, departures, ledger figures and journal entries are
            invented for the demonstration.
          </p>
          <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)' }}>
            {SITE.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
