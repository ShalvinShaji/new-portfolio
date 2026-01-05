import React, { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 3) + 1; 
        return Math.min(prev + increment, 100);
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 100) {
      const timer = setTimeout(() => {
        setOpacity(0);
        setTimeout(onComplete, 1000);
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
      <div className="relative z-10 flex flex-col items-center w-full max-w-[280px]">
        <div className="mb-12 overflow-hidden">
          <span className="font-heading text-[10px] text-text-white uppercase tracking-[0.8rem] opacity-40 block animate-pulse">
            Initializing
          </span>
        </div>

        <div className="w-full h-[1px] bg-text-white/5 rounded-full overflow-hidden relative mb-8">
          <div 
            className="h-full bg-gradient-to-r from-crimson to-text-white transition-all duration-300 ease-out relative shadow-[0_0_10px_rgba(220,20,60,0.3)]"
            style={{ width: `${count}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full h-full -translate-x-full animate-shimmer opacity-50"></div>
          </div>
        </div>

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
