// components/Navbar.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import AnimatedLogo from './AnimatedLogo';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close mobile nav on route change (best-effort)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="nav-logo" onClick={close}>
          <AnimatedLogo />
        </Link>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <Link href="/" className="nav-link" onClick={close}>
            Home
          </Link>
          <Link href="/packages" className="nav-link" onClick={close}>
            Trips
          </Link>
          <Link href="/blog" className="nav-link" onClick={close}>
            Blog
          </Link>
          <Link href="/about" className="nav-link" onClick={close}>
            About
          </Link>
          <Link href="/contact" className="nav-link" onClick={close}>
            Contact
          </Link>
          <Link href="/register" className="nav-link" onClick={close}>
            Register
          </Link>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
