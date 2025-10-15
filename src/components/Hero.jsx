import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pixelPortrait from '/images/pixel-portrait.png';

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
      { scale: 0.8, opacity: 0, rotationY: 45 },
      { scale: 1, opacity: 1, rotationY: 0, duration: 1.2, ease: 'back.out(1.7)' },
      '-=1'
    );

    // Glitch container random shake
    gsap.to(imageRef.current, {
      x: () => Math.random() * 2 - 1,
      y: () => Math.random() * 2 - 1,
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      ease: 'none'
    });

    // Floating elements orbit animation
    const floatingElements = imageRef.current?.querySelectorAll('.absolute');
    if (floatingElements) {
      floatingElements.forEach((el, index) => {
        gsap.to(el, {
          rotation: 360,
          duration: 8 + index * 2,
          repeat: -1,
          ease: 'none',
          transformOrigin: 'center center'
        });
      });
    }

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
      className="min-h-screen flex px-6 pt-40 pb-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center mt-16">
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
            Disfruto resolver problemas, colaborar con equipos multidisciplinarios 
            y Siempre estoy buscando nuevos desafíos para seguir creciendo.
          </p>

          <div ref={ctaRef} className="flex gap-4">
            <a
              href="/CVDanielaPorras_frontend.pdf"
              download="CVDanielaPorras_frontend.pdf"
              className="brutal-button"
            >
              Descargar CV
            </a>
            <a
              href="https://www.linkedin.com/in/porras-daniela/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-4 border-black bg-white text-black px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors no-underline"
            >
              Linkedin
            </a>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div ref={imageRef} className="relative">
          <div className="brutal-card p-4 aspect-square bg-black overflow-hidden glitch-container">
            <div className="w-full h-full relative">
              <img
                src={pixelPortrait}
                alt="Daniela Porras - Pixel Art Portrait"
                className="w-full h-full object-cover pixel-art glitch-image"
                style={{
                  imageRendering: 'pixelated',
                  imageRendering: '-moz-crisp-edges',
                  imageRendering: 'crisp-edges',
                  backgroundImage: `url(${pixelPortrait})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />

              {/* Fragment RGB Overlay */}
              <div className="fragment-overlay"></div>

              {/* Terminal Text */}
              <div className="glitch-text">
                &gt; SYSTEM_BREACH_DETECTED_<br/>
                &gt; LOADING_PROFILE.EXE<br/>
                &gt; STATUS: FRAGMENTING...
              </div>
            </div>
          </div>

          {/* Floating elements with glitch effect */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-black border-4 border-black animate-pulse hover:animate-bounce"></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[var(--color-accent)] border-4 border-black rotate-45 hover:rotate-[225deg] transition-transform duration-300"></div>

          {/* Additional glitch elements */}
          <div className="absolute top-2 left-2 w-2 h-8 bg-red-500 opacity-0 hover:opacity-100 transition-opacity"></div>
          <div className="absolute bottom-8 right-8 w-8 h-2 bg-cyan-400 opacity-0 hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;