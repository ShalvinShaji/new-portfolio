import React, { useState, useEffect, useCallback, memo } from 'react';
import logo from '../assets/logo.png';

const Header = memo(() => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        scrolled 
          ? 'bg-bg-main/60 backdrop-blur-xl py-4 shadow-2xl border-b-[0.5px] border-white/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex items-center">
        <a 
          href="/" 
          className="block hover:opacity-80 transition-opacity duration-300"
          aria-label="Home"
        >
          <img 
            src={logo} 
            alt="Logo" 
            className="h-10 w-auto object-contain" 
          />
        </a>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
