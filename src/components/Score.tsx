"use client";
import { useGameStore } from "@/lib/store/game";
import React, { FC } from "react";

export const Score: FC = () => {
  const { score } = useGameStore();
  return (
    <div className="flex flex-col items-end w-fit">
      <h2 className="text-5xl text-primary">{score}</h2>
      <h2 className="text-5xl ">Score</h2>
    </div>
  );
};
