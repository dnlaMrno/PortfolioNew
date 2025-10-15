import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Hero entrance animations
    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo(descRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' },
      '-=1'
    );

    // Subtle parallax effect (much less movement)
    gsap.to(heroRef.current, {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-6 pt-32"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <h1
              ref={titleRef}
              className="text-6xl lg:text-8xl font-black text-grotesk leading-none"
            >
              DANIELA
              <br />
              <span className="text-[var(--accent)]">PORRAS</span>
            </h1>
          </div>

          <p
            ref={descRef}
            className="text-xl text-gray-600 max-w-lg leading-relaxed"
          >
            Frontend Developer especializado en experiencias web brutalist,
            animaciones GSAP y interfaces modernas. Drag & drop, smooth scroll,
            y micro-interacciones que sorprenden.
          </p>

          <div ref={ctaRef} className="flex gap-4">
            <button className="brutal-button">
              Ver Proyectos
            </button>
            <button className="border-4 border-black bg-white text-black px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Contacto
            </button>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div ref={imageRef} className="relative">
          <div className="brutal-card p-4 aspect-square flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/images/pixel-portrait.png"
                alt="Daniela Porras - Pixel Art Portrait"
                className="w-full h-full object-contain rounded-sm pixel-art"
                style={{
                  imageRendering: 'pixelated',
                  imageRendering: '-moz-crisp-edges',
                  imageRendering: 'crisp-edges'
                }}
              />
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-black border-4 border-black animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[var(--accent)] border-4 border-black rotate-45"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;