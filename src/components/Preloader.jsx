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
      className="fixed inset-0 z-[9999] bg-bg-main flex items-center justify-center transition-opacity duration-500 will-change-opacity pointer-events-none"
      style={{ opacity }}
    >
      <div className="flex items-center justify-center w-full max-w-[300px] gap-4">
        
        {/* Progress Bar Container */}
        <div className="flex-1 h-[1px] bg-text-white/10 rounded-full overflow-hidden">
          {/* Progress Bar Fill */}
          <div 
            className="h-full bg-gradient-to-r from-crimson to-text-white transition-all duration-100 ease-out"
            style={{ width: `${count}%` }}
          ></div>
        </div>

        {/* Percentage Text */}
        <div className="flex items-baseline min-w-[3ch] justify-end">
          <span className="font-heading text-xl font-light text-text-white tabular-nums">
            {count}
          </span>
          <span className="font-heading text-sm font-thin text-crimson ml-0.5">
            %
          </span>
        </div>

      </div>
    </div>
  );
};

export default Preloader;
