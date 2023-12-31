// NodeStackGenerator.tsx
import React, { useState } from "react";
import NodeStack from "./NodeStack";

const NodeStackGenerator: React.FC = () => {
  const initialNumbers: number[] = [10, 20, 30, 40, 50];
  const [numbers, setNumbers] = useState<number[]>(initialNumbers);
  const [currentNumber, setCurrentNumber] = useState<number | "">("");
  const [removeIndex, setRemoveIndex] = useState<number | "">("");

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumber = parseInt(event.target.value, 10);
    setCurrentNumber(isNaN(inputNumber) ? "" : inputNumber);
  };

  const handleAddNumber = () => {
    if (currentNumber !== "") {
      setNumbers((prevNumbers) => [...prevNumbers, currentNumber]);
      setCurrentNumber("");
    }
  };

  const handleRemoveNumber = () => {
    if (numbers.length > 0) {
      setNumbers((prevNumbers) => prevNumbers.slice(0, -1));
    }
    setRemoveIndex("");
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="mb-4">
        <input
          type="number"
          value={currentNumber}
          onChange={handleNumberChange}
          placeholder="Enter a number"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleAddNumber}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Add Number
        </button>
        {numbers.length > 0 && (
          <button
            onClick={handleRemoveNumber}
            className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Remove
          </button>
        )}
      </div>
      <div className="flex flex-col gap-4">
        {numbers
          .slice()
          .reverse()
          .map((number, index) => (
            <NodeStack
              key={index}
              number={number}
              isFront={index === numbers.length - 1}
              isRear={index === 0}
            />
          ))}
      </div>
    </div>
  );
};

export default NodeStackGenerator;
