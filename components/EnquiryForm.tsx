'use client';

import { useState } from 'react';
import { PLACES } from '@/content/places';
import { DEMO } from '@/content/site';

const LENGTHS = ['Not sure yet', 'Under a week', 'A week', 'Ten days', 'Two weeks or more'];
const PARTIES = ['On my own', 'Two of us', 'A small group', 'A family'];

/**
 * Enquiry form.
 *
 * It does not submit anywhere, and — unlike the mock, which flipped to a
 * "sent" confirmation — it says so in the success state. A demo that tells you
 * your message was sent is a demo that lies.
 */
export function EnquiryForm() {
  const [done, setDone] = useState(false);
  const [regions, setRegions] = useState<string[]>([]);

  function toggle(name: string) {
    setRegions((r) => (r.includes(name) ? r.filter((x) => x !== name) : [...r, name]));
  }

  if (done) {
    return (
      <div
        style={{
          border: '1px solid var(--bone)',
          padding: '32px 30px',
          background: 'var(--paper)',
        }}
      >
        <h2 className="h3">Nothing was sent.</h2>
        <p className="body" style={{ marginTop: 12 }}>
          This is a demonstration site and the form is not connected to anything — there is no
          inbox at the other end, and no company to receive it. Your answers were not
          transmitted or stored anywhere.
        </p>
        <p className="body" style={{ marginTop: 12 }}>
          If you are actually planning travel to Syria, start with your own government&rsquo;s
          current advisory and a licensed operator, not with this page.
        </p>
        <button
          type="button"
          className="btn btn-ghost"
          style={{ marginTop: 20 }}
          onClick={() => setDone(false)}
        >
          Back to the form
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      noValidate
    >
      <p className="notice" style={{ marginBottom: 26 }}>
        <strong>Demo:</strong> {DEMO.formNotice} Please do not enter real personal details.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: 18,
        }}
      >
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="off" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="off" />
        </div>
        <div className="field">
          <label htmlFor="when">Roughly when</label>
          <input id="when" name="when" type="text" placeholder="e.g. next spring" />
        </div>
        <div className="field">
          <label htmlFor="length">How long</label>
          <select id="length" name="length" defaultValue={LENGTHS[0]}>
            {LENGTHS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="party">Who is travelling</label>
          <select id="party" name="party" defaultValue={PARTIES[1]}>
            {PARTIES.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      <fieldset style={{ border: 0, padding: 0, margin: '26px 0 0' }}>
        <legend
          style={{
            fontSize: '0.76rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: 'var(--muted-soft)',
            marginBottom: 11,
            padding: 0,
          }}
        >
          Anywhere in particular
        </legend>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {PLACES.map((p) => (
            <button
              key={p.slug}
              type="button"
              className="chip"
              aria-pressed={regions.includes(p.name)}
              onClick={() => toggle(p.name)}
            >
              {p.name}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="field" style={{ marginTop: 26 }}>
        <label htmlFor="message">Anything else</label>
        <textarea id="message" name="message" rows={5} />
      </div>

      <button type="submit" className="btn btn-solid" style={{ marginTop: 24 }}>
        Send (demo — goes nowhere)
      </button>
    </form>
  );
}
