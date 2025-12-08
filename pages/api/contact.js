// pages/contact.js
import Head from 'next/head';
import { useState } from 'react';

const CONTACT_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSdgzUSyU0_hNJDMiOsYoFA_gvbKY4AvPMNJtSHfhGH0F9r5Bw/formResponse';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    const form = e.target;
    const formData = new FormData(form);

    fetch(CONTACT_FORM_ACTION, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch((err) => {
        console.error('Contact form error', err);
        setSubmitted(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Head>
        <title>Contact · Ghumoo With Us</title>
      </Head>

      <section className="register">
        <div className="container">
          <p className="section-kicker">Talk to us</p>
          <h1 className="section-heading">Contact & support.</h1>
          <p className="section-subtitle">
            Ping us for trip questions, custom plans or collabs. We&apos;re a
            small team, so a real human will get back to you.
          </p>

          <div style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            <p>
              Email:{' '}
              <a href="mailto:ghumoowithus@gmail.com">
                ghumoowithus@gmail.com
              </a>
            </p>
            <p>
              WhatsApp / Call:{' '}
              <a href="tel:+917683895444">+91 76838 95444</a>
            </p>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="entry.837785847" // Name
                required
              />
            </div>

            <div className="register-field">
              <label htmlFor="contact-info">Email / Phone</label>
              <input
                id="contact-info"
                name="entry.1682520824" // Phone / contact
                required
              />
            </div>

            <div className="register-field" style={{ gridColumn: '1 / -1' }}>
              <label htmlFor="contact-message">
                Message / What do you want to ask?
              </label>
              <textarea
                id="contact-message"
                name="entry.1450980613" // Message
                required
              />
            </div>

            <div className="register-field">
              <label htmlFor="contact-type">Type of inquiry</label>
              <select
                id="contact-type"
                name="entry.2132641869" // Type of inquiry
                defaultValue=""
              >
                <option value="" disabled>
                  Choose
                </option>
                <option>Booking Question</option>
                <option>Collabration/ Partnership</option>
                <option>Customer Support</option>
                <option>Others</option>
              </select>
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? 'Sending…' : 'Send message'}
              </button>
            </div>
          </form>

          {submitted && (
            <p className="register-success">
              Thank you! Your message has been sent to your General Inquiries
              Google Sheet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
