import React, { FC, ReactNode } from "react";

export const Constraints: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-2xl h-full p-4  w-full">
      {children}
    </div>
  );
};
