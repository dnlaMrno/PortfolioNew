import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    tech: ["Lorem", "Ipsum", "Dolor"],
    size: "large",
    color: "bg-white",
    textColor: "text-black"
  },
  {
    id: 2,
    title: "Sit Amet Consectetur",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore",
    tech: ["Amet", "Sit", "Consectetur"],
    size: "medium",
    color: "bg-black",
    textColor: "text-white"
  },
  {
    id: 3,
    title: "Magna Aliqua",
    description: "Ut enim ad minim veniam quis nostrud exercitation",
    tech: ["Magna", "Aliqua", "Veniam"],
    size: "small",
    color: "bg-gray-200",
    textColor: "text-black"
  },
  {
    id: 4,
    title: "Ullamco Laboris",
    description: "Duis aute irure dolor in reprehenderit in voluptate",
    tech: ["Ullamco", "Laboris", "Irure"],
    size: "medium",
    color: "bg-gray-200",
    textColor: "text-black"
  },
  {
    id: 5,
    title: "Velit Esse Cillum",
    description: "Excepteur sint occaecat cupidatat non proident sunt",
    tech: ["Velit", "Esse", "Cillum"],
    size: "large",
    color: "bg-white",
    textColor: "text-black"
  },
  {
    id: 6,
    title: "Fugiat Nulla",
    description: "Pariatur excepteur sint occaecat cupidatat non",
    tech: ["Fugiat", "Nulla", "Pariatur"],
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
    <section id="proyectos" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h3 className="text-5xl lg:text-6xl font-black text-grotesk mb-6">
            MIS PROYECTOS
          </h3>
        </div>

        {/* Draggable Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]"
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
                    <a
                      href="https://github.com/dnlaMrno"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold hover:opacity-80 transition-opacity"
                    >
                      <span>Ver Proyecto</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
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
            ⚡ Explora mis proyectos
          </p>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;