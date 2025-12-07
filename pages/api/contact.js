// pages/contact.js
import Head from 'next/head';

export default function ContactPage() {
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

          <form
            className="register-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                'In production this form should send an email to ghumoowithus@gmail.com or log to a CRM.'
              );
            }}
          >
            <div className="register-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" required />
            </div>
            <div className="register-field">
              <label htmlFor="contact">Email / Phone</label>
              <input id="contact" name="contact" required />
            </div>
            <div className="register-field" style={{ gridColumn: '1 / -1' }}>
              <label htmlFor="message">How can we help?</label>
              <textarea id="message" name="message" required />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
