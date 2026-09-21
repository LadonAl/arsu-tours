/**
 * The ledger stat honeycomb, ported from the v11 design.
 *
 * Same hexagon mechanics as the place grid, but the frame is gold and the fill
 * is white. Empty "ghost" cells at 45% gold complete the honeycomb shape so
 * the row reads as a comb rather than a handful of loose hexagons.
 */

const CLIP = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
const GAP = 14;
const PER_ROW = 4;
const BASIS = `calc((100% - ${GAP * (PER_ROW - 0.5)}px) / ${PER_ROW + 0.5})`;

export type Stat = { value: string; label: string; illustrative?: boolean };

export function HexStats({ stats, ghosts = 2 }: { stats: Stat[]; ghosts?: number }) {
  const half = Math.ceil(stats.length / 2);
  const top = stats.slice(0, half);
  const bottom = stats.slice(half);

  return (
    <div className="hexstats">
      <div className="hexrow">
        {top.map((s) => (
          <Cell key={s.label} stat={s} />
        ))}
        {Array.from({ length: ghosts }, (_, i) => (
          <Ghost key={`gt${i}`} />
        ))}
      </div>
      <div
        className="hexrow"
        style={{ marginTop: `calc(${BASIS} * -0.2887 + ${GAP * 0.865}px)` }}
      >
        <span aria-hidden="true" style={{ flex: `0 0 calc(${BASIS} / 2 - ${GAP / 2}px)` }} />
        {bottom.map((s) => (
          <Cell key={s.label} stat={s} />
        ))}
        {Array.from({ length: ghosts }, (_, i) => (
          <Ghost key={`gb${i}`} />
        ))}
      </div>
    </div>
  );
}

function Cell({ stat }: { stat: Stat }) {
  return (
    <div className="hexstat" style={{ clipPath: CLIP, flex: `0 0 ${BASIS}` }}>
      <div className="hexstat-inner" style={{ clipPath: CLIP }}>
        <span className="hexstat-value">{stat.value}</span>
        <span className="hexstat-label">
          {stat.label}
          {stat.illustrative && (
            <>
              {' '}
              <span className="hexstat-flag">(illustrative)</span>
            </>
          )}
        </span>
      </div>
    </div>
  );
}

function Ghost() {
  return (
    <div className="hexstat-ghost" aria-hidden="true" style={{ clipPath: CLIP, flex: `0 0 ${BASIS}` }}>
      <div style={{ width: '100%', height: '100%', background: '#fff', clipPath: CLIP }} />
    </div>
  );
}
