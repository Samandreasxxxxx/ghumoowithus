// pages/_app.js
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let lenis;
    let frameId;
    let cancelled = false;

    async function initLenis() {
      try {
        const { default: Lenis } = await import('@studio-freight/lenis');

        if (cancelled) return;

        lenis = new Lenis({
          duration: 1.1,
          smoothWheel: true,
          smoothTouch: false, // keep mobile scroll light & native-feeling
          lerp: 0.12,
        });

        const raf = (time) => {
          lenis.raf(time);
          frameId = requestAnimationFrame(raf);
        };

        frameId = requestAnimationFrame(raf);
      } catch (err) {
        console.error('Error initialising Lenis', err);
      }
    }

    initLenis();

    return () => {
      cancelled = true;
      if (frameId) cancelAnimationFrame(frameId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
