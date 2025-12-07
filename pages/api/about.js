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
            Use this space to introduce yourself, your travel philosophy and why
            you&apos;re obsessed with showing people India properly.
          </p>

          <p style={{ maxWidth: '46rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Ghumoo With Us started with one simple idea: most Indian trips look
            the same on paper, but the magic is in the tiny details — the chai
            stall you stop at, the playlist on the highway, the little detours
            off Google Maps. We design trips that feel like travelling with that
            one hyper‑organised friend who still knows how to be spontaneous.
          </p>

          <p style={{ maxWidth: '46rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Right now we&apos;re starting close to home with Cuttack →
            Kendrapada and nearby getaways. As we grow, the idea is to add more
            states, more roadtrips and a few big international journeys — all
            with the same small‑group, story‑driven vibe.
          </p>
        </div>
      </section>
    </>
  );
}
