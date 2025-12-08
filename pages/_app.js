// pages/_app.js
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let lenis;
    let gsap;
    let ScrollTrigger;

    async function initScroll() {
      try {
        const { default: Lenis } = await import('@studio-freight/lenis');
        const gsapModule = await import('gsap');
        const ScrollTriggerModule = await import('gsap/ScrollTrigger');

        gsap = gsapModule.gsap || gsapModule.default || gsapModule;
        ScrollTrigger =
          ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;

        gsap.registerPlugin(ScrollTrigger);

        // Lenis = smooth scroll
        lenis = new Lenis({
          duration: 1.1,
          smoothWheel: true,
          smoothTouch: false, // keep touch natural & light
          lerp: 0.1,
        });

        // update ScrollTrigger on Lenis scroll
        lenis.on('scroll', () => {
          ScrollTrigger.update();
        });

        // drive Lenis via GSAP's ticker (one central RAF loop)
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        // Scroll-triggered animations
        const ctx = gsap.context(() => {
          // HERO intro
          if (document.querySelector('.hero-title')) {
            gsap.from('.hero-title', {
              opacity: 0,
              y: 40,
              duration: 1.1,
              ease: 'power3.out',
            });

            gsap.from('.hero-subtitle', {
              opacity: 0,
              y: 30,
              duration: 1,
              delay: 0.2,
              ease: 'power3.out',
            });

            gsap.from('.hero-actions', {
              opacity: 0,
              y: 20,
              duration: 0.9,
              delay: 0.4,
              ease: 'power3.out',
            });
          }

          // Featured trip card + image
          gsap.utils
            .toArray('.featured-card, .featured-image-shell')
            .forEach((el) => {
              gsap.from(el, {
                opacity: 0,
                y: 40,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse',
                },
              });
            });

          // Coming soon cards
          gsap.utils.toArray('.coming-card').forEach((el) => {
            gsap.from(el, {
              opacity: 0,
              y: 30,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
              },
            });
          });

          // Testimonials
          gsap.utils.toArray('.testimonial-card').forEach((el) => {
            gsap.from(el, {
              opacity: 0,
              y: 20,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
              },
            });
          });

          // Blog cards
          gsap.utils.toArray('.blog-card').forEach((el) => {
            gsap.from(el, {
              opacity: 0,
              y: 24,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 92%',
              },
            });
          });

          // Newsletter
          if (document.querySelector('.newsletter')) {
            gsap.from('.newsletter', {
              opacity: 0,
              y: 40,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: '.newsletter',
                start: 'top 85%',
              },
            });
          }

          // Register section
          if (document.querySelector('.register')) {
            gsap.from('.register', {
              opacity: 0,
              y: 40,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: '.register',
                start: 'top 85%',
              },
            });
          }

          // Playful doodle strip
          if (document.querySelector('.doodle-strip')) {
            gsap.from('.doodle-strip', {
              opacity: 0,
              y: 30,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: '.doodle-strip',
                start: 'top 85%',
              },
            });
          }
        });

        // keep context so we can revert if the app ever unmounts
        if (typeof window !== 'undefined') {
          window.__ghumooGsapCtx = ctx;
        }
      } catch (err) {
        console.error('Error setting up Lenis/GSAP', err);
      }
    }

    initScroll();

    return () => {
      if (typeof window !== 'undefined' && window.__ghumooGsapCtx) {
        window.__ghumooGsapCtx.revert();
        window.__ghumooGsapCtx = null;
      }
      if (lenis) {
        lenis.destroy();
      }
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
