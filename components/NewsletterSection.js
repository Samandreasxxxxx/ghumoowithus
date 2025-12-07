// components/NewsletterSection.js
import { useState } from 'react';

export default function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // In production, send this to Mailchimp, Brevo, etc.
  }

  return (
    <section id="newsletter">
      <div className="container">
        <div className="newsletter">
          <div>
            <p className="section-kicker">Stay in the loop</p>
            <h2 className="section-heading">
              Be first to know when new routes unlock.
            </h2>
            <p className="section-subtitle">
              We only email when something worth packing a bag for goes live:
              new trips, crazy deals and a few travel hacks.
            </p>
          </div>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              className="newsletter-input"
              placeholder="yourname@email.com"
            />
            <button type="submit" className="btn btn-primary">
              Join newsletter
            </button>
            {submitted && (
              <p style={{ fontSize: '0.8rem', marginTop: '0.4rem' }}>
                Got it! Plug this into a real email service next.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
