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
  <div className="transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn">
    <Card className="scroll-panel my-6 bg-white/80 backdrop-blur-sm">
      <h3 className="text-2xl font-semibold mb-6 px-6 pt-6 text-primary">
        {habit.title}
      </h3>

      {habit.categories.map((cat, index) => (
        <Accordion
          key={cat.name}
          type="single"
          collapsible
          className="mb-4 last:mb-0"
        >
          <AccordionItem value="item" className="border-none">
            <AccordionTrigger className="px-6 py-4 hover:bg-accent/10 transition-colors">
              <span className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  {index + 1}
                </span>
                {cat.name}
              </span>
            </AccordionTrigger>

            <AccordionContent className="px-6">
              <Accordion type="multiple" className="space-y-2">
                {cat.principles.map((p) => (
                  <AccordionItem 
                    key={p.name} 
                    value={p.name}
                    className="border rounded-lg overflow-hidden bg-white"
                  >
                    <AccordionTrigger className="px-4 py-3 hover:bg-accent/5">
                      {p.name}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-sm text-muted-foreground border-t bg-accent/5">
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