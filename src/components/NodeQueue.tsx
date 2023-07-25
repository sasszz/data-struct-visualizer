// NodeQueue.tsx
import React from "react";

interface NodeQueueProps {
  number: number;
  isFront?: boolean;
  isRear?: boolean;
  onClick?: () => void;
}

const NodeQueue: React.FC<NodeQueueProps> = ({
  number,
  isFront = false,
  isRear = false,
  onClick,
}) => {
  const borderStyle = isFront
    ? "border-2 border-green-500"
    : isRear
    ? "border-2 border-red-500"
    : "border-none";

  return (
    <div
      className={`flex items-center justify-center h-14 w-14 rounded-lg ${borderStyle}`}
      onClick={onClick}
    >
      <div
        className={`h-10 w-10 flex items-center justify-center rounded-lg text-white bg-blue-500 ${
          isFront || isRear ? "m-2" : ""
        }`}
      >
        {number}
      </div>
    </div>
  );
};

export default NodeQueue;
