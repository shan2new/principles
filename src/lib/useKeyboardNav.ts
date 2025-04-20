import { useEffect } from 'react';
import { groups } from '@/data/habits';

export function useKeyboardNav() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only respond to key events when not typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      const sections = groups.map(g => g.name);
      const currentSection = sections.find(id => {
        const element = document.getElementById(id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3;
      });

      if (!currentSection) return;

      const currentIndex = sections.indexOf(currentSection);
      let nextIndex: number | null = null;

      switch (e.key) {
        case 'ArrowDown':
        case 'j':
          nextIndex = Math.min(currentIndex + 1, sections.length - 1);
          break;
        case 'ArrowUp':
        case 'k':
          nextIndex = Math.max(currentIndex - 1, 0);
          break;
        case 'Home':
          nextIndex = 0;
          break;
        case 'End':
          nextIndex = sections.length - 1;
          break;
      }

      if (nextIndex !== null) {
        e.preventDefault();
        const nextElement = document.getElementById(sections[nextIndex]);
        nextElement?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}