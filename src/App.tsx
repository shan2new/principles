import Header from '@/components/Header';
import GroupSection from '@/components/GroupSection';
import Progress from '@/components/Progress';
import { groups } from '@/data/habits';

function App() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <Header />
      <main className="max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto px-6 pb-20">
        {groups.map((g) => (
          <GroupSection key={g.name} group={g} />
        ))}
      </main>
      <Progress />
    </div>
  );
}

export default App;