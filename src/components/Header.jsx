import React, { useState, useEffect, useCallback, memo } from 'react';
import logo from '../assets/logo.png';

const Header = memo(() => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 50;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  }, [scrolled]);

  useEffect(() => {
    let ticking = false;
    
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-400 ${
        scrolled 
          ? 'bg-bg-main/60 backdrop-blur-xl py-4 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex justify-start items-center">
        <a 
          href="/" 
          className="font-heading text-2xl font-extrabold text-text-white uppercase tracking-[-0.05em] no-underline cursor-pointer hover:text-crimson transition-colors duration-300 flex items-center"
          aria-label="Back to top"
        >
          <img src={logo} alt="Shalvin Shaji Personal Logo" className="w-8 h-8 object-contain" />
        </a>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
