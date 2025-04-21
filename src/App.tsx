import { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from '@/components/Header';
import GroupSection from '@/components/GroupSection';
import Progress from '@/components/Progress';
import Navigation from '@/components/Navigation';
import QuickNav from '@/components/QuickNav';
import ThemeToggle from '@/components/ThemeToggle';
import SwipeFeedback from '@/components/SwipeFeedback';
import { useSwipeGesture } from '@/lib/useSwipeGesture';
import { groups } from '@/data/habits';
import Dishonour from '@/pages/Dishonour';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import { Button } from './components/ui/button';
import { MoveRight, ExternalLink } from 'lucide-react';

function CodeOfHonor() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [showScrollHint, setShowScrollHint] = useState(true);
  
  // Hide scroll hint after initial scroll or 5 seconds
  useEffect(() => {
    const hideHint = () => setShowScrollHint(false);
    const timer = setTimeout(hideHint, 5000);
    window.addEventListener('scroll', hideHint, { once: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', hideHint);
    };
  }, []);

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
    <div className="min-h-svh bg-background text-foreground selection:bg-primary/20 smooth-transition">
      <Progress />
      <ThemeToggle />
      <SwipeFeedback direction={swipeDirection} />
      <Header />
      <Navigation />
      <QuickNav />
      
      {/* Link to Dishonour page */}
      <Link to="/dishonour" className="fixed top-4 right-20 z-50">
        <Button 
          variant="outline" 
          className="glass-effect border-primary/20 shadow-md hover:shadow-lg transition-all duration-300 px-4"
        >
          <span>Code of Dishonour</span>
          <MoveRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
      
      {showScrollHint && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <div className="glass-effect px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-primary" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span className="text-sm font-medium text-foreground/90">Scroll to explore</span>
          </div>
        </div>
      )}
      
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

      <footer className="mt-24 py-6 text-center text-sm text-muted-foreground border-t border-primary/10">
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs text-muted-foreground/60">
            Swipe left/right to navigate between sections
          </p>
          
          <Link to="/dishonour" className="mb-2">
            <Button variant="outline" size="sm" className="text-sm border-primary/20">
              <span>See what <strong>not</strong> to do: Code of Dishonour</span>
              <MoveRight className="ml-2 h-3 w-3" />
            </Button>
          </Link>

          <div className="flex flex-wrap justify-center gap-3 items-center text-xs text-muted-foreground mt-4">
            <span>© {new Date().getFullYear()} <a href="https://shan2new.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
              shan2new.in
              <ExternalLink className="h-3 w-3" />
            </a></span>
            <span>•</span>
            <Link to="/privacy" className="hover:text-primary hover:underline">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-primary hover:underline">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CodeOfHonor />} />
        <Route path="/dishonour" element={<Dishonour />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;