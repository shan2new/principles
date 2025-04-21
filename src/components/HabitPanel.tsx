import { useState } from 'react';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Habit } from '@/types';
import { ChevronRightIcon } from 'lucide-react';

interface Props {
  habit: Habit;
}

const HabitPanel = ({ habit }: Props) => {
  const [expandedPrinciple, setExpandedPrinciple] = useState<string | null>(null);

  return (
    <div className="group">
      <Card className="scroll-panel pb-6 bg-card shadow-md hover:shadow-lg transition-all duration-300 border-primary/10">
        {/* Title with decorative elements */}
        <div className="relative mb-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/20 opacity-50" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight py-6 px-6 gradient-heading">
            {habit.title}
          </h3>
        </div>

        <div className="space-y-3 px-3">
          {habit.categories.map((cat, index) => (
            <Accordion
              key={cat.name}
              type="single"
              collapsible
              className="mb-3 last:mb-0"
            >
              <AccordionItem value={cat.name} className="border-none">
                <AccordionTrigger 
                  className="px-6 py-4 glass-effect bg-opacity-90 hover:bg-opacity-100 text-foreground transition-all rounded-lg group"
                >
                  <span className="flex items-center gap-4 text-left">
                    <span className="font-mono w-9 h-9 flex items-center justify-center rounded-full bg-primary/20 text-primary font-semibold text-sm tracking-wide group-hover:bg-primary/30 transition-colors">
                      {index + 1}
                    </span>
                    <span className="font-display text-lg font-medium tracking-tight text-foreground">{cat.name}</span>
                  </span>
                </AccordionTrigger>

                <AccordionContent className="px-4 pt-3 pb-2 rounded-lg bg-card/50 backdrop-blur-sm">
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-2">
                    {cat.principles.map((p) => (
                      <div
                        key={p.name}
                        className={`rounded-lg overflow-hidden border border-border/30 hover:border-primary/30 bg-card/50 transition-all duration-300 ${
                          expandedPrinciple === p.name ? 'ring-2 ring-primary/30' : ''
                        }`}
                        onClick={() => setExpandedPrinciple(
                          expandedPrinciple === p.name ? null : p.name
                        )}
                      >
                        <div className="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-accent/5">
                          <h4 className="font-display text-base font-medium tracking-tight text-foreground">{p.name}</h4>
                          <ChevronRightIcon 
                            className={`h-4 w-4 text-primary/70 transition-transform ${
                              expandedPrinciple === p.name ? 'rotate-90' : ''
                            }`}
                          />
                        </div>
                        
                        <div 
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            expandedPrinciple === p.name 
                              ? 'max-h-24 opacity-100' 
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="px-4 py-3 text-[15px] leading-relaxed text-foreground/80 border-t border-border/30 font-normal tracking-wide bg-accent/10">
                            {p.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default HabitPanel;