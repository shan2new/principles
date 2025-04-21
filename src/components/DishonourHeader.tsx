import { useEffect, useRef } from 'react';

const DishonourHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    
    // Add entrance animation
    setTimeout(() => {
      header.classList.add('animate-in');
    }, 150);
    
    // Sinister motion effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (header && scrollY < 500) {
        const wobble = Math.sin(scrollY * 0.05) * 3;
        header.style.transform = `translateY(${scrollY * 0.2}px) rotate(${wobble}deg)`;
        header.style.opacity = `${1 - scrollY * 0.002}`;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="relative py-16 sm:py-24 mb-12 sm:mb-16 overflow-hidden opacity-0 translate-y-4 transition-all duration-1000">
      {/* Dark, ominous background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.15),transparent_80%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.1),transparent_80%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(at_top,transparent,var(--destructive)_0.5%,transparent_2%)]" />
      </div>
      
      <div className="max-w-3xl mx-auto text-center px-4">
        <div className="bg-card/80 dark:bg-card/70 backdrop-blur-md border border-destructive/30 rounded-2xl p-8 sm:p-10 relative overflow-hidden shadow-2xl">
          {/* Distressed design elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-40" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive/10 via-destructive/30 to-destructive/10" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-destructive/30 to-transparent" />
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-6 sm:space-x-8">
              {/* Left skull icon */}
              <svg xmlns="http://www.w3.org/2000/svg" 
                  className="w-14 h-14 sm:w-16 sm:h-16 text-destructive transform -rotate-12 hidden sm:block" 
                  fill="currentColor" 
                  viewBox="0 0 24 24">
                <path d="M12,2C7.589,2,4,5.589,4,9.995c0,3.371,2.113,6.313,5.121,7.53L8,20h3v1c0,0.552,0.448,1,1,1s1-0.448,1-1v-1h3l-1.121-2.475 C17.887,16.308,20,13.366,20,9.995C20,5.589,16.411,2,12,2z M11,16H9v-2h2V16z M15,16h-2v-2h2V16z M12,12c-2.209,0-4-1.791-4-4 c0-0.552,0.448-1,1-1s1,0.448,1,1c0,1.103,0.897,2,2,2s2-0.897,2-2c0-0.552,0.448-1,1-1s1,0.448,1,1C16,10.209,14.209,12,12,12z"/>
              </svg>
              
              {/* Title */}
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase font-extrabold tracking-tight text-destructive/90 dark:text-destructive/80 drop-shadow-sm">
                Code of Dishonour
              </h1>
              
              {/* Right skull icon */}
              <svg xmlns="http://www.w3.org/2000/svg" 
                  className="w-14 h-14 sm:w-16 sm:h-16 text-destructive transform rotate-12 hidden sm:block" 
                  fill="currentColor" 
                  viewBox="0 0 24 24">
                <path d="M12,2C7.589,2,4,5.589,4,9.995c0,3.371,2.113,6.313,5.121,7.53L8,20h3v1c0,0.552,0.448,1,1,1s1-0.448,1-1v-1h3l-1.121-2.475 C17.887,16.308,20,13.366,20,9.995C20,5.589,16.411,2,12,2z M11,16H9v-2h2V16z M15,16h-2v-2h2V16z M12,12c-2.209,0-4-1.791-4-4 c0-0.552,0.448-1,1-1s1,0.448,1,1c0,1.103,0.897,2,2,2s2-0.897,2-2c0-0.552,0.448-1,1-1s1,0.448,1,1C16,10.209,14.209,12,12,12z"/>
              </svg>
            </div>
            
            <div className="mt-8 relative">
              <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-destructive/30 to-transparent" />
              <div className="pt-8">
                <p className="text-foreground/90 text-xl sm:text-2xl font-medium leading-snug max-w-2xl mx-auto">
                  How to sabotage progress, damage relationships, and ensure personal stagnation.
                </p>
                <div className="flex items-center justify-center gap-2 mt-6">
                  <span className="w-2 h-2 rounded-full bg-destructive/40"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive/30"></span>
                  <span className="w-1 h-1 rounded-full bg-destructive/20"></span>
                </div>
                
                <div className="mt-6 text-sm font-medium text-destructive border border-destructive/30 bg-destructive/10 rounded-md py-2 px-4 inline-block">
                  ⚠️ Warning: These are examples of behaviors to avoid, not to follow!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DishonourHeader;