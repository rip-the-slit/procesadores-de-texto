"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Award } from 'lucide-react';

interface GameState {
  points: number;
  addPoints: (amount: number) => void;
  badges: string[];
  addBadge: (badge: string) => void;
}

const GameContext = createContext<GameState | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);
  const { toast } = useToast();

  const addPoints = useCallback((amount: number) => {
    setPoints(prevPoints => prevPoints + amount);
  }, []);
  
  const addBadge = useCallback((badgeTitle: string) => {
    if (!badges.includes(badgeTitle)) {
      setBadges(prevBadges => [...prevBadges, badgeTitle]);
      toast({
        title: "¡Nueva Insignia Desbloqueada!",
        description: `¡Felicidades! Has ganado la insignia "${badgeTitle}".`,
        action: <Award className="text-yellow-400" />,
      })
    }
  }, [badges, toast]);

  return (
    <GameContext.Provider value={{ points, addPoints, badges, addBadge }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
