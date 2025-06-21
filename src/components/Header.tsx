'use client';

import Link from 'next/link';
import { BookOpenCheck, Star } from 'lucide-react';
import { useGame } from '@/contexts/GameContext';
import { Badge } from './ui/badge';

export default function Header() {
  const { points } = useGame();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <BookOpenCheck className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline text-primary">
            Procesadores de Texto
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="text-base px-4 py-2 border-2 border-yellow-400 shadow-md">
            <Star className="h-5 w-5 mr-2 text-yellow-500" />
            <span className="font-bold">{points}</span>
            <span className="ml-1 hidden sm:inline">Puntos</span>
          </Badge>
        </div>
      </div>
    </header>
  );
}
