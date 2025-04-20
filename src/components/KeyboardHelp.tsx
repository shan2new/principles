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
    <div className="fixed bottom-8 right-8 p-4 bg-card rounded-lg shadow-lg border border-border/50 max-w-sm">
      <h4 className="font-semibold mb-2">Keyboard Shortcuts</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        <li className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-accent rounded text-xs">↑</kbd>
          <kbd className="px-2 py-1 bg-accent rounded text-xs">k</kbd>
          <span>Previous section</span>
        </li>
        <li className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-accent rounded text-xs">↓</kbd>
          <kbd className="px-2 py-1 bg-accent rounded text-xs">j</kbd>
          <span>Next section</span>
        </li>
        <li className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-accent rounded text-xs">Home</kbd>
          <span>Jump to first section</span>
        </li>
        <li className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-accent rounded text-xs">End</kbd>
          <span>Jump to last section</span>
        </li>
        <li className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-accent rounded text-xs">?</kbd>
          <span>Toggle this help dialog</span>
        </li>
      </ul>
    </div>
  );
}