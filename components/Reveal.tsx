import type { ElementType, CSSProperties, ReactNode } from 'react';

/**
 * A marker, not an animation.
 *
 * All motion is driven from one place — SiteMotion — exactly as the design
 * drives it from one animate() pass. This only tags the element so that pass
 * can find it. Keeping the animation here as well is what let the design's
 * behaviour drift out of sync.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  stagger = false,
  className,
  style,
  id,
}: {
  children: ReactNode;
  as?: ElementType;
  stagger?: boolean;
  className?: string;
  style?: CSSProperties;
  id?: string;
}) {
  return (
    <Tag data-anim={stagger ? 'stagger' : 'reveal'} className={className} style={style} id={id}>
      {children}
    </Tag>
  );
}
