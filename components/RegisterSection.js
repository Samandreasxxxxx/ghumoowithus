// components/RegisterSection.js
import { useState } from 'react';

export default function RegisterSection({ standalone = false }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // In production: send this to your backend / Google Sheet / CRM.
  }

  return (
    <section className="register" id="register">
      <div className="container">
        {standalone ? (
          <>
            <p className="section-kicker">Register</p>
            <h2 className="section-heading">
              Tell us who you are & where you want to go.
            </h2>
          </>
        ) : (
          <>
            <p className="section-kicker">Lightweight signup</p>
            <h2 className="section-heading">Register your interest.</h2>
          </>
        )}
        <p className="section-subtitle">
          This form doesn&apos;t process payments yet. It just gives us enough
          info to call or WhatsApp you back with options.
        </p>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-field">
            <label htmlFor="name">Full name*</label>
            <input id="name" name="name" required />
          </div>
          <div className="register-field">
            <label htmlFor="phone">WhatsApp / Phone*</label>
            <input id="phone" name="phone" required />
          </div>
          <div className="register-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
          </div>
          <div className="register-field">
            <label htmlFor="city">City you&apos;re based in</label>
            <input id="city" name="city" />
          </div>
          <div className="register-field">
            <label htmlFor="trip">Which trip are you eyeing?</label>
            <select id="trip" name="trip">
              <option>Cuttack → Kendrapada</option>
              <option>Any short weekend from Odisha</option>
              <option>Future India trips</option>
              <option>International (Kenya etc.)</option>
            </select>
          </div>
          <div className="register-field" style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="notes">Anything we should know?</label>
            <textarea id="notes" name="notes" />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <button type="submit" className="btn btn-primary">
              Send details
            </button>
          </div>
        </form>

        {submitted && (
          <p className="register-success">
            Thank you! Connect this form to an email or database, and you&apos;ll
            start getting real enquiries here.
          </p>
        )}
      </div>
    </section>
  );
}
