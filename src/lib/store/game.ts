import { create } from "zustand";

type GameStore = {
  rounds: number;
  increaseRound: () => void;
  resetGame: () => void;
  score: number;
  setScore: (score: number) => void;
  record: number;
  setRecord: (newRecord: number) => void;
};

export const useGameStore = create<GameStore>()((set) => ({
  rounds: 0,
  score: 0,
  record: 0,
  resetGame: () => {
    set({ score: 0 });
    set({ rounds: 0 });
  },
  increaseRound: () => set((state) => ({ rounds: state.rounds + 1 })),
  setRecord: (newRecord: number) => set(() => ({ record: newRecord })),
  setScore: (score: number) => set((state) => ({ score: state.score + score })),
}));
