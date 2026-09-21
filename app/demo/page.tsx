import type { Metadata } from 'next';
import Link from 'next/link';
import { AS_OF } from '@/content/practicalities';

export const metadata: Metadata = {
  title: 'About this demo',
  description: 'What this site is, what is real on it, and what is invented.',
};

export default function DemoPage() {
  return (
    <>
      <section className="page-head">
        <div className="shell" data-anim="page-head">
          <p className="eyebrow">About this demo</p>
          <h1 className="display" style={{ marginTop: 14, maxWidth: '16ch' }}>
            This is a demonstration, not a company.
          </h1>
          <p className="lead" style={{ marginTop: 20, maxWidth: '58ch' }}>
            Arsu Tours does not exist. It sells nothing, employs nobody, takes no bookings and
            holds no money. The site is a design and build exercise. If you arrived here looking
            for a real operator, this is not one.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 36 }}
          >
            <div>
              <h2 className="h2" style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)' }}>
                What is real
              </h2>
              <ul className="body" style={{ marginTop: 16, paddingInlineStart: 20, display: 'grid', gap: 10 }}>
                <li>
                  Everything about the <strong>places</strong>: what stands, what was destroyed
                  and when, UNESCO status, road distances, conservation and access. Researched
                  from primary and academic sources, then re-checked line by line by a separate
                  adversarial pass that found 87 corrections across ten destinations.
                </li>
                <li>
                  The <strong>travel advisories</strong>, visa position, currency redenomination
                  and card-payment situation, checked {AS_OF}.
                </li>
                <li>
                  The <strong>history of Arsu</strong>, sourced to museum catalogues and
                  published scholarship, with the uncertain parts marked uncertain.
                </li>
                <li>
                  The <strong>photographs</strong>. Every one was downloaded and looked at before
                  use, and every one is credited.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="h2" style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)' }}>
                What is invented
              </h2>
              <ul className="body" style={{ marginTop: 16, paddingInlineStart: 20, display: 'grid', gap: 10 }}>
                <li>The company, its office, its guides and its staff.</li>
                <li>
                  All <strong>prices</strong> and currency conversions. They are illustrative and
                  are not based on real supplier pricing.
                </li>
                <li>
                  All <strong>departure dates</strong> and the number of places remaining on
                  each journey.
                </li>
                <li>
                  Every figure on <strong>the ledger</strong> — the percentages, the guild count,
                  the annual totals.
                </li>
                <li>
                  The <strong>journal entries</strong>. They are written for the demo, not filed
                  by a guide.
                </li>
                <li>
                  The <strong>enquiry form</strong>, which is not connected to anything and says
                  so when you submit it.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper)', paddingBlock: 60 }}>
        <div className="shell">
          <div style={{ maxWidth: '68ch' }}>
            <h2 className="h2">How the facts were checked</h2>
            <p className="body" style={{ marginTop: 16 }}>
              Each destination was researched independently, then handed to a second pass whose
              only job was to try to refute it: verify every date, number, Arabic name, UNESCO
              status and distance against sources it fetched itself, and delete anything it
              could not stand up. Every one of the ten destination write-ups came back with
              corrections.
            </p>
            <p className="body" style={{ marginTop: 14 }}>
              Some examples of what that caught: a distance to the Lebanese border that was
              actually the distance to Beirut; a tourism-police headcount that was a training
              cohort in another governorate; a claim that a basilica inspired Notre-Dame, which
              traces to one early-twentieth-century opinion rather than consensus; and a
              description of shrapnel holes in a souq roof written as though they were
              attractive.
            </p>
            <p className="body" style={{ marginTop: 14 }}>
              The photographs got the same treatment, which mattered more than expected. Image
              captions are written by uploaders and are often wrong: a search for Palmyra in
              Syria returned a photograph of Petra in Jordan, and a search for Krak des
              Chevaliers returned two châteaux in France. Nothing was published on the strength
              of its caption.
            </p>
            <p className="body" style={{ marginTop: 14 }}>
              Where the sources genuinely disagreed — the age of Damascus, the number of Dead
              Cities, whether Sultan Abdulhamid II or Kaiser Wilhelm II gave Saladin his
              sarcophagus — the site says they disagree instead of picking the more confident
              version.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div style={{ maxWidth: '68ch' }}>
            <h2 className="h2">On tone</h2>
            <p className="body" style={{ marginTop: 16 }}>
              Syria is not a ruin to be admired. War damage is described factually and never
              aestheticised, religious sites are treated as places of worship rather than
              attractions, and the site never makes a blanket claim that the country is safe or
              unsafe — it reports what the advisories say and leaves the judgement where it
              belongs.
            </p>
            <p className="body" style={{ marginTop: 14 }}>
              The name is discussed on{' '}
              <Link href="/about" style={{ textDecoration: 'underline', textUnderlineOffset: 3 }}>
                the about page
              </Link>
              : Arsu is referenced as archaeology and heritage, with no devotional framing and no
              claim about any living faith.
            </p>
            <p style={{ marginTop: 24 }}>
              <Link href="/credits" className="link-gold">
                Photo credits and licences →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
