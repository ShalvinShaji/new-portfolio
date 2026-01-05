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
      className="fixed inset-0 z-[9999] bg-bg-main flex items-center justify-center transition-opacity duration-700 will-change-opacity pointer-events-none"
      style={{ opacity }}
    >
      {/* Premium Background Layer */}
      <div className="absolute inset-0 luxury-gradient opacity-80"></div>
      <div className="absolute inset-0 noise-overlay opacity-20"></div>

      {/* Large Background Number (Premium Technical Feel) */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="font-heading text-size-index font-black text-text-white/[0.03] select-none leading-none scale-150 md:scale-100">
          {count.toString().padStart(2, '0')}
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-[400px] px-8">
        
        {/* Loading Label */}
        <div className="flex items-center gap-3 mb-6 w-full justify-start overflow-hidden">
          <span className="font-heading text-size-nano font-bold text-text-white uppercase tracking-[0.5rem] opacity-30 animate-pulse">
            Initializing
          </span>
          <div className="h-[1px] flex-1 bg-text-white/5"></div>
        </div>

        <div className="flex items-center justify-center w-full gap-8">
          {/* Enhanced Progress Bar Container */}
          <div className="flex-1 h-[2px] bg-text-white/5 rounded-full overflow-hidden relative">
            {/* Progress Bar Fill with Glow */}
            <div 
              className="h-full bg-gradient-to-r from-crimson to-text-white transition-all duration-300 ease-out relative shadow-[0_0_15px_rgba(220,20,60,0.5)]"
              style={{ width: `${count}%` }}
            >
              {/* Internal Shimmer/Scanning Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full -translate-x-full animate-shimmer"></div>
            </div>
          </div>

          {/* Percentage Text with High-End Layout */}
          <div className="flex items-baseline min-w-[4ch] justify-end group">
            <span className="font-heading text-3xl font-light text-text-white tabular-nums tracking-tighter">
              {count}
            </span>
            <span className="font-heading text-xs font-medium text-crimson ml-1 uppercase tracking-widest opacity-80">
              %
            </span>
          </div>
        </div>

        {/* Dynamic Detail Text */}
        <div className="mt-8 w-full flex justify-between items-center opacity-20">
          <span className="font-mono text-[10px] uppercase tracking-widest">System Check</span>
          <span className="font-mono text-[10px] uppercase tracking-widest">Protocol {count > 50 ? '02' : '01'}</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
