import type { Metadata } from 'next';
import { EnquiryForm } from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'Plan a journey',
  description: 'A demonstration enquiry form. It does not send anything.',
};

export default function PlanPage() {
  return (
    <>
      <section className="page-head">
        <div className="shell">
          <p className="eyebrow">Plan a journey</p>
          <h1 className="display" style={{ marginTop: 14, maxWidth: '15ch' }}>
            Tell us roughly what you want.
          </h1>
          <p className="lead" style={{ marginTop: 20, maxWidth: '56ch' }}>
            On a real version of this site, this is where a conversation would start — dates,
            length, who is coming, and what you actually care about seeing.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 90 }}>
        <div className="shell" style={{ maxWidth: 780 }}>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
