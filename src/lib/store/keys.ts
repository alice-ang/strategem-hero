import { create } from "zustand";
import { KeyCodes } from "../types";

type KeyCodeStore = {
  sequence: KeyCodes[];
  generateRandomKey: (length: number) => void;
};

export const useKeyCode = create<KeyCodeStore>()((set) => ({
  sequence: [],
  generateRandomKey: (length: number) => {
    const keyCodes = Object.values(KeyCodes);
    const randomSequence: KeyCodes[] = [];

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * keyCodes.length);
      randomSequence.push(keyCodes[randomIndex] as KeyCodes);
    }

    set(() => ({ sequence: randomSequence }));
  },
}));
