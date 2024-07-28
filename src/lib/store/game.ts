import { create } from "zustand";
import { StratagemItem, stratagems } from "../types";

type GameStore = {
  rounds: number;
  increaseRound: () => void;
  resetGame: () => void;
  score: number;
  setScore: (score: number) => void;
  record: number;
  setRecord: (newRecord: number) => void;
  generateRandomStratagems: (numOfStrats: number) => void;
  stratagemSequence: StratagemItem[];
};

export const useGameStore = create<GameStore>()((set) => ({
  rounds: 0,
  score: 0,
  record: 0,
  stratagemSequence: [],
  resetGame: () => {
    set({ score: 0 });
    set({ rounds: 0 });
  },
  increaseRound: () => set((state) => ({ rounds: state.rounds + 1 })),
  setRecord: (newRecord: number) => set(() => ({ record: newRecord })),
  setScore: (score: number) => set((state) => ({ score: state.score + score })),
  generateRandomStratagems: (numOfStrats: number) => {
    const randomStratagems: StratagemItem[] = [];
    const allStratagems: StratagemItem[] = stratagems.flatMap(
      (category) => category.stratagems
    );
    const stratagemsCount = allStratagems.length;

    for (let i = 0; i < numOfStrats; i++) {
      const randomIndex = Math.floor(Math.random() * stratagemsCount);
      randomStratagems.push(allStratagems[randomIndex]);
    }

    set(() => ({ stratagemSequence: randomStratagems }));
  },
}));
