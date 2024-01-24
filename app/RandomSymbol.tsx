"use client";

import { useEffect, useState } from "react";

const symbols = ["⦂⦂", "⦿", "⊛", "⊚", "⊙", "⦚", "⟁", "⦂⦚"];

function getRandomSymbol() {
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
}

export function RandomSymbol() {
  const [symbol, setSymbol] = useState(" ");

  useEffect(() => {
    setSymbol(getRandomSymbol());
  }, []);

  return <>{symbol}</>;
}
