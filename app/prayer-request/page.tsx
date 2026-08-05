'use client';

import { useState, FormEvent } from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import SectionTitle from '@/components/ui/SectionTitle';

const inputStyle = {
  width: '100%',
  marginTop: '0.5rem',
  padding: '0.9rem',
  borderRadius: '0.75rem',
  border: '1px solid rgba(148, 163, 184, 0.3)',
  background: '#0f172a',
  color: '#f8fafc',
};

export default function PrayerRequestPage() {
  const [name, setName] = useState('');
  const [request, setRequest] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Prayer request from ${name || 'a church member'}`);
    const body = encodeURIComponent(`Name: ${name}\n\nPrayer request:\n${request}`);
    window.location.href = `mailto:prayer@jcckitengela.org?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  return (
    <>
      <SiteHeader />
      <main>
        <SectionTitle title="Prayer Request" subtitle="Share your needs and let us pray with you." />
        <section className="card">
          <p>
            We believe in the power of prayer. Please write your request and our prayer team will lift it up.
          </p>
          <form style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }} onSubmit={handleSubmit}>
            <label htmlFor="prayer-name">
              Name
              <input
                id="prayer-name"
                name="name"
                style={inputStyle}
                placeholder="Your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>
            <label htmlFor="prayer-request">
              Prayer request
              <textarea
                id="prayer-request"
                name="request"
                style={{ ...inputStyle, minHeight: '140px' }}
                placeholder="How can we pray for you?"
                value={request}
                onChange={(event) => setRequest(event.target.value)}
                required
              />
            </label>
            <button type="submit" className="btn">Submit Request</button>
            {submitted ? (
              <p style={{ color: '#cbd5e1' }}>
                Thank you. Your email app should now open with your request ready to send to our prayer team.
              </p>
            ) : null}
          </form>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
