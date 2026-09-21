import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ALL_CREDITS, NO_PHOTOGRAPH } from '@/content/images';

export const metadata: Metadata = {
  title: 'Photo credits',
  description: 'Every photograph on this site, its photographer, its source and its licence.',
};

export default function CreditsPage() {
  const unsplash = ALL_CREDITS.filter((c) => c.source === 'unsplash');
  const commons = ALL_CREDITS.filter((c) => c.source === 'commons');

  return (
    <>
      <section className="page-head">
        <div className="shell" data-anim="page-head">
          <p className="eyebrow">Credits</p>
          <h1 className="display" style={{ marginTop: 14, maxWidth: '15ch' }}>
            Every photograph, and who took it.
          </h1>
          <p className="lead" style={{ marginTop: 20, maxWidth: '60ch' }}>
            Each image below was downloaded and visually checked before it was used. Captions on
            stock sites are written by uploaders and are frequently wrong — a search for Palmyra
            in Syria returned a photograph of Petra in Jordan, and a search for Krak des
            Chevaliers returned two châteaux in France. Neither was published.
          </p>
        </div>
      </section>

      <Section
        title="Unsplash"
        note="Used under the Unsplash Licence and hotlinked from Unsplash's own CDN, which is what they ask publishers to do."
        credits={unsplash}
      />

      <Section
        title="Wikimedia Commons"
        note="Used where Unsplash has no free, correctly-identified photograph of the place at all — a search for Bosra returns zero results. Self-hosted, because Commons discourages hotlinking. Each is credited to its photographer with its licence."
        credits={commons}
      />

      {NO_PHOTOGRAPH.length > 0 && (
        <section className="section">
          <div className="shell">
            <h2 className="h2">Where no photograph was used</h2>
            <div style={{ marginTop: 20, display: 'grid', gap: 14, maxWidth: '70ch' }}>
              {NO_PHOTOGRAPH.map((n) => (
                <p className="body" key={n.place}>
                  <strong style={{ color: 'var(--green)' }}>{n.place}:</strong> {n.reason}
                </p>
              ))}
            </div>
            <p className="body" style={{ marginTop: 20, maxWidth: '70ch' }}>
              A photograph of the wrong place is worse than no photograph, so where nothing could
              be verified, nothing was used.
            </p>
            <p style={{ marginTop: 24 }}>
              <Link href="/demo" className="link-gold">
                How the rest of the site was checked →
              </Link>
            </p>
          </div>
        </section>
      )}
    </>
  );
}

function Section({
  title,
  note,
  credits,
}: {
  title: string;
  note: string;
  credits: typeof ALL_CREDITS;
}) {
  return (
    <section className="section-tight">
      <div className="shell">
        <h2 className="h2">{title}</h2>
        <p className="body" style={{ marginTop: 12, maxWidth: '68ch' }}>
          {note}
        </p>

        <div
          style={{
            marginTop: 28,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 22,
          }}
        >
          {credits.map((c) => (
            <figure key={c.id} style={{ margin: 0 }}>
              <div style={{ position: 'relative', aspectRatio: '3/2', background: 'var(--bone)' }}>
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, 300px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <figcaption className="small" style={{ marginTop: 9, fontSize: '0.76rem' }}>
                {c.alt}.
                <br />
                Photo by{' '}
                <a
                  href={c.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  style={{ fontWeight: 700 }}
                >
                  {c.photographer}
                </a>{' '}
                ·{' '}
                <a href={c.licenceUrl} target="_blank" rel="noopener noreferrer nofollow">
                  {c.licence}
                </a>
                {c.archivalNote && (
                  <>
                    <br />
                    <em style={{ color: 'var(--sienna)' }}>{c.archivalNote}</em>
                  </>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
