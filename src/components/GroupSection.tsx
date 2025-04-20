import HabitPanel from './HabitPanel';
import { Group } from '@/types';
import { motion } from 'framer-motion';

export default function GroupSection({ group }: { group: Group }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-12 last:mb-0"
    >
      <div className="sticky top-0 z-10 py-4 bg-[#F7E7CE]/80 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-center">
          {group.name}
        </h2>
      </div>
      <div className="mt-8">
        {group.habits.map((h) => (
          <HabitPanel key={h.title} habit={h} />
        ))}
      </div>
    </motion.section>
  );
}