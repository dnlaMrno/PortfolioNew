import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorDot = useRef(null);
  const cursorOutline = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;

      gsap.to(cursorDot.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      gsap.to(cursorOutline.current, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: 'power2.out'
      });

      // Check if cursor is over any black background element
      let isOverBlackElement = false;

      // Check specific selectors
      const selectors = [
        'footer',
        '.bg-black',
        '.brutal-button',
        '[class*="bg-black"]'
      ];

      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (clientY >= rect.top &&
              clientY <= rect.bottom &&
              clientX >= rect.left &&
              clientX <= rect.right) {
            isOverBlackElement = true;
          }
        });
      });

      // Check for elements with bg-[var(--accent)] class specifically
      const accentElements = document.querySelectorAll('*');
      accentElements.forEach(element => {
        if (element.className && element.className.includes('bg-[var(--accent)]')) {
          const rect = element.getBoundingClientRect();
          if (clientY >= rect.top &&
              clientY <= rect.bottom &&
              clientX >= rect.left &&
              clientX <= rect.right) {
            isOverBlackElement = true;
          }
        }
      });

      if (isOverBlackElement) {
        // Change cursor to white
        gsap.to(cursorDot.current, {
          backgroundColor: 'white',
          duration: 0.2
        });
        gsap.to(cursorOutline.current, {
          borderColor: 'white',
          duration: 0.2
        });
      } else {
        // Change cursor back to black/accent
        gsap.to(cursorDot.current, {
          backgroundColor: 'var(--accent)',
          duration: 0.2
        });
        gsap.to(cursorOutline.current, {
          borderColor: 'var(--accent)',
          duration: 0.2
        });
      }
    };

    const onMouseEnterLink = () => {
      gsap.to(cursorDot.current, {
        scale: 2,
        duration: 0.3
      });
      gsap.to(cursorOutline.current, {
        scale: 1.5,
        duration: 0.3
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursorDot.current, {
        scale: 1,
        duration: 0.3
      });
      gsap.to(cursorOutline.current, {
        scale: 1,
        duration: 0.3
      });
    };

    document.addEventListener('mousemove', onMouseMove);

    const links = document.querySelectorAll('a, button, .draggable');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    // Add specific listeners for elements that change to black on hover
    const hoverElements = document.querySelectorAll('.skill-item');
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        gsap.to(cursorDot.current, {
          backgroundColor: 'white',
          duration: 0.2
        });
        gsap.to(cursorOutline.current, {
          borderColor: 'white',
          duration: 0.2
        });
      });
      element.addEventListener('mouseleave', () => {
        gsap.to(cursorDot.current, {
          backgroundColor: 'var(--accent)',
          duration: 0.2
        });
        gsap.to(cursorOutline.current, {
          borderColor: 'var(--accent)',
          duration: 0.2
        });
      });
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
      hoverElements.forEach(element => {
        element.removeEventListener('mouseenter', () => {});
        element.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorDot} className="cursor-dot"></div>
      <div ref={cursorOutline} className="cursor-outline"></div>
    </>
  );
};

export default CustomCursor;