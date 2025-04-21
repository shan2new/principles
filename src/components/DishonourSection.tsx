import { useRef, useEffect, useState } from 'react';
import DishonourPanel from './DishonourPanel';
import { Group } from '@/types';

export default function DishonourSection({ group }: { group: Group }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Create a distorted entry animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            
            // Apply staggered animations with slight distortion
            entry.target.querySelectorAll('.animate-trigger').forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-in');
                
                // Add subtle random rotation
                const el = child as HTMLElement;
                const randomRotate = (Math.random() * 2 - 1) * 1.5;
                el.style.transform = `rotateZ(${randomRotate}deg)`;
              }, 150 * (index + 1));
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={group.name}
      className="mb-28 last:mb-16 scroll-mt-8"
    >
      <div className="sticky top-0 z-10 py-6 -mx-4 px-4 bg-background/90 backdrop-blur-md border-b border-destructive/20">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <div className="py-2">
            <h2 className={`font-display text-3xl sm:text-4xl font-bold tracking-tight text-center text-destructive/90 transform transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {group.name}
            </h2>
          </div>
        </div>
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-destructive/20 to-transparent" />
      </div>
      
      <div className="mt-12 space-y-8">
        {group.habits.map((habit, index) => (
          <div
            key={habit.title}
            className="animate-trigger opacity-0 translate-y-6"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <DishonourPanel habit={habit} />
          </div>
        ))}
      </div>
      
      {/* Visual separator between sections */}
      <div className="mt-16 flex justify-center">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-destructive/30 to-transparent"></div>
      </div>
    </section>
  );
}