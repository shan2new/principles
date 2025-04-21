import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DishonourHeader from '@/components/DishonourHeader';
import DishonourSection from '@/components/DishonourSection';
import Progress from '@/components/Progress';
import ThemeToggle from '@/components/ThemeToggle';
import SwipeFeedback from '@/components/SwipeFeedback';
import { useKeyboardNav } from '@/lib/useKeyboardNav';
import { useSwipeGesture } from '@/lib/useSwipeGesture';
import { dishonourGroups } from '@/data/dishonour';
import { Button } from '@/components/ui/button';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export default function Dishonour() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const navigate = useNavigate();
  
  useKeyboardNav(); // Reuse keyboard navigation
  
  // Display warning message about the content
  const [showWarning, setShowWarning] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWarning(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  const navigateSection = useCallback((direction: 'next' | 'prev') => {
    const newIndex = direction === 'next' 
      ? Math.min(currentSectionIndex + 1, dishonourGroups.length - 1)
      : Math.max(currentSectionIndex - 1, 0);

    if (newIndex !== currentSectionIndex) {
      setCurrentSectionIndex(newIndex);
      const element = document.getElementById(dishonourGroups[newIndex].name);
      if (element) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        element.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start'
        });
      }
    }
    
    // Show swipe feedback animation
    setSwipeDirection(direction === 'next' ? 'left' : 'right');
    setTimeout(() => setSwipeDirection(null), 400);
  }, [currentSectionIndex]);

  useSwipeGesture({
    onSwipeLeft: () => navigateSection('next'),
    onSwipeRight: () => navigateSection('prev'),
    threshold: 50
  });

  return (
    <div className="min-h-svh bg-background text-foreground selection:bg-destructive/20 smooth-transition relative">
      <Progress />
      <ThemeToggle />
      <SwipeFeedback direction={swipeDirection} />
      
      {/* Back to honor code button */}
      <Button
        variant="outline"
        className="fixed top-4 left-4 z-50 rounded-full px-4 py-2 glass-effect border-primary/20 shadow-md hover:shadow-lg transition-all duration-300"
        onClick={() => navigate('/')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        <span>Back to Honor Code</span>
      </Button>
      
      {/* Warning banner */}
      {showWarning && (
        <div className="fixed top-16 left-0 right-0 z-50 flex justify-center">
          <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-md shadow-lg flex items-center gap-2 border border-destructive/30 max-w-md">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm font-medium">
              Warning: This page contains examples of negative behaviors. These are for learning what to avoid, not to follow!
            </p>
          </div>
        </div>
      )}
      
      <DishonourHeader />
      
      <main className="relative max-w-[100ch] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-destructive/20 to-destructive/10 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="relative">
          {dishonourGroups.map((group) => (
            <DishonourSection key={group.name} group={group} />
          ))}
        </div>

        <div className="absolute inset-x-0 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-destructive/40 to-destructive/10 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </main>

      <footer className="mt-24 py-6 text-center text-sm text-muted-foreground border-t border-destructive/10">
        <div className="flex flex-col items-center gap-2">
          <p className="flex items-center gap-2">
            <span>Remember: This is what <strong>not</strong> to do!</span>
          </p>
          <Button
            variant="outline"
            className="mt-4 border-primary/20"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Return to Code of Honor</span>
          </Button>
        </div>
      </footer>
    </div>
  );
}