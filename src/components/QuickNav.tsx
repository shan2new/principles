import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronUpIcon, MenuIcon, XIcon } from 'lucide-react';
import { groups } from '@/data/habits';
import { useScrollHandler } from '@/lib/useScrollHandler';

export default function QuickNav() {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  useScrollHandler((scrollY) => {
    setIsVisible(scrollY > 100);
    
    // Auto-hide the menu when scrolling
    if (isOpen && scrollY > 150) {
      setIsOpen(false);
    }
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      element.scrollIntoView({ 
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start'
      });
      
      // Close the menu after navigating
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ 
      top: 0, 
      behavior: prefersReducedMotion ? 'auto' : 'smooth' 
    });
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed z-50 xl:hidden">
      {/* Menu toggle button */}
      <Button 
        size="icon"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg hover:shadow-xl glass-effect border-primary/20 transition-all duration-300"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {isOpen ? (
          <XIcon className="h-5 w-5" />
        ) : (
          <MenuIcon className="h-5 w-5" />
        )}
      </Button>

      {/* Back to top button */}
      <Button
        size="icon"
        variant="outline"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-20 h-10 w-10 rounded-full glass-effect border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUpIcon className="h-4 w-4" />
      </Button>

      {/* Navigation menu */}
      <div 
        className={`fixed bottom-24 right-6 glass-effect rounded-lg shadow-xl border border-primary/10 transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        } max-w-[280px]`}
      >
        <div className="p-3 max-h-[60vh] overflow-auto hide-scrollbar">
          <div className="space-y-2">
            {groups.map((group) => (
              <Button
                key={group.name}
                variant={activeSection === group.name ? 'default' : 'outline'}
                size="sm"
                onClick={() => scrollToSection(group.name)}
                className={`w-full text-left justify-start font-display tracking-tight transition-all duration-300 ${
                  activeSection === group.name ? 'bg-primary shadow-md' : 'bg-card/70'
                }`}
              >
                <span className="text-sm truncate">
                  {group.name}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}