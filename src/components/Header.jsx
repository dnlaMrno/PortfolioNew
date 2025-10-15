import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    // Header animation on load
    gsap.fromTo(headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    // Logo rotation on scroll
    gsap.to(logoRef.current, {
      rotation: 360,
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
      }
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b-4 border-black"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            ref={logoRef}
            className="w-12 h-12 bg-black text-white flex items-center justify-center font-bold text-xl border-4 border-black"
          >
            <span className="text-grotesk">D</span>
          </div>
          <div>
            <div className="font-bold text-lg text-grotesk">Daniela Porras</div>
            <div className="text-sm text-muted text-mono">Frontend Dev</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none">
            <li>
              <a
                href="#work"
                className="text-black font-semibold uppercase tracking-wider text-sm hover:text-[var(--accent)] transition-colors duration-300"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-black font-semibold uppercase tracking-wider text-sm hover:text-[var(--accent)] transition-colors duration-300"
              >
                About
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <button className="brutal-button">
          Hire Me
        </button>
      </div>
    </header>
  );
};

export default Header;