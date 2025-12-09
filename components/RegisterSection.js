// components/RegisterSection.js
import { useState } from 'react';

const TRIP_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSeOjnER_RpQ5Z4jmcpuclUeaaXLsvXR-tbZLuUdS1ZLxUbZRQ/formResponse';

export default function RegisterSection({ standalone = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch(TRIP_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error('Error submitting trip form', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
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
            <label htmlFor="reg-name">Full name*</label>
            <input id="reg-name" required name="entry.367631426" />
          </div>

          <div className="register-field">
            <label htmlFor="reg-phone">WhatsApp / Phone*</label>
            <input id="reg-phone" required name="entry.1705815425" />
          </div>

          <div className="register-field">
            <label htmlFor="reg-email">Email</label>
            <input id="reg-email" type="email" name="entry.101797539" />
          </div>

          <div className="register-field">
            <label htmlFor="reg-city">City you&apos;re based in</label>
            <input id="reg-city" name="entry.885686311" />
          </div>

          <div className="register-field">
            <label htmlFor="reg-trip">Which trip are you eyeing?</label>
            <select
              id="reg-trip"
              name="entry.1351065948"
              defaultValue="Cuttack → Kendrapada (Available Now)"
            >
              <option value="Cuttack → Kendrapada (Available Now)">
                Cuttack → Kendrapada (Available Now)
              </option>
              <option value="Any short weekend from Odisha">
                Any short weekend from Odisha
              </option>
              <option value="Future India trips">Future India trips</option>
              <option value="International (Kenya etc.)">
                International (Kenya etc.)
              </option>
            </select>
          </div>

          <div className="register-field">
            <label htmlFor="reg-month">Preferred travel month</label>
            <select
              id="reg-month"
              name="entry.380390246"
              defaultValue=""
            >
              <option value="" disabled>
                Choose a month
              </option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>

          <div className="register-field">
            <label htmlFor="reg-travellers">Number of travellers</label>
            <input
              id="reg-travellers"
              type="number"
              min="1"
              name="entry.647059908"
            />
          </div>

          <div className="register-field" style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="reg-notes">Anything we should know?</label>
            <textarea id="reg-notes" name="entry.900129480" />
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Sending…' : 'Send details'}
            </button>
          </div>
        </form>

        {submitted && (
          <p className="register-success">
            Thank you! Your details were sent to your Trip Registrations Google
            Sheet.
          </p>
        )}
      </div>
    </section>
  );
}
