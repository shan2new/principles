import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Habit } from '@/types';

interface Props {
  habit: Habit;
}

const HabitPanel = ({ habit }: Props) => (
  <div className="group">
    <Card className="scroll-panel my-6 pb-6 bg-card shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-2xl font-semibold mb-6 px-6 pt-6 text-foreground">
        {habit.title}
      </h3>

      {habit.categories.map((cat, index) => (
        <Accordion
          key={cat.name}
          type="single"
          collapsible
          className="mb-2 mx-2 last:mb-0"
        >
          <AccordionItem value={cat.name} className="border-none">
            <AccordionTrigger 
              className="px-6 py-4 bg-white text-primary-foreground hover:bg-primary/80 transition-colors rounded-lg"
            >
              <span className="flex items-center gap-4 text-left">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 text-primary font-medium text-sm">
                  {index + 1}
                </span>
                <span className="text-base font-medium text-primary/60">{cat.name}</span>
              </span>
            </AccordionTrigger>

            <AccordionContent className="px-6 pt-2 pb-4 bg-secondary/5 rounded-b-lg">
              <Accordion type="multiple" className="space-y-2">
                {cat.principles.map((p) => (
                  <AccordionItem 
                    key={p.name} 
                    value={p.name}
                    className="rounded-lg overflow-hidden bg-accent/10 border-accent/30 hover:border-accent/50 transition-colors"
                  >
                    <AccordionTrigger className="px-4 py-3 bg-accent/10 hover:bg-accent/80 text-foreground transition-colors">
                      <span className="text-base font-medium text-primary/40">{p.name}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-base leading-relaxed text-foreground/80 bg-accent/20 border-t border-accent/30 rounded-b-lg">
                      {p.desc}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </Card>
  </div>
);

export default HabitPanel;