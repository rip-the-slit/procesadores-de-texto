"use client";

import { GameProvider } from '@/contexts/GameContext';
import { Toaster } from '@/components/ui/toaster';
import type { ReactNode } from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider>
      <GameProvider>
        {children}
        <Toaster />
      </GameProvider>
    </TooltipProvider>
  );
}
