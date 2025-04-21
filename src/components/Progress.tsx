import { useState, useEffect } from 'react';
import { useScrollHandler } from '@/lib/useScrollHandler';
import { groups } from '@/data/habits';

export default function Progress() {
  const [progress, setProgress] = useState(0);
  const [sectionProgress, setSectionProgress] = useState<{[key: string]: number}>({});
  const [currentSection, setCurrentSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Track overall scroll progress
  useScrollHandler(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = Math.min(100, (scrollTop / (documentHeight - windowHeight)) * 100);
    
    setProgress(scrollPercent);
    setIsVisible(scrollTop > 100);
    
    // Track progress within each section
    const sections = groups.map(g => g.name);
    let currentSectionId = '';
    
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const sectionTop = rect.top + scrollTop;
      const sectionHeight = rect.height;
      const sectionBottom = sectionTop + sectionHeight;
      
      // Calculate how far through this section we've scrolled
      let sectionScrollPercent = 0;
      
      if (scrollTop >= sectionBottom) {
        // We're past this section
        sectionScrollPercent = 100;
      } else if (scrollTop <= sectionTop) {
        // We haven't reached this section yet
        sectionScrollPercent = 0;
      } else {
        // We're in this section
        sectionScrollPercent = ((scrollTop - sectionTop) / sectionHeight) * 100;
        currentSectionId = sectionId;
      }
      
      setSectionProgress(prev => ({
        ...prev,
        [sectionId]: sectionScrollPercent
      }));
    });
    
    if (currentSectionId) {
      setCurrentSection(currentSectionId);
    }
  });

  // Don't show progress indicator at the very top of the page
  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 flex">
      {/* Main progress bar */}
      <div 
        className="h-full bg-primary shadow-sm transition-all duration-150 ease-out motion-safe:duration-300"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
      
      {/* Section markers */}
      <div className="absolute inset-0 flex items-center">
        {groups.map((group, index) => {
          const position = (index / (groups.length - 1)) * 100;
          const isCurrent = currentSection === group.name;
          
          return (
            <div 
              key={group.name}
              className={`absolute w-1.5 h-4 -mt-1.5 transition-all duration-300 ${
                isCurrent ? 'bg-primary scale-y-100' : 'bg-primary/40 scale-y-75'
              } rounded-full`}
              style={{
                left: `${position}%`,
                transform: `translateX(-50%) scaleY(${isCurrent ? 1 : 0.75})`,
              }}
              title={group.name}
            />
          );
        })}
      </div>
    </div>
  );
}