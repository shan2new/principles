import { useState, useEffect } from 'react';
import { groups } from '@/data/habits';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 space-y-2 hidden xl:block">
      {groups.map((group) => (
        <button
          key={group.name}
          onClick={() => scrollToSection(group.name)}
          className={`block w-3 h-3 rounded-full transition-all duration-200 ${
            activeSection === group.name
              ? 'bg-primary scale-125'
              : 'bg-primary/20 hover:bg-primary/50'
          }`}
          aria-label={`Jump to ${group.name}`}
        />
      ))}
    </nav>
  );
}