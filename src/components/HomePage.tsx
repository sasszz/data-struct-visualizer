// HomePage.tsx
import React, { useState } from "react";
import NodeStackGenerator from "./NodeStackGenerator";
import NodeQueueGenerator from "./NodeQueueGenerator";

enum DataStructure {
  Stack = "stack",
  Queue = "queue",
}

const HomePage: React.FC = () => {
  const [selectedStructure, setSelectedStructure] = useState<DataStructure>(
    DataStructure.Stack
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStructure(event.target.value as DataStructure);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold my-6">Data Structure Generator</h1>
      <div className="mb-4">
        <label className="mr-2">Select Data Structure:</label>
        <select
          value={selectedStructure}
          onChange={handleSelectChange}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value={DataStructure.Stack}>Stack</option>
          <option value={DataStructure.Queue}>Queue</option>
        </select>
      </div>
      {selectedStructure === DataStructure.Stack ? (
        <NodeStackGenerator />
      ) : (
        <NodeQueueGenerator />
      )}
    </div>
  );
};

export default HomePage;
