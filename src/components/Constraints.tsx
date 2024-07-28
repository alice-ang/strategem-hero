import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

export const Constraints: FC<{ children: ReactNode; hasPadding?: boolean }> = ({
  children,
  hasPadding = false,
}) => {
  return (
    <div
      className={cn(
        hasPadding ? "p-4" : "",
        "mx-auto max-w-screen-2xl h-full w-full"
      )}
    >
      {children}
    </div>
  );
};
