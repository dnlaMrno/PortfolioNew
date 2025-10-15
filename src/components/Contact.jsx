import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // Form animation
    gsap.fromTo('.form-element',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%'
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-mono text-[var(--accent)] font-bold text-sm uppercase tracking-widest mb-4">
            Hablemos
          </h2>
          <h3 className="text-5xl lg:text-6xl font-black text-grotesk mb-6">
            ¿TIENES UN
            <br />
            <span className="text-[var(--accent)]">PROYECTO?</span>
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estoy disponible para proyectos freelance y colaboraciones.
            ¡Creemos algo increíble juntos!
          </p>
        </div>

        {/* Contact Form */}
        <div ref={formRef} className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-element">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full p-4 bg-white text-black border-4 border-white font-bold placeholder-gray-500 focus:border-[var(--accent)] focus:outline-none transition-colors"
                />
              </div>
              <div className="form-element">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 bg-white text-black border-4 border-white font-bold placeholder-gray-500 focus:border-[var(--accent)] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="form-element">
              <input
                type="text"
                placeholder="Asunto"
                className="w-full p-4 bg-white text-black border-4 border-white font-bold placeholder-gray-500 focus:border-[var(--accent)] focus:outline-none transition-colors"
              />
            </div>

            <div className="form-element">
              <textarea
                rows="6"
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full p-4 bg-white text-black border-4 border-white font-bold placeholder-gray-500 focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <div className="form-element">
              <button
                type="submit"
                className="bg-[var(--accent)] text-white border-4 border-[var(--accent)] px-8 py-4 font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-[var(--accent)] transition-colors duration-300 w-full md:w-auto"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>

        {/* Contact Links */}
        <div className="mt-16 pt-16 border-t-4 border-gray-800">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="form-element">
              <h4 className="font-bold text-grotesk mb-2">Email</h4>
              <a
                href="mailto:daniela@example.com"
                className="text-[var(--accent)] hover:text-white transition-colors"
              >
                daniela@example.com
              </a>
            </div>
            <div className="form-element">
              <h4 className="font-bold text-grotesk mb-2">LinkedIn</h4>
              <a
                href="#"
                className="text-[var(--accent)] hover:text-white transition-colors"
              >
                /in/daniela-porras
              </a>
            </div>
            <div className="form-element">
              <h4 className="font-bold text-grotesk mb-2">GitHub</h4>
              <a
                href="#"
                className="text-[var(--accent)] hover:text-white transition-colors"
              >
                @danielaporras
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;