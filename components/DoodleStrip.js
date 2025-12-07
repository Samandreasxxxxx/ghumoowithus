// components/DoodleStrip.js

export default function DoodleStrip() {
  return (
    <section>
      <div className="container">
        <div className="doodle-strip">
          <div>
            <p className="section-kicker">Playful mode</p>
            <h3 className="section-heading">Logo art & festival doodles.</h3>
            <p className="section-subtitle">
              This is your sandbox, just like Google Doodles. On Diwali, New
              Year, Durga Puja or any special launch, swap in custom artwork
              here and in the logo.
            </p>
          </div>
          <div className="doodle-canvas">
            Future doodle canvas — swap this with custom SVG or Lottie art.
          </div>
        </div>
      </div>
    </section>
  );
}
