import { useState, useEffect } from 'react';
import { groups } from '@/data/habits';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in navigation after a brief delay
    const timer = setTimeout(() => setIsVisible(true), 1000);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      element.scrollIntoView({ 
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav 
      className={`fixed right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-label="Section navigation"
    >
      <div className="py-4 px-3 glass-effect rounded-full space-y-6">
        {groups.map((group) => {
          const isActive = activeSection === group.name;
          
          return (
            <button
              key={group.name}
              onClick={() => scrollToSection(group.name)}
              className="group flex items-center relative"
              aria-label={`Jump to ${group.name}`}
              title={group.name}
              aria-current={isActive ? 'true' : undefined}
            >
              {/* Indicator dot */}
              <span 
                className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary scale-125 shadow-glow' 
                    : 'bg-primary/20 hover:bg-primary/50'
                }`}
              />
              
              {/* Section name tooltip */}
              <span className="font-sans text-sm font-medium tracking-tight text-foreground/80 opacity-0 group-hover:opacity-100 absolute right-full mr-4 rounded-md bg-card px-2 py-1 whitespace-nowrap transition-all duration-300 border border-border">
                {group.name}
              </span>
              
              {/* Active section indicator line */}
              {isActive && (
                <span className="absolute right-full mr-2 w-5 h-px bg-primary" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}