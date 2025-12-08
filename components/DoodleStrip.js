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
              On Diwali, Holi, New Year and big launch days this strip can
              transform – drop in a special logo, a travel sketch or a fun
              animation to match the vibe of the moment.
            </p>
            <p className="section-subtitle">
              For now you&apos;re seeing a tiny &quot;Odisha roadtrip&quot; doodle.
              Later you can swap this with your own SVG artwork or a Lottie
              animation without changing the layout.
            </p>
          </div>
          <div className="doodle-canvas" aria-hidden="true">
            <div className="doodle-orbit">
              <span className="doodle-sun" />
              <span className="doodle-bus" />
              <span className="doodle-cloud doodle-cloud-1" />
              <span className="doodle-cloud doodle-cloud-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
