import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronUpIcon } from 'lucide-react';
import { groups } from '@/data/habits';
import { useScrollHandler } from '@/lib/useScrollHandler';

export default function QuickNav() {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

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
  });

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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex gap-2 xl:hidden">
      <div className="flex flex-col gap-2">
        {groups.map((group) => (
          <Button
            key={group.name}
            variant={activeSection === group.name ? 'default' : 'outline'}
            size="sm"
            onClick={() => scrollToSection(group.name)}
            className="text-left justify-start font-display tracking-tight focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            <span className="text-sm font-medium tracking-tight leading-none">
              {group.name}
            </span>
          </Button>
        ))}
      </div>
      <Button
        size="icon"
        variant="outline"
        onClick={() => {
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          window.scrollTo({ 
            top: 0, 
            behavior: prefersReducedMotion ? 'auto' : 'smooth' 
          });
        }}
        className="h-8 w-8 focus-visible:ring-2 focus-visible:ring-primary/50"
        aria-label="Scroll to top"
      >
        <ChevronUpIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}