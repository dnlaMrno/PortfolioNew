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
    'React', 'JavaScript', 'Next', 'GSAP', 'Tailwind CSS',
    'Vite', 'MySql', 'Node.js', 'MongoDB', 'Git'
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
                Soy <strong>Frontend Developer</strong> y me especializo en crear experiencias digitales 
                modernas, accesibles y fluidas. Mi pasión es transformar ideas complejas en interfaces 
                intuitivas.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Con más de <strong>3 años de experiencia</strong>, he trabajado en proyectos
                que van desde e-commerce hasta aplicaciones web complejas, siempre
                priorizando la experiencia de usuario y la performance.
              </p>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div>
            <div className="brutal-card p-8 bg-gray-50">
              <h3 className="text-2xl font-black text-grotesk mb-6">
                TECNOLOGÍAS
              </h3>

              <div ref={skillsRef} className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="skill-item brutal-card p-4 bg-white text-center hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <span className="font-bold text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;