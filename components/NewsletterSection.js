// components/NewsletterSection.js
import { useState } from 'react';

const NEWSLETTER_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLScqjp_IZNKWxGVZhSTnBGBn76aMGg9qhJDumoDJORDJ6qA7kA/formResponse';

export default function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    const form = e.target;
    const formData = new FormData(form);

    fetch(NEWSLETTER_FORM_ACTION, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch((err) => {
        console.error('Newsletter form error', err);
        setSubmitted(true);
      })
      .finally(() => {
        setLoading(false);
      });
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
            {/* Email field */}
            <input
              type="email"
              required
              className="newsletter-input"
              placeholder="yourname@email.com"
              name="entry.999185664" // Email
            />

            {/* Hidden extras mapped to your form */}
            <input
              type="hidden"
              name="entry.259576534" // Name (optional)
              value=""
            />
            <input
              type="hidden"
              name="entry.419543246" // Interested in
              value="New Trips"
            />
            <input
              type="hidden"
              name="entry.804782170" // Frequency
              value="Weekly"
            />

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Sending…' : 'Join newsletter'}
            </button>

            {submitted && (
              <p style={{ fontSize: '0.8rem', marginTop: '0.4rem' }}>
                Thanks! Your email has been added to your Newsletter Subscribers
                sheet.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
