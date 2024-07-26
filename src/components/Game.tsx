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

export const Game = () => {
  const [keys, setKeys] = useState<string[]>([]);
  const { sequence, generateRandomKey } = useKeyCode();

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

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
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
  }, []);

  useEffect(() => {
    if (keys.length >= sequence.length) {
      setKeys([]);
    }
    keys.map((key, index) => {
      if (sequence[index] !== key) {
        setKeys([]);
      }
    });
  }, [keys, sequence]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
  return (
    <section className=" h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex gap-2 text-4xl relative">
        {sequence.map((key, index) => getArrowIcon(key))}
        <div className="text-4xl flex gap-2 text-primary absolute bottom-0">
          {keys.map((key, index) => getArrowIcon(key))}
        </div>
      </div>

      <button onClick={() => generateRandomKey(5)}>Generate</button>
    </section>
  );
};
