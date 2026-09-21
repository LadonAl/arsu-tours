'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** useLayoutEffect warns during SSR; this is a no-op on the server. */
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * The v11 design's animate() pass, ported whole.
 *
 * The design drives every animation off `data-anim` attributes from one
 * function, re-run whenever the page changes. Reimplementing pieces of that
 * ad hoc is how five of its eight animations went missing, so this is a
 * direct port: same selectors, same easings, same durations, same stagger,
 * same ScrollTrigger start positions.
 *
 * Original, for reference:
 *   hero timeline  h1 y34 / lead y22 -=0.62 / cta y18 -=0.6 / photo y40 @0.18 / facts y16 stagger .09 -=0.5
 *   page-head      children y26, dur .9, stagger .09
 *   --orn          fromTo opacity 0 scale .92 rotate -4, dur 1.6, delay .25
 *   reveal         y26, dur .85, ScrollTrigger top 90% once
 *   stagger        children y22, dur .7, stagger .07, top 88% once
 *   hex-mark       scale .2 rotate -90, dur .9, back.out(2), top 94% once
 *   hex grid       cells opacity 0 scale .86 y22, dur .8, stagger .07, top 80% once
 *   hex hover      photo scale 1.07 (.55s) + label children fromTo y12/opacity0, stagger .05 @0.08
 */
export function SiteMotion() {
  const pathname = usePathname();

  // Runs before paint. GSAP is imported statically rather than dynamically so
  // the from-state can be set synchronously — with a dynamic import the hero
  // renders at full opacity for a frame and then snaps to 0, which is a
  // visible flash.
  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.removeAttribute('data-motion');
      return;
    }

    const teardown: (() => void)[] = [];
    gsap.registerPlugin(ScrollTrigger);

    // The pre-paint guard is no longer needed once GSAP writes inline styles.
    const clearGuard = () => document.documentElement.removeAttribute('data-motion');

    const ctx = gsap.context(() => {
        const E = 'power3.out';
        // Same guard as the design: an element animates once per page.
        const q = <T extends Element>(sel: string): T[] =>
          Array.from(document.querySelectorAll<T>(sel)).filter((el) => {
            const node = el as unknown as HTMLElement;
            if (node.dataset.animDone === pathname) return false;
            node.dataset.animDone = pathname;
            return true;
          });

        if (q('[data-anim="hero-h1"]').length) {
          gsap
            .timeline({ defaults: { ease: E, duration: 0.9 } })
            .from('[data-anim="hero-h1"]', { y: 34, opacity: 0 })
            .from('[data-anim="hero-lead"]', { y: 22, opacity: 0 }, '-=0.62')
            .from('[data-anim="hero-cta"]', { y: 18, opacity: 0 }, '-=0.6')
            .from('[data-anim="hero-photo"]', { y: 40, opacity: 0, duration: 1.05 }, 0.18)
            .from(
              '[data-anim="hero-facts"] > div',
              { y: 16, opacity: 0, duration: 0.7, stagger: 0.09 },
              '-=0.5',
            );
        }

        const head = q('[data-anim="page-head"] > *');
        if (head.length) {
          gsap.from(head, { y: 26, opacity: 0, duration: 0.9, ease: E, stagger: 0.09 });
        }

        q<HTMLElement>('[data-orn]').forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.92, rotate: -4 },
            { opacity: 1, scale: 1, rotate: 0, duration: 1.6, ease: 'power2.out', delay: 0.25 },
          );
        });

        q<HTMLElement>('[data-anim="reveal"]').forEach((el) => {
          gsap.from(el, {
            y: 26,
            opacity: 0,
            duration: 0.85,
            ease: E,
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          });
        });

        q<HTMLElement>('[data-anim="stagger"]').forEach((group) => {
          const kids = Array.from(group.children);
          if (!kids.length) return;
          gsap.from(kids, {
            y: 22,
            opacity: 0,
            duration: 0.7,
            ease: E,
            stagger: 0.07,
            scrollTrigger: { trigger: group, start: 'top 88%', once: true },
          });
        });

        q<HTMLElement>('[data-anim="hex-mark"]').forEach((el) => {
          gsap.from(el, {
            scale: 0.2,
            rotate: -90,
            opacity: 0,
            duration: 0.9,
            ease: 'back.out(2)',
            scrollTrigger: { trigger: el, start: 'top 94%', once: true },
          });
        });

        // Honeycomb entrance: the whole comb settles in, cell by cell.
        q<HTMLElement>('#places, #money, [data-hexgrid]').forEach((sec) => {
          const cells = sec.querySelectorAll('[data-anim="hex"], [data-anim="hex-empty"]');
          if (!cells.length) return;
          gsap.from(cells, {
            opacity: 0,
            scale: 0.86,
            y: 22,
            duration: 0.8,
            ease: E,
            stagger: { each: 0.07 },
            scrollTrigger: { trigger: sec, start: 'top 80%', once: true },
          });
        });

        // Honeycomb hover: the photograph pushes in while the label's lines
        // rise in sequence. Reversed on leave, not re-played.
        q<HTMLElement>('[data-anim="hex"]').forEach((cell) => {
          const photo = cell.children[0] as HTMLElement | undefined;
          const panel = cell.children[1] as HTMLElement | undefined;
          if (!photo || !panel) return;

          const tl = gsap.timeline({ paused: true });
          tl.to(photo, { scale: 1.07, duration: 0.55, ease: 'power2.out' }, 0);
          const lines = Array.from(panel.children);
          if (lines.length) {
            tl.to(panel, { opacity: 1, duration: 0.24, ease: 'power2.out' }, 0);
            tl.fromTo(
              lines,
              { y: 12, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.45, stagger: 0.05, ease: 'power2.out' },
              0.08,
            );
          }

          const enter = () => tl.play();
          const leave = () => tl.reverse();
          cell.addEventListener('mouseenter', enter);
          cell.addEventListener('mouseleave', leave);
          cell.addEventListener('focusin', enter);
          cell.addEventListener('focusout', leave);
          teardown.push(() => {
            cell.removeEventListener('mouseenter', enter);
            cell.removeEventListener('mouseleave', leave);
            cell.removeEventListener('focusin', enter);
            cell.removeEventListener('focusout', leave);
          });
        });
    });

    clearGuard();

    return () => {
      teardown.forEach((fn) => fn());
      ctx.revert();
      clearGuard();
    };
  }, [pathname]);

  return null;
}
