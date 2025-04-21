import { useEffect, useRef } from 'react';

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    
    // Add entrance animation
    setTimeout(() => {
      header.classList.add('animate-in');
    }, 150);
    
    // Optional parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (header && scrollY < 500) {
        header.style.transform = `translateY(${scrollY * 0.2}px)`;
        header.style.opacity = `${1 - scrollY * 0.002}`;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="relative py-16 sm:py-24 mb-12 sm:mb-16 overflow-hidden opacity-0 translate-y-4 transition-all duration-1000">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,140,0,0.15),transparent_80%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,140,0,0.1),transparent_80%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(at_top,transparent,var(--primary)_0.5%,transparent_2%)]" />
      </div>
      
      <div className="max-w-3xl mx-auto text-center px-4">
        <div className="glass-effect rounded-2xl p-8 sm:p-10 relative overflow-hidden shadow-2xl border-primary/10">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/5 via-primary/40 to-primary/5" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          <div className="flex items-center justify-center space-x-6 sm:space-x-8">
            {/* Left flame icon */}
            <svg xmlns="http://www.w3.org/2000/svg" 
                className="w-14 h-14 sm:w-16 sm:h-16 text-primary transform -rotate-12 flame hidden sm:block" 
                fill="currentColor" 
                viewBox="0 0 24 24">
              <path d="M12 2C8.5 7 8 10 8 13a4 4 0 008 0c0-3-4-6-4-11zm0 14a2 2 0 110-4 2 2 0 010 4z"/>
              <rect x="11" y="13" width="2" height="8" fill="currentColor"/>
            </svg>
            
            {/* Title */}
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl uppercase font-extrabold tracking-tight gradient-heading drop-shadow-sm">
              Code of Honor
            </h1>
            
            {/* Right flame icon */}
            <svg xmlns="http://www.w3.org/2000/svg" 
                className="w-14 h-14 sm:w-16 sm:h-16 text-primary transform rotate-12 flame hidden sm:block" 
                fill="currentColor" 
                viewBox="0 0 24 24">
              <path d="M12 2C8.5 7 8 10 8 13a4 4 0 008 0c0-3-4-6-4-11zm0 14a2 2 0 110-4 2 2 0 010 4z"/>
              <rect x="11" y="13" width="2" height="8" fill="currentColor"/>
            </svg>
          </div>
          
          <div className="mt-8 relative">
            <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="pt-8">
              <p className="text-foreground/90 text-xl sm:text-2xl font-medium leading-snug max-w-2xl mx-auto">
                Embrace timeless principles and build proactive habits for lasting growth and personal mastery.
              </p>
              <div className="flex items-center justify-center gap-2 mt-6">
                <span className="w-2 h-2 rounded-full bg-primary/40"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
                <span className="w-1 h-1 rounded-full bg-primary/20"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;