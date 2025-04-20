import { useRef, useEffect } from 'react';
import HabitPanel from './HabitPanel';
import { Group } from '@/types';

export default function GroupSection({ group }: { group: Group }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            entry.target.querySelectorAll('.animate-trigger').forEach((child) => {
              child.classList.add('animate-in');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={group.name}
      className="mb-24 last:mb-12"
    >
      <div className="sticky top-0 z-10 py-8 -mx-4 px-4 bg-gradient-to-b from-background via-background/98 to-background/95 backdrop-blur-sm">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-center bg-gradient-to-br from-primary/90 to-primary/70 bg-clip-text text-transparent">
          {group.name}
        </h2>
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
      <div className="mt-12 space-y-6">
        {group.habits.map((h) => (
          <div
            key={h.title}
            className="animate-trigger"
          >
            <HabitPanel habit={h} />
          </div>
        ))}
      </div>
    </section>
  );
}