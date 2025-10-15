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

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
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