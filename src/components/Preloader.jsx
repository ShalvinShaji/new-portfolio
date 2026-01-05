import React, { useState, useEffect } from 'react';

/**
 * Preloader Component
 * Displays a kinetic progress bar with random acceleration to simulate a "hacking/loading" effect.
 * Uses a crimson-to-white gradient for the progress bar.
 */
const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Kinetic counter logic
    // Start fast, then slow down slightly for organic feel
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment for "beast/hacker" feel
        const increment = Math.floor(Math.random() * 3) + 1; 
        return Math.min(prev + increment, 100);
      });
    }, 20); // Fast update rate

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 100) {
      // Small pause at 100% before exit
      const timer = setTimeout(() => {
        setOpacity(0); // Fade out
        setTimeout(onComplete, 500); // Trigger cleanup after fade
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [count, onComplete]);

  if (!opacity && count === 100) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-bg-main flex items-center justify-center transition-opacity duration-1000 will-change-opacity pointer-events-none"
      style={{ opacity }}
    >
      {/* Standard App Noise Texture */}
      <div className="absolute inset-0 noise-overlay"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-[280px]">
        
        {/* Minimalist Label */}
        <div className="mb-12 overflow-hidden">
          <span className="font-heading text-[10px] text-text-white uppercase tracking-[0.8rem] opacity-40 block animate-pulse">
            Initializing
          </span>
        </div>

        {/* Ultra-thin Minimalist Progress Line */}
        <div className="w-full h-[1px] bg-text-white/5 rounded-full overflow-hidden relative mb-8">
          <div 
            className="h-full bg-gradient-to-r from-crimson to-text-white transition-all duration-300 ease-out relative shadow-[0_0_10px_rgba(220,20,60,0.3)]"
            style={{ width: `${count}%` }}
          >
            {/* Subtle Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full h-full -translate-x-full animate-shimmer opacity-50"></div>
          </div>
        </div>

        {/* Elegant Counter */}
        <div className="flex items-center justify-center">
          <span className="font-heading text-4xl font-extralight text-text-white tabular-nums tracking-[-0.1em]">
            {count.toString().padStart(2, '0')}
          </span>
          <span className="font-heading text-[10px] font-medium text-crimson ml-2 uppercase tracking-[0.3em] opacity-60">
            %
          </span>
        </div>

      </div>
    </div>
  );
};

export default Preloader;
