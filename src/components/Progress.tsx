import { useState } from 'react';
import { useScrollHandler } from '@/lib/useScrollHandler';

export default function Progress() {
  const [progress, setProgress] = useState(0);

  useScrollHandler(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    setProgress(scrollPercent);
  });

  return (
    <>
      <div 
        className="fixed bottom-0 left-0 h-1 bg-primary transition-[width] duration-150 ease-out motion-safe:duration-300"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
      <div className="fixed bottom-2 right-2 text-xs font-mono text-foreground/40">
        {Math.round(progress)}%
      </div>
    </>
  );
}