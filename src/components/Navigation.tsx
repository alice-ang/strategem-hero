import React, { FC } from "react";
import { SheetTrigger } from "./ui/sheet";
import { Constraints } from "./Constraints";
import { Settings } from "lucide-react";

export const Navigation: FC = () => {
  return (
    <Constraints hasPadding>
      <nav className="flex flex-row justify-between items-center">
        <SheetTrigger asChild>
          <button>game</button>
        </SheetTrigger>
        <SheetTrigger asChild>
          <button>
            <Settings />
          </button>
        </SheetTrigger>
      </nav>
    </Constraints>
  );
};
