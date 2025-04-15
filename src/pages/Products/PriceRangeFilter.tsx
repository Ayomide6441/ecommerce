// components/price-range.tsx
"use client";

import * as Slider from "@radix-ui/react-slider";
import { useState, useEffect } from "react";
// import { Label } from "@/components/ui/label";
type Props = {
  onChange: (selected: [number, number]) => void;
};

export default function PriceRangeFilter({ onChange }: Props) {
  const [range, setRange] = useState<[number, number]>([2000, 8000]);
  useEffect(() => {
    // Pass as array to stay consistent with FilterValues type
    onChange(range);
  }, [range, onChange]);

  return (
    <div className="space-y-4 max-w-md w-full">
      <label className="block mb-5 font-medium">Price</label>

      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-6"
        min={500}
        max={10000}
        step={50}
        value={range}
        onValueChange={(value) => setRange(value as [number, number])}
      >
        <Slider.Track className="bg-muted-foreground/20 relative grow rounded-full h-1">
          <Slider.Range className="absolute bg-primary rounded-full h-full" />
        </Slider.Track>

        {range.map((_, i) => (
          <Slider.Thumb
            key={i}
            className="block w-3 h-3 bg-primary rounded-full shadow focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
        ))}
      </Slider.Root>

      <div className="text-sm font-medium">
        <div className="inline-flex items-center space-x-2">
          <span>From:</span>
          <span className="bg-primary text-white text-xs px-2 py-1 rounded">
            ${range[0]}
          </span>
          <span>to</span>
          <span className="bg-primary text-white text-xs px-2 py-1 rounded">
            ${range[1]}
          </span>
        </div>
      </div>
    </div>
  );
}
