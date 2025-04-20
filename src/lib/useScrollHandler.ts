import { useEffect, useCallback } from 'react';

interface ScrollOptions {
  threshold?: number;
  passive?: boolean;
}

export function useScrollHandler(
  callback: (scrollY: number) => void,
  { threshold = 0, passive = true }: ScrollOptions = {}
) {
  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const scrollY = window.scrollY;
    if (scrollY > threshold) {
      callback(scrollY);
    }
  }, [callback, threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, passive]);
}