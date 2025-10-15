import { useEffect } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import DraggableBentoGrid from './components/DraggableBentoGrid';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Initialize smooth scroll
  useSmoothScroll();

  useEffect(() => {
    // Hide default cursor on desktop
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    if (mediaQuery.matches) {
      document.body.style.cursor = 'none';
    }

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Custom Cursor (desktop only) */}
      <CustomCursor />

      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <DraggableBentoGrid />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
