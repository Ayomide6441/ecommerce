import { useState, useEffect } from "react";
import { Text } from "./text";

type CounterProps = {
  onClick: (value: number) => void;
  quantity: number;
};

function ItemCounter({ quantity, onClick }: CounterProps) {
  const [currQuantity, setCurrQuantity] = useState(quantity || 1);

  useEffect(() => {
    onClick(currQuantity);
  }, [currQuantity, onClick]);

  const increase = () => setCurrQuantity((prev) => prev + 1);

  const decrease = () => {
    setCurrQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="border flex md:gap-3 gap-3 items-center justify-between md:py-2 md:px-4 px-1 py-[.5] w-full">
      <button onClick={decrease}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-minus-icon lucide-minus"
        >
          <path d="M5 12h14" />
        </svg>
      </button>
      <Text variant="body-1">{currQuantity}</Text>
      <button onClick={increase}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-plus-icon lucide-plus"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </button>
    </div>
  );
}

export default ItemCounter;
