import { useState, useEffect } from 'react';

export default function KeyboardHelp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '?') {
        setIsVisible(prev => !prev);
      } else if (e.key === 'Escape') {
        setIsVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 p-6 bg-card rounded-lg shadow-lg border border-border/50 max-w-sm backdrop-blur-sm">
      <h4 className="font-display text-lg font-bold tracking-tight mb-4 text-foreground/90">Keyboard Shortcuts</h4>
      <ul className="space-y-3 text-[15px] leading-relaxed text-foreground/70">
        <li className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <kbd className="font-mono px-2 py-1 bg-accent/20 rounded text-xs font-medium tracking-wide text-accent-foreground/90">↑</kbd>
            <kbd className="font-mono px-2 py-1 bg-accent/20 rounded text-xs font-medium tracking-wide text-accent-foreground/90">k</kbd>
          </div>
          <span className="font-sans font-medium tracking-tight">Previous section</span>
        </li>
        <li className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <kbd className="font-mono px-2 py-1 bg-accent/20 rounded text-xs font-medium tracking-wide text-accent-foreground/90">↓</kbd>
            <kbd className="font-mono px-2 py-1 bg-accent/20 rounded text-xs font-medium tracking-wide text-accent-foreground/90">j</kbd>
          </div>
          <span className="font-sans font-medium tracking-tight">Next section</span>
        </li>
        <li className="flex items-center gap-3">
          <kbd className="font-mono px-2 py-1 bg-accent/20 rounded text-xs font-medium tracking-wide text-accent-foreground/90">Home</kbd>
          <span className="font-sans font-medium tracking-tight">Jump to first section</span>
        </li>
        <li className="flex items-center gap-3">
          <kbd className="font-mono px-2 py-1 bg-accent/20 rounded text-xs font-medium tracking-wide text-accent-foreground/90">End</kbd>
          <span className="font-sans font-medium tracking-tight">Jump to last section</span>
        </li>
        <li className="flex items-center gap-3">
          <kbd className="font-mono px-2 py-1 bg-accent/20 rounded text-xs font-medium tracking-wide text-accent-foreground/90">?</kbd>
          <span className="font-sans font-medium tracking-tight">Toggle this help dialog</span>
        </li>
      </ul>
    </div>
  );
}