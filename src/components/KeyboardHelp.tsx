import { useState, useEffect } from 'react';
import { XIcon, KeyboardIcon } from 'lucide-react';
import { Button } from './ui/button';

export default function KeyboardHelp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '?') {
        setIsVisible(prev => !prev);
        setIsMinimized(false);
      } else if (e.key === 'Escape' && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  if (!isVisible) {
    return (
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsVisible(true)}
        className="fixed left-6 bottom-6 h-10 w-10 rounded-full glass-effect shadow-md hover:shadow-lg transition-all duration-300 border-primary/20 z-50 xl:block hidden"
        aria-label="Show keyboard shortcuts"
        title="Show keyboard shortcuts"
      >
        <KeyboardIcon className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <div
      className={`fixed bottom-8 right-1/2 translate-x-1/2 z-50 transition-all duration-300 ease-out ${
        isMinimized ? 'w-12 h-12' : 'max-w-sm'
      }`}
    >
      {isMinimized ? (
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMinimized(false)}
          className="w-12 h-12 rounded-full glass-effect shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Expand keyboard shortcuts"
        >
          <KeyboardIcon className="h-5 w-5" />
        </Button>
      ) : (
        <div className="glass-effect rounded-lg shadow-2xl border border-primary/10 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-primary/10 bg-primary/5">
            <h4 className="font-display text-lg font-bold tracking-tight text-foreground/90 flex items-center gap-2">
              <KeyboardIcon className="h-4 w-4 text-primary" />
              <span>Keyboard Shortcuts</span>
            </h4>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 rounded-full"
                onClick={() => setIsMinimized(true)}
                aria-label="Minimize"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/80" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 rounded-full hover:bg-destructive/10 hover:text-destructive"
                onClick={() => setIsVisible(false)}
                aria-label="Close"
              >
                <XIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="p-6 space-y-5">
            <div className="space-y-3 text-[15px] leading-relaxed">
              <h5 className="text-sm uppercase tracking-wide font-semibold text-primary mb-2">Navigation</h5>
              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium tracking-tight text-foreground/90">Previous section</span>
                  <div className="flex items-center gap-2">
                    <kbd className="font-mono px-2.5 py-1.5 bg-card rounded text-xs font-medium tracking-wide text-foreground/80 shadow-sm border border-border">↑</kbd>
                    <kbd className="font-mono px-2.5 py-1.5 bg-card rounded text-xs font-medium tracking-wide text-foreground/80 shadow-sm border border-border">k</kbd>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium tracking-tight text-foreground/90">Next section</span>
                  <div className="flex items-center gap-2">
                    <kbd className="font-mono px-2.5 py-1.5 bg-card rounded text-xs font-medium tracking-wide text-foreground/80 shadow-sm border border-border">↓</kbd>
                    <kbd className="font-mono px-2.5 py-1.5 bg-card rounded text-xs font-medium tracking-wide text-foreground/80 shadow-sm border border-border">j</kbd>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium tracking-tight text-foreground/90">First section</span>
                  <kbd className="font-mono px-2.5 py-1.5 bg-card rounded text-xs font-medium tracking-wide text-foreground/80 shadow-sm border border-border">Home</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium tracking-tight text-foreground/90">Last section</span>
                  <kbd className="font-mono px-2.5 py-1.5 bg-card rounded text-xs font-medium tracking-wide text-foreground/80 shadow-sm border border-border">End</kbd>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-[15px] leading-relaxed">
              <h5 className="text-sm uppercase tracking-wide font-semibold text-primary mb-2">General</h5>
              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium tracking-tight text-foreground/90">Toggle this dialog</span>
                  <kbd className="font-mono px-2.5 py-1.5 bg-card rounded text-xs font-medium tracking-wide text-foreground/80 shadow-sm border border-border">?</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium tracking-tight text-foreground/90">Close this dialog</span>
                  <kbd className="font-mono px-2.5 py-1.5 bg-card rounded text-xs font-medium tracking-wide text-foreground/80 shadow-sm border border-border">Esc</kbd>
                </div>
              </div>
            </div>

            <div className="text-xs text-muted-foreground mt-4 pt-4 border-t border-primary/10">
              <p>You can also use swipe gestures on touch devices to navigate between sections.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}