import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "E-commerce Brutal",
    description: "Tienda online con animaciones GSAP y micro-interacciones",
    tech: ["React", "GSAP", "Tailwind"],
    size: "large",
    color: "bg-white",
    textColor: "text-black"
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Panel de control con gráficos dinámicos",
    tech: ["Vue", "D3.js", "TypeScript"],
    size: "medium",
    color: "bg-black",
    textColor: "text-white"
  },
  {
    id: 3,
    title: "Portfolio 3D",
    description: "Experiencia inmersiva con Three.js",
    tech: ["Three.js", "React", "Blender"],
    size: "small",
    color: "bg-[var(--accent)]",
    textColor: "text-white"
  },
  {
    id: 4,
    title: "App Mobile",
    description: "Aplicación híbrida con animaciones fluidas",
    tech: ["React Native", "Lottie", "Firebase"],
    size: "medium",
    color: "bg-gray-200",
    textColor: "text-black"
  },
  {
    id: 5,
    title: "Landing Brutal",
    description: "Página de conversión con diseño impactante",
    tech: ["Next.js", "Framer Motion", "Vercel"],
    size: "large",
    color: "bg-white",
    textColor: "text-black"
  },
  {
    id: 6,
    title: "Game UI",
    description: "Interfaz de videojuego retro-futurista",
    tech: ["Unity", "C#", "Figma"],
    size: "small",
    color: "bg-black",
    textColor: "text-white"
  }
];

const BentoGrid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    // Staggered reveal animation
    gsap.fromTo('.bento-item',
      { y: 60, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.1,
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const getSizeClass = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-2 row-span-1';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-mono text-[var(--accent)] font-bold text-sm uppercase tracking-widest mb-4">
            Mis Proyectos
          </h2>
          <h3 className="text-5xl lg:text-6xl font-black text-grotesk mb-6">
            BENTO GRID
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Arrastra las cards para explorar. Cada proyecto está diseñado con atención
            al detalle y optimizado para la mejor experiencia de usuario.
          </p>
        </div>

        {/* Draggable Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]"
        >
          {projects.map((project) => (
              <div
                key={project.id}
                className={`bento-item ${getSizeClass(project.size)}`}
              >
                <div className={`brutal-card h-full p-6 ${project.color} ${project.textColor} flex flex-col justify-between relative overflow-hidden`}>
                  {/* Project Content */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-mono text-xs font-bold opacity-60">
                        #{project.id.toString().padStart(2, '0')}
                      </span>
                      <div className="w-3 h-3 bg-current rounded-full"></div>
                    </div>

                    <h4 className="text-xl font-black text-grotesk mb-2 leading-tight">
                      {project.title}
                    </h4>

                    <p className="text-sm opacity-80 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs text-mono bg-black/10 px-2 py-1 border border-current/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-bold">
                      <span>Ver Proyecto</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>

                  {/* Project Indicator */}
                  <div className="absolute top-2 right-2 opacity-60">
                    <div className="w-3 h-3 border-2 border-current"></div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Helper Text */}
        <div className="text-center mt-12">
          <p className="text-mono text-sm text-gray-500">
            ⚡ Explora mis proyectos con diseño brutalist
          </p>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;