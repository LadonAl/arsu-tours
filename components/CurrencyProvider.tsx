'use client';

import { createContext, useContext, useCallback } from 'react';
import { CURRENCIES, money, type CurrencyCode } from '@/content/site';
import { useLocalPref } from '@/lib/localPref';

type Ctx = {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  fmt: (usd: number, compact?: boolean) => string;
};

const CurrencyContext = createContext<Ctx | null>(null);

const KEY = 'arsu:currency';

function isCode(v: string): v is CurrencyCode {
  return v in CURRENCIES;
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  // USD on the server and for the first paint, so markup matches; the stored
  // preference is picked up by useSyncExternalStore on the client.
  const [currency, setCurrency] = useLocalPref<CurrencyCode>(KEY, 'USD', isCode);

  const fmt = useCallback(
    (usd: number, compact = false) => money(usd, currency, compact),
    [currency],
  );

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, fmt }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used inside CurrencyProvider');
  return ctx;
}

/** Renders a USD amount in the selected currency. */
export function Money({ usd, compact = false }: { usd: number; compact?: boolean }) {
  const { fmt } = useCurrency();
  return <>{fmt(usd, compact)}</>;
}
