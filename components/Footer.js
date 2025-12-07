// components/Footer.js
import AnimatedLogo from './AnimatedLogo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <AnimatedLogo />
          <p className="footer-logo-line">
            Small‑group, cinematic travel experiences starting from Odisha and
            slowly stretching across India and beyond.
          </p>
        </div>

        <div>
          <div className="footer-heading">Contact</div>
          <a href="mailto:ghumoowithus@gmail.com" className="footer-link">
            ghumoowithus@gmail.com
          </a>
          <a href="tel:+917683895444" className="footer-link">
            +91 76838 95444
          </a>
        </div>

        <div>
          <div className="footer-heading">Social</div>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/ghumoowithus?igsh=Z3B5dmV3ZnhmN2Zy"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              𓅓
            </a>
            <a
              href="https://x.com/GhumooWithUs?t=7E7vXyCdKZq8TWnTSwX3JQ&s=08"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="X (Twitter)"
            >
              X
            </a>
            <a
              href="https://www.facebook.com/share/1VogzJhQh8/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              f
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Ghumoo With Us.</span>
        <span>Built for www.ghumoowithus.com · Hosted on Vercel</span>
      </div>
    </footer>
  );
}
