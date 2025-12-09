// components/FeaturedTrip.js
import { featuredTrip } from '../lib/data';

export default function FeaturedTrip() {
  return (
    <section className="featured" id="featured">
      <div className="container">
        <p className="section-kicker">Now boarding</p>
        <h2 className="section-heading">Cuttack → Kendrapada Escape</h2>
        <p className="section-subtitle">
          Our first live experience. Designed for friends, couples and small
          groups who want to get out of the city without overthinking the plan.
        </p>

        <div className="featured-grid">
          <div className="featured-card">
            <span className="featured-tag">Currently available</span>
            <h3>{featuredTrip.title}</h3>
            <p>{featuredTrip.description}</p>

            <div className="featured-prices">
              <div className="featured-original">
                Original price: ₹{featuredTrip.originalPrice}
              </div>
              <div className="featured-current">
                Now: ₹{featuredTrip.currentPrice}
                <span style={{ fontSize: '0.8rem', marginLeft: '0.4rem' }}>
                  per person
                </span>
              </div>
            </div>

            <div className="featured-meta">
              <span className="featured-pill">{featuredTrip.duration}</span>
              <span className="featured-pill">{featuredTrip.vibe}</span>
              <span className="featured-pill">Pickup: Cuttack</span>
              <span className="featured-pill">Limited seats per departure</span>
            </div>

            <button
              className="btn btn-primary"
              onClick={() =>
                alert(
                  'This is a demo booking button. In production, connect this to your WhatsApp, email or payment flow.'
                )
              }
            >
              Book this trip
            </button>
            <p style={{ fontSize: '0.75rem', marginTop: '0.7rem', opacity: 0.8 }}>
              {featuredTrip.note}
            </p>
          </div>

          <div className="featured-image-shell">{/* CSS background */}</div>
        </div>
      </div>
    </section>
  );
}
