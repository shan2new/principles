import { useState, useEffect } from 'react';

interface Props {
  direction: 'left' | 'right' | null;
}

export default function SwipeFeedback({ direction }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (direction) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 400);
      return () => clearTimeout(timer);
    }
  }, [direction]);

  if (!direction || !isVisible) return null;

  return (
    <div
      className={`fixed inset-y-0 ${
        direction === 'left' ? 'left-0' : 'right-0'
      } w-1 bg-primary/20 transition-transform duration-300 ease-out motion-safe:animate-swipe`}
    />
  );
}