'use client';

import { useEffect, useRef } from 'react';

/**
 * The design's ornaments, ported rather than reinvented.
 *
 * The v11 file carries three: a girih strapwork panel in green at 0.22
 * fill-opacity for light sections, the same panel in gold for the green
 * sections, and a finer islimi arabesque used inside cards. They are single
 * large artworks — `background-size: contain; no-repeat` — bled off the edge
 * of their section, not a repeating tile.
 *
 * Two details do the real work and were missing from my first pass:
 *
 *   1. `mask-image: radial-gradient(closest-side, #000 62%, transparent 100%)`
 *      fades the artwork out toward its own edges. Without it the pattern
 *      stops dead at a rectangle, which is what made my version look cheap.
 *   2. The design's rhythm: the green ornament bleeds off the RIGHT of white
 *      sections, the gold one off the LEFT of green sections.
 *
 * The design animates these via a `--orn` custom property that its GSAP pass
 * selects on. That is reproduced here as a local fade/scale/rotate so the
 * behaviour travels with the component.
 */

type Variant = 'light' | 'dark' | 'card';

const SRC: Record<Variant, string> = {
  light: '/brand/orn-light.svg',
  dark: '/brand/orn-dark.svg',
  card: '/brand/orn-card.svg',
};

export function Ornament({
  variant = 'light',
  side = 'right',
  inset = '-6%',
  offset = -230,
  maskStop = 62,
  className,
  style,
}: {
  variant?: Variant;
  side?: 'left' | 'right';
  /** Vertical bleed above and below the section. */
  inset?: string;
  /** Horizontal bleed past the section edge, in px. */
  offset?: number;
  maskStop?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let killed = false;
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const { gsap } = await import('gsap');
      if (killed) return;
      ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.92, rotate: -4 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1.6, ease: 'power2.out', delay: 0.25 },
        );
      }, el);
    })();

    return () => {
      killed = true;
      ctx?.revert();
    };
  }, []);

  const mask = `radial-gradient(closest-side, #000 ${maskStop}%, transparent 100%)`;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={className}
      style={{
        position: 'absolute',
        top: inset,
        bottom: inset,
        [side]: offset,
        width: 'auto',
        aspectRatio: variant === 'card' ? '1' : '478 / 533',
        backgroundImage: `url(${SRC[variant]})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        maskImage: mask,
        WebkitMaskImage: mask,
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}

/**
 * The smaller square arabesque the design tucks into the corner of a card.
 * Positioned by the caller rather than bled off a section edge.
 */
export function CardOrnament({
  style,
}: {
  style?: React.CSSProperties;
}) {
  const mask = 'radial-gradient(closest-side, #000 60%, transparent 100%)';
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        aspectRatio: '1',
        backgroundImage: `url(${SRC.card})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        maskImage: mask,
        WebkitMaskImage: mask,
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}
