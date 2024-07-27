"use client";
import { useKeyCode } from "@/lib/store/keys";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";
import {
  ImArrowLeft,
  ImArrowRight,
  ImArrowDown,
  ImArrowUp,
} from "react-icons/im";

import React from "react";
import { KeyCodes } from "@/lib/types";
import { Constraints } from "./Constraints";

export const Game = () => {
  const [isLost, setIsLost] = useState(false);
  const [keys, setKeys] = useState<string[]>([]);
  const { sequence, generateRandomKey } = useKeyCode();

  const checkSequence = useCallback(() => {
    if (keys.length >= sequence.length) {
      setKeys([]);
      generateRandomKey(5);
    }
    // keys.map((key, index) => {
    //   if (sequence[index] !== key) {
    //     setKeys([]);
    //   }
    // });
  }, [keys, sequence, generateRandomKey]);

  const getArrowIcon = (code: string | KeyCodes) => {
    switch (code) {
      case "ArrowUp":
        return <ImArrowUp />;
      case "ArrowDown":
        return <ImArrowDown />;
      case "ArrowLeft":
        return <ImArrowLeft />;
      case "ArrowRight":
        return <ImArrowRight />;
      default:
        return null;
    }
  };

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      switch (event.code) {
        case "ArrowUp":
          setKeys((prevKeys) => [...prevKeys, event.code]);
          break;
        case "ArrowDown":
          setKeys((prevKeys) => [...prevKeys, event.code]);
          break;
        case "ArrowLeft":
          setKeys((prevKeys) => [...prevKeys, event.code]);
          break;
        case "ArrowRight":
          setKeys((prevKeys) => [...prevKeys, event.code]);
          break;
        default:
          setKeys([]);
      }
      checkSequence();
    },
    [checkSequence]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    generateRandomKey(5);
  }, [generateRandomKey]);

  return (
    <Constraints>
      <section className=" h-full w-full flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center w-full space-y-10">
          <div className="bg-primary w-full">
            <h2 className="text-center text-background text-3xl uppercase">
              Strategem name
            </h2>
          </div>
          <div className="flex gap-4 text-6xl relative text-grey">
            {sequence.map((key, index) => (
              <span key={index}>{getArrowIcon(key)}</span>
            ))}
            <div
              className={cn(
                isLost ? "text-red-500" : "text-primary",
                "text-6xl flex gap-4 absolute bottom-0"
              )}
            >
              {keys.map((key, index) => (
                <span key={index}>{getArrowIcon(key)}</span>
              ))}
            </div>
          </div>
          <div className="bg-primary w-full">
            <h2 className="text-center text-3xl uppercase">-</h2>
          </div>
        </div>
      </section>
    </Constraints>
  );
};
