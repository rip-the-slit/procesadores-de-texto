import Header from '@/components/Header';
import TopicCard from '@/components/TopicCard';
import { topics } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary-foreground bg-primary/80 rounded-lg py-2 px-4 inline-block shadow-lg">
            ¡Explora el Mundo de las Palabras!
          </h1>
          <p className="text-lg md:text-xl mt-4 text-foreground/80 max-w-2xl mx-auto">
            Aprende a usar los procesadores de texto de una forma divertida y fácil. ¡Elige un tema para empezar tu aventura!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-sm">
        Hecho con ❤️ para pequeños exploradores digitales.
      </footer>
    </div>
  );
}
