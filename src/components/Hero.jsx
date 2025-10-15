import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
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
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.8'
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
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <h2
              ref={subtitleRef}
              className="text-mono text-[var(--accent)] font-bold text-sm uppercase tracking-widest mb-4"
            >
              Portfolio 2024
            </h2>
            <h1
              ref={titleRef}
              className="text-6xl lg:text-8xl font-black text-grotesk leading-none"
            >
              BRUTAL
              <br />
              <span className="text-[var(--accent)]">DESIGN</span>
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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t-4 border-black">
            <div>
              <div className="text-3xl font-black text-grotesk">15+</div>
              <div className="text-sm text-mono text-gray-600">PROYECTOS</div>
            </div>
            <div>
              <div className="text-3xl font-black text-grotesk">3+</div>
              <div className="text-sm text-mono text-gray-600">AÑOS EXP</div>
            </div>
            <div>
              <div className="text-3xl font-black text-grotesk">100%</div>
              <div className="text-sm text-mono text-gray-600">BRUTAL</div>
            </div>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div ref={imageRef} className="relative">
          <div className="brutal-card p-8 aspect-square flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-[var(--accent)] border-4 border-black mx-auto flex items-center justify-center">
                <span className="text-white text-3xl font-black">B</span>
              </div>
              <div className="text-mono text-sm font-bold">DRAG ME AROUND</div>
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