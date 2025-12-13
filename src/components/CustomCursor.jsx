import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    const moveCursor = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${posX}px`;
        dotRef.current.style.top = `${posY}px`;
      }
      
      if (outlineRef.current) {
        outlineRef.current.animate({
          left: `${posX}px`,
          top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
      }
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseover', () => {
          if (outlineRef.current) outlineRef.current.classList.add('hover');
          if (dotRef.current) dotRef.current.classList.add('hover');
        });
        el.addEventListener('mouseout', () => {
          if (outlineRef.current) outlineRef.current.classList.remove('hover');
          if (dotRef.current) dotRef.current.classList.remove('hover');
        });
      });
    };

    window.addEventListener('mousemove', moveCursor);
    handleLinkHoverEvents();
    
    const observer = new MutationObserver(handleLinkHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, []);


  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-outline" ref={outlineRef}></div>
    </>
  );
};

export default CustomCursor;
