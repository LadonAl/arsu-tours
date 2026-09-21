'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV, SITE, CURRENCIES, type CurrencyCode } from '@/content/site';
import { useCurrency } from './CurrencyProvider';

export function Header() {
  const pathname = usePathname();
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,0.94)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--bone)',
      }}
    >
      <div
        className="shell"
        style={{
          minHeight: 'var(--header-h)',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <Link
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}
          aria-label={`${SITE.name} — home`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/mark.svg" alt="" width={34} height={34} aria-hidden="true" />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span
              style={{
                fontWeight: 800,
                letterSpacing: '0.15em',
                fontSize: '0.97rem',
                color: 'var(--green)',
              }}
            >
              {SITE.wordmark}
            </span>
            <span
              style={{
                fontSize: '0.475rem',
                letterSpacing: '0.24em',
                color: 'var(--muted-soft)',
                marginTop: 3,
              }}
            >
              {SITE.tagline}
            </span>
          </span>
          <span
            className="ar"
            lang="ar"
            dir="rtl"
            style={{ color: 'var(--accent-ink)', fontSize: '0.8rem', marginInlineStart: 4 }}
          >
            {SITE.ar}
          </span>
        </Link>

        <div style={{ flex: 1 }} aria-hidden="true" />

        <nav
          aria-label="Primary"
          style={{ display: 'flex', gap: 22, alignItems: 'center' }}
          className="max-lg:!hidden"
        >
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? 'page' : undefined}
              style={{
                fontSize: '0.83rem',
                fontWeight: 600,
                color: isActive(n.href) ? 'var(--green)' : 'var(--muted)',
                paddingBottom: 4,
                borderBottom: `2px solid ${isActive(n.href) ? 'var(--gold)' : 'transparent'}`,
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <label className="sr-only" htmlFor="currency">
            Currency
          </label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
            style={{
              border: '1px solid var(--bone)',
              borderRadius: 2,
              padding: '7px 9px',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: 'var(--green)',
              background: '#fff',
            }}
          >
            {Object.entries(CURRENCIES).map(([code, c]) => (
              <option key={code} value={code}>
                {c.symbol} {c.label}
              </option>
            ))}
          </select>

          <Link href="/plan" className="btn btn-ghost max-md:!hidden">
            Plan a journey
          </Link>

          <button
            type="button"
            className="lg:!hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            style={{
              background: 'transparent',
              border: '1px solid var(--bone)',
              borderRadius: 2,
              padding: '9px 11px',
              cursor: 'pointer',
              color: 'var(--green)',
              fontWeight: 700,
              fontSize: '0.78rem',
            }}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary, mobile"
          className="lg:!hidden"
          style={{ borderTop: '1px solid var(--bone)', background: '#fff' }}
        >
          <div className="shell" style={{ paddingBlock: 12 }}>
            {[...NAV, { href: '/plan', label: 'Plan a journey' }].map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  padding: '12px 0',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: isActive(n.href) ? 'var(--green)' : 'var(--muted)',
                  borderBottom: '1px solid var(--bone)',
                }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
