'use client';

import Link from 'next/link';
import { DEMO } from '@/content/site';
import { useLocalPref } from '@/lib/localPref';

const KEY = 'arsu:demo-bar-dismissed';

const isFlag = (v: string): v is '0' | '1' => v === '0' || v === '1';

/**
 * Site-wide notice that this is not a real tour operator.
 *
 * It is dismissible, because a bar that cannot be closed gets ignored the same
 * way a cookie banner does. Dismissing it does not remove the disclosure — the
 * footer note, the /demo page and the per-section notices all stay.
 */
export function DemoBar() {
  // Defaults to visible: if storage is unavailable the bar shows, which is the
  // correct way for a disclosure notice to fail.
  const [dismissed, setDismissed] = useLocalPref<'0' | '1'>(KEY, '0', isFlag);

  if (dismissed === '1') return null;

  return (
    <div
      style={{
        background: 'var(--sienna)',
        color: '#fff',
        position: 'relative',
        zIndex: 60,
      }}
    >
      <div
        className="shell"
        style={{
          minHeight: 'var(--demo-h)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 14,
          flexWrap: 'wrap',
          paddingBlock: 8,
        }}
      >
        <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: 600, textAlign: 'center' }}>
          {DEMO.bar}{' '}
          <Link
            href="/demo"
            style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: 3 }}
          >
            What this is
          </Link>
        </p>
        <button
          type="button"
          onClick={() => setDismissed('1')}
          aria-label="Dismiss demo notice"
          style={{
            position: 'absolute',
            right: 16,
            background: 'transparent',
            border: 0,
            color: '#fff',
            cursor: 'pointer',
            fontSize: '1.05rem',
            lineHeight: 1,
            padding: 6,
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
