const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <div className="font-black text-grotesk text-xl mb-2">
              DANIELA PORRAS
            </div>
            <div className="text-mono text-sm text-gray-400">
              Frontend Developer
            </div>
          </div>

          {/* Center */}
          <div className="flex gap-6">
            <a
              href="#proyectos"
              className="text-gray-400 hover:text-[var(--accentFooter)] transition-colors text-sm font-bold uppercase tracking-wider"
            >
              Proyectos
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-[var(--accentFooter)] transition-colors text-sm font-bold uppercase tracking-wider"
            >
              Sobre Mí
            </a>
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            <div className="text-mono text-sm text-gray-400">
              © 2024
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Built with React + GSAP + Tailwind
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;