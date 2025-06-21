'use client';

import React, { useState } from 'react';
import type { Topic } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookCheck, Volume2 } from 'lucide-react';
import AiCompanion from '@/components/AiCompanion';
import Quiz from '@/components/Quiz';
import { useGame } from '@/contexts/GameContext';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function TopicClientPage({ topic }: { topic: Omit<Topic, 'Icon'> }) {
  const [view, setView] = useState<'topic' | 'quiz' | 'results'>('topic');
  const [score, setScore] = useState(0);
  const { addPoints, addBadge } = useGame();

  const handleQuizComplete = (finalScore: number) => {
    setScore(finalScore);
    const pointsToAdd = finalScore * 10;
    addPoints(pointsToAdd);
    if (finalScore === topic.quiz.length) {
      addBadge(`Maestro de ${topic.title}`);
    }
    setView('results');
  };
  
  const handleReadAloud = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      window.speechSynthesis.cancel(); // Stop any previous speech
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Tu navegador no soporta la lectura en voz alta.');
    }
  }

  if (view === 'quiz') {
    return <Quiz topic={topic} onComplete={handleQuizComplete} />;
  }

  if (view === 'results') {
    return (
      <div className="container mx-auto p-4 md:p-8 flex flex-col items-center justify-center text-center flex-grow">
        <Card className="w-full max-w-lg p-8 shadow-2xl">
          <CardContent>
            <BookCheck className="h-20 w-20 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold font-headline mb-2">¡Completado!</h1>
            <p className="text-lg mb-4">
              Tu puntuación: {score} de {topic.quiz.length}
            </p>
            <p className="text-xl font-bold text-primary mb-6">
              ¡Has ganado {score * 10} puntos!
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => setView('topic')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Repasar el tema
              </Button>
              <Button asChild>
                <Link href="/">Volver al inicio</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const fullTopicContentForAI = topic.sections.map(s => `${s.title}\n${s.content}`).join('\n\n');

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold font-headline mb-2 text-primary">{topic.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{topic.description}</p>

          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {topic.sections.map((section, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-xl font-semibold">{section.title}</AccordionTrigger>
                <AccordionContent className="prose max-w-none text-base p-4">
                  <Button onClick={() => handleReadAloud(`${section.title}. ${section.content}`)} variant="ghost" size="sm" className="mb-4">
                    <Volume2 className="mr-2 h-4 w-4" />
                    Leer en voz alta
                  </Button>
                  <p>{section.content}</p>
                  {section.image && (
                    <div className="my-4 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={section.image}
                        alt={section.title}
                        width={600}
                        height={400}
                        className="object-cover w-full"
                        data-ai-hint={section.imageHint || ''}
                      />
                    </div>
                  )}
                  {section.video && (
                     <div className="aspect-w-16 aspect-h-9 my-4">
                        <iframe
                            className="w-full h-full rounded-lg shadow-lg"
                            src={section.video}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            <Button size="lg" onClick={() => setView('quiz')} className="bg-accent text-accent-foreground hover:bg-accent/90">
              ¡Prueba tus conocimientos!
            </Button>
          </div>
        </div>
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <AiCompanion topicName={topic.title} topicContent={fullTopicContentForAI} />
          </div>
        </aside>
      </div>
    </div>
  );
}
