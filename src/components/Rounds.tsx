"use client";
import { useGameStore } from "@/lib/store/game";
import React, { FC } from "react";

export const Rounds: FC = () => {
  const { rounds } = useGameStore();
  return (
    <div className="w-fit">
      <h2 className="text-5xl ">Rounds</h2>
      <h2 className="text-5xl text-primary">{rounds}</h2>
    </div>
  );
};
