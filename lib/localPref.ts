import { useCallback, useSyncExternalStore } from 'react';

/**
 * A localStorage-backed preference, read through useSyncExternalStore.
 *
 * Reading storage inside useEffect and calling setState works, but it triggers
 * a cascading render on every mount and React's lint rule rightly objects.
 * useSyncExternalStore is the intended tool: the server snapshot supplies the
 * default so markup matches, and the client snapshot reads the real value.
 *
 * Storage can throw (private mode, blocked site data) and can be empty. Every
 * path here falls back to the supplied default rather than failing.
 */

const listeners = new Set<() => void>();

function emit() {
  for (const l of listeners) l();
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  // Keep other tabs in step.
  window.addEventListener('storage', onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener('storage', onChange);
  };
}

/** Cache so getSnapshot returns a stable reference between renders. */
const cache = new Map<string, string | null>();

function read(key: string): string | null {
  try {
    const v = window.localStorage.getItem(key);
    cache.set(key, v);
    return v;
  } catch {
    return cache.get(key) ?? null;
  }
}

export function writePref(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Preference just will not persist. Keep the in-memory value so the UI
    // still responds for this session.
  }
  cache.set(key, value);
  emit();
}

/**
 * @param key      storage key
 * @param fallback value used on the server, before hydration, and whenever
 *                 storage is unavailable or holds something unrecognised
 * @param isValid  guard rejecting stale or tampered values
 */
export function useLocalPref<T extends string>(
  key: string,
  fallback: T,
  isValid: (v: string) => v is T,
): [T, (next: T) => void] {
  const getSnapshot = useCallback(() => {
    const raw = read(key);
    return raw !== null && isValid(raw) ? raw : fallback;
  }, [key, fallback, isValid]);

  const getServerSnapshot = useCallback(() => fallback, [fallback]);

  const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const set = useCallback((next: T) => writePref(key, next), [key]);

  return [value, set];
}
