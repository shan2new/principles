import { useState, useCallback } from 'react';
import Header from '@/components/Header';
import GroupSection from '@/components/GroupSection';
import Progress from '@/components/Progress';
import Navigation from '@/components/Navigation';
import KeyboardHelp from '@/components/KeyboardHelp';
import QuickNav from '@/components/QuickNav';
import { useKeyboardNav } from '@/lib/useKeyboardNav';
import { useSwipeGesture } from '@/lib/useSwipeGesture';
import { groups } from '@/data/habits';

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  useKeyboardNav();

  const navigateSection = useCallback((direction: 'next' | 'prev') => {
    const newIndex = direction === 'next' 
      ? Math.min(currentSectionIndex + 1, groups.length - 1)
      : Math.max(currentSectionIndex - 1, 0);

    if (newIndex !== currentSectionIndex) {
      setCurrentSectionIndex(newIndex);
      const element = document.getElementById(groups[newIndex].name);
      if (element) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        element.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start'
        });
      }
    }
  }, [currentSectionIndex]);

  useSwipeGesture({
    onSwipeLeft: () => navigateSection('next'),
    onSwipeRight: () => navigateSection('prev'),
    threshold: 50
  });

  return (
    <div className="min-h-svh bg-background text-foreground selection:bg-primary/20">
      <Progress />
      <Header />
      <Navigation />
      <KeyboardHelp />
      <QuickNav />
      
      <main className="relative max-w-[100ch] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/40 to-primary/20 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="relative">
          {groups.map((g) => (
            <GroupSection key={g.name} group={g} />
          ))}
        </div>

        <div className="absolute inset-x-0 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary/40 to-primary/20 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </main>

      <footer className="mt-24 py-6 text-center text-sm text-muted-foreground">
        <p>Press <kbd className="px-2 py-1 text-xs bg-accent rounded">?</kbd> for keyboard shortcuts</p>
      </footer>
    </div>
  );
}

export default App;