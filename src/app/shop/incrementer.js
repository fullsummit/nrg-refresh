"use client";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function AddItems() {
  const [count, setCount] = useState(0);
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const increment = () => {
    if (count >= 100) return;
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

const setManually = (value) => {
    if (value >= 100) return;
    if (isNaN(value)) return;
    setCount(Number(value));
};

  return (
    <div className="flex flex-col items-start justify-start gap-2">
      <div className="flex gap-4 items-start justify-start text-xl my-6">
        {!showInput ? (
          <>
            <button
              className="rounded-full p-2 text-white h-8 w-8 flex items-center justify-center"
              onClick={decrement}
            >
              -
            </button>
            <button
              onClick={toggleInput}
              className="flex w-8 items-center justify-center"
            >
              {" "}
              {count || 0}
            </button>
            <button
              className="rounded-full p-2 text-black bg-white h-8 w-8 flex items-center justify-center"
              onClick={increment}
            >
              +
            </button>
          </>
        ) : (
            <>
          <input
            type="text"
            value={count}
            onChange={(e) => setManually(e.target.value)}
            className="w-8 text-center bg-transparent border-b border-b-whiet pb-1"
          />
          <button onClick={toggleInput} className="text-white"><FontAwesomeIcon icon={faCheckCircle} /></button>
          </>
        )}

        <span className="font-light">cases</span>
      </div>
      <span className="text-sm font-light">24 cans p/ case. Max 100 cases per customer.</span>
      <hr className="my-4 border-white border-b w-1/2"/>
      <span className="font-extrabold">
        Tax:{" "}
        <span className="font-light">Calculated at checkout</span>
      </span>
      <span className="font-extrabold">
        Total:{" "}
        <span className="font-light">${(count * 14.99).toLocaleString()}</span>
      </span>
    </div>
  );
}
