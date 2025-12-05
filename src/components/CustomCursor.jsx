import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    // Check if device is likely a desktop (mouse pointer)
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
      document.querySelectorAll('a, button, .project-row, .spec-item').forEach(el => {
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
    handleLinkHoverEvents(); // Init listeners
    
    // Re-run listeners on DOM changes (simple approach for SPA)
    const observer = new MutationObserver(handleLinkHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, []);

  // Only render on desktop to avoid touch confusion, handled via CSS hiding commonly
  // But strictly returning null for structure safety
  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-outline" ref={outlineRef}></div>
    </>
  );
};

export default CustomCursor;
