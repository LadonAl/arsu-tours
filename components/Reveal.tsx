'use client';

import { useEffect, useRef } from 'react';

/**
 * Scroll-reveal, mirroring the v11 design's GSAP behaviour.
 *
 * Two deliberate differences from the mock:
 *  - Content is rendered visible and animated *from* a shifted state only once
 *    GSAP has loaded, so a failed or slow chunk can never leave the page blank.
 *    The mock set opacity:0 up front, which is why a full-page screenshot of it
 *    comes back with empty bands.
 *  - prefers-reduced-motion is checked before anything is registered.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  stagger = false,
  delay = 0,
  className,
  style,
  id,
}: {
  children: React.ReactNode;
  as?: React.ElementType;
  stagger?: boolean;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let killed = false;
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (killed) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const targets = stagger ? Array.from(el.children) : el;
        if (stagger && (targets as Element[]).length === 0) return;
        gsap.from(targets, {
          y: 24,
          opacity: 0,
          duration: 0.8,
          delay,
          ease: 'power3.out',
          stagger: stagger ? 0.07 : 0,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      }, el);
    })();

    return () => {
      killed = true;
      ctx?.revert();
    };
  }, [stagger, delay]);

  return (
    <Tag ref={ref} data-anim="reveal" className={className} style={style} id={id}>
      {children}
    </Tag>
  );
}
