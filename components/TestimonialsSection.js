// components/TestimonialsSection.js
import { testimonials } from '../lib/data';

export default function TestimonialsSection() {
  return (
    <section className="testimonials">
      <div className="container">
        <p className="section-kicker">People like you</p>
        <h2 className="section-heading">Early riders. Real reactions.</h2>
        <p className="section-subtitle">
          These are placeholder stories for now, but very soon this section
          will be full of real faces from your trips.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <article key={t.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src={t.avatarUrl} alt={t.name} />
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-location">{t.location}</div>
                </div>
                <div className="testimonial-stars" aria-hidden="true">
                  ★★★★★
                </div>
              </div>
              <p className="testimonial-quote">“{t.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
