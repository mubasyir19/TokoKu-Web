"use client";

import React, { useState } from "react";

export default function QuantitySelector({ onChange }) {
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      onChange?.(newCount);
      return newCount;
    });
  };

  const minCount = () => {
    setCount((prev) => {
      const newCount = prev > 1 ? prev - 1 : 1;
      onChange?.(newCount);
      return newCount;
    });
  };

  return (
    <div className="flex items-center gap-x-2">
      <button onClick={minCount} className="text-4xl text-[#B3B3B3]">
        -
      </button>
      <p className="rounded-lg border-2 border-[#EDEDED] px-4 py-2 text-lg text-black">
        {count}
      </p>
      <button onClick={addCount} className="text-4xl text-[#FFD600]">
        +
      </button>
    </div>
  );
}
