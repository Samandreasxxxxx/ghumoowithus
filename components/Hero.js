// components/Hero.js
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <div className="container hero-inner">
        <p className="hero-kicker">Cinematic roadtrips • India first</p>
        <h1 className="hero-title">Travel India the way locals do.</h1>
        <p className="hero-subtitle">
          Ghumoo With Us crafts small-group escapes, starting with our
          Cuttack → Kendrapada getaway. One live trip, many more loading…
        </p>

        <div className="hero-actions">
          <a href="#featured" className="btn btn-primary">
            Cuttack → Kendrapada offer
          </a>
          <a href="#newsletter" className="btn btn-secondary">
            Get trip updates
          </a>
        </div>

        <div className="hero-meta">
          <span>
            <span className="hero-meta-dot" />
            Curated Indian getaways
          </span>
          <span>
            <span className="hero-meta-dot" />
            Real people, small groups
          </span>
          <span>
            <span className="hero-meta-dot" />
            Departures from Odisha first
          </span>
        </div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
