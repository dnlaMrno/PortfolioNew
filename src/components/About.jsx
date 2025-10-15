import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    // Title animation
    gsap.fromTo(titleRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%'
        }
      }
    );

    // Content animation
    gsap.fromTo(contentRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%'
        }
      }
    );

    // Skills stagger animation
    gsap.fromTo('.skill-item',
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        stagger: 0.1,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 80%'
        }
      }
    );
  }, []);

  const skills = [
    'React', 'JavaScript', 'TypeScript', 'GSAP', 'Tailwind CSS',
    'Framer Motion', 'Three.js', 'Node.js', 'MongoDB', 'Git'
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2
              ref={titleRef}
              className="text-5xl lg:text-6xl font-black text-grotesk mb-8"
            >
              SOBRE
              <br />
              <span className="text-[var(--accent)]">MÍ</span>
            </h2>

            <div ref={contentRef} className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Soy <strong>Frontend Developer</strong> especializada en crear experiencias
                web que combinan diseño brutalist con animaciones fluidas. Mi pasión es
                transformar ideas complejas en interfaces intuitivas y visualmente impactantes.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Con más de <strong>3 años de experiencia</strong>, he trabajado en proyectos
                que van desde e-commerce hasta aplicaciones web complejas, siempre
                priorizando la experiencia de usuario y la performance.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-bold text-grotesk mb-4">Enfoque</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[var(--accent)] rotate-45"></span>
                    Diseño centrado en el usuario
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[var(--accent)] rotate-45"></span>
                    Performance y accesibilidad
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[var(--accent)] rotate-45"></span>
                    Animaciones significativas
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[var(--accent)] rotate-45"></span>
                    Código limpio y mantenible
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div>
            <div className="brutal-card p-8 bg-gray-50">
              <h3 className="text-2xl font-black text-grotesk mb-6">
                TECH STACK
              </h3>

              <div ref={skillsRef} className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="skill-item brutal-card p-4 bg-white text-center hover:bg-[var(--accent)] hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <span className="font-bold text-sm">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t-2 border-black">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-black text-grotesk text-[var(--accent)]">
                      15+
                    </div>
                    <div className="text-sm text-mono text-gray-600">
                      Proyectos
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-grotesk text-[var(--accent)]">
                      98%
                    </div>
                    <div className="text-sm text-mono text-gray-600">
                      Satisfacción
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;