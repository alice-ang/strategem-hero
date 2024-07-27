"use client";

import { Constraints, Game, Rounds, Score } from "@/components";

export default function Home() {
  return (
    <Constraints>
      <main className="grid grid-cols-12 gap-4 lg:gap-12 ">
        <div className="col-span-6 lg:col-span-2 order-1">
          <Rounds />
        </div>
        <div className="col-span-12 lg:col-span-8 order-3 lg:order-2">
          <Game />
        </div>
        <div className="col-span-6 lg:col-span-2 flex justify-end order-2 lg:order-3">
          <Score />
        </div>
      </main>
    </Constraints>
  );
}
