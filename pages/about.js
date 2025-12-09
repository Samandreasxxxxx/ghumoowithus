// pages/about.js
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About · Ghumoo With Us</title>
      </Head>

      <section>
        <div className="container">
          <p className="section-kicker">Who&apos;s behind this?</p>
          <h1 className="section-heading">The story of Ghumoo With Us.</h1>
          <p className="section-subtitle">
            A small team of travel nerds from Odisha, obsessed with turning
            regular weekends and long holidays into cinematic stories.
          </p>

          <div className="about-layout">
            <div className="about-text">
              <p>
                Ghumoo With Us started with one simple idea: most Indian trips
                look the same on paper, but the magic is in the tiny details —
                the chai stall you stop at, the playlist on the highway, the
                little detours off Google Maps. We design trips that feel like
                travelling with that one hyper‑organised friend who still knows
                how to be spontaneous.
              </p>
              <p>
                Right now we&apos;re starting close to home with Cuttack →
                Kendrapada and nearby getaways. As we grow, the idea is to add
                more states, more roadtrips and a few big international journeys
                — all with the same small‑group, story‑driven vibe.
              </p>
              <p>
                Every departure is kept intentionally small so you never feel
                like you&apos;re on a bus tour. Think cosy homestays, local
                food, honest pricing and plenty of time to just sit by a river
                and do nothing.
              </p>
            </div>

            <div className="about-photos">
              <div className="about-photo">
                <img
                  src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Traveller looking at mountains"
                />
              </div>
              <div className="about-photo">
                <img
                  src="https://images.pexels.com/photos/2144326/pexels-photo-2144326.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Friends at a scenic viewpoint"
                />
              </div>
              <div className="about-photo">
                <img
                  src="https://images.pexels.com/photos/2549355/pexels-photo-2549355.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Couple on a scooter adventure"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
