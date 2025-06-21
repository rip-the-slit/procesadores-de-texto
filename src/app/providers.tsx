"use client";

import { GameProvider } from '@/contexts/GameContext';
import { Toaster } from '@/components/ui/toaster';
import type { ReactNode } from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';
import FloatingStars from '@/components/FloatingStars';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider>
      <GameProvider>
        <FloatingStars />
        {children}
        <Toaster />
      </GameProvider>
    </TooltipProvider>
  );
}
