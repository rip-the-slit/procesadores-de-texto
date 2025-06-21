'use client';

import { useEffect, useRef, useState } from 'react';
import { Bot, CornerDownLeft, Loader2, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { provideSimpleExplanation } from '@/ai/flows/provide-simple-explanations';
import { generateQuestionPrompts } from '@/ai/flows/generate-question-prompts';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AiCompanion({ topicName, topicContent }: { topicName: string; topicContent: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    setMessages([
        { role: 'assistant', content: `¡Hola! Soy tu ayudante de IA. Estoy aquí para explicarte cosas sobre "${topicName}".` }
    ]);
  }, [topicName]);

  useEffect(() => {
    // Auto-scroll to bottom
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if(viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);
  
  const handleAiCall = async (call: () => Promise<any>, userMessage: string, processResult: (result: any) => string) => {
    if (isLoading) return;
    setIsLoading(true);
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    
    try {
      const result = await call();
      const assistantMessage = processResult(result);
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error(error);
      toast({ variant: 'destructive', title: 'Oh no!', description: 'Hubo un error con la IA. Inténtalo de nuevo.' });
      setMessages(prev => prev.slice(0, -1)); // Remove user message on error
    } finally {
      setIsLoading(false);
    }
  };

  const handleSimpleExplanation = () => handleAiCall(
    () => provideSimpleExplanation({ topic: topicName }),
    `Explícame qué es "${topicName}" de forma sencilla.`,
    (result) => result.explanation
  );

  const handleGenerateQuestions = () => handleAiCall(
    () => generateQuestionPrompts({ topic: topicName, content: topicContent }),
    `Dame algunas preguntas interesantes sobre "${topicName}".`,
    (result) => `¡Claro! Aquí tienes algunas preguntas para que pienses:\n\n- ${result.questions.join('\n\n- ')}`
  );
  
  const handleCustomQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const question = input;
    setInput('');
    
    await handleAiCall(
      () => provideSimpleExplanation({ topic: question }),
      question,
      (result) => result.explanation
    );
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="text-center">
        <Avatar className="mx-auto h-16 w-16 mb-2">
            <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="friendly robot" />
            <AvatarFallback><Bot /></AvatarFallback>
        </Avatar>
        <CardTitle className="font-headline">Tu Ayudante IA</CardTitle>
        <CardDescription>¿Tienes alguna duda?</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col h-[65vh]">
        <ScrollArea className="flex-1 mb-4 border rounded-md p-4" ref={scrollAreaRef}>
          <div className="flex flex-col gap-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn('flex items-start gap-3', msg.role === 'user' ? 'justify-end' : 'justify-start')}
              >
                {msg.role === 'assistant' && (
                  <Avatar className="h-8 w-8">
                     <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="friendly robot" />
                     <AvatarFallback><Bot /></AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    'max-w-xs rounded-lg px-4 py-2 text-sm whitespace-pre-wrap',
                    'bg-muted'
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex items-start gap-3 justify-start">
                   <Avatar className="h-8 w-8">
                     <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="friendly robot" />
                     <AvatarFallback><Bot /></AvatarFallback>
                  </Avatar>
                  <div className="bg-muted px-4 py-2 rounded-lg flex items-center">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
               </div>
            )}
          </div>
        </ScrollArea>
        <div className="flex flex-col gap-2 mb-4">
             <Button variant="outline" onClick={handleSimpleExplanation} disabled={isLoading}>Explícamelo de forma sencilla</Button>
             <Button variant="outline" onClick={handleGenerateQuestions} disabled={isLoading}>
                <Sparkles className="mr-2 h-4 w-4 text-accent"/>
                Preguntas para pensar
            </Button>
        </div>
        <form onSubmit={handleCustomQuestion} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Haz una pregunta..."
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
