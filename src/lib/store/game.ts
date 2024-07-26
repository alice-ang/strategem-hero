import { create } from "zustand";

type GameStore = {
  rounds: number;
  setRounds: () => void;
  score: number;
  setScore: (score: number) => void;
};

export const useKeyCode = create<GameStore>()((set) => ({
  rounds: 0,
  setRounds: () => set((state) => ({ rounds: state.rounds + 1 })),
  score: 0,
  setScore: (score: number) => set((state) => ({ score: state.score + score })),
}));
