// components/ComingSoonSection.js
import { comingSoonTours } from '../lib/data';

export default function ComingSoonSection() {
  return (
    <section id="trips">
      <div className="container">
        <p className="section-kicker">Next up</p>
        <h2 className="section-heading">More India. More stories. Coming soon.</h2>
        <p className="section-subtitle">
          We’re starting in Odisha and slowly unlocking more states and
          international adventures. Save these to your wish‑list and hit
          &quot;Register&quot; so we can ping you the moment they go live.
        </p>

        <div className="coming-grid">
          {comingSoonTours.map((tour) => (
            <article key={tour.id} className="coming-card">
              <div
                className="coming-image"
                style={{ backgroundImage: `url(${tour.imageUrl})` }}
              />
              <div className="coming-gradient" />
              <div className="coming-body">
                <div className="coming-pill-row">
                  <span className="coming-location">{tour.location}</span>
                  <span className="coming-label">Coming soon</span>
                </div>
                <h3 className="coming-title">{tour.title}</h3>
                <div className="coming-pill-row">
                  <span>{tour.type}</span>
                  <button
                    className="btn btn-secondary"
                    style={{ padding: '0.25rem 0.9rem', fontSize: '0.7rem' }}
                    onClick={() =>
                      alert(
                        'In the real site, open a small form to capture email + tour interest here.'
                      )
                    }
                  >
                    Notify me
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
