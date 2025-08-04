import { useState, useEffect } from "react";

type Props = {
  colors: string[];
  onChange: (selected: string[]) => void;
};

export default function ColorPicker({ colors, onChange }: Props) {
  const [selectedColor, setSelectedColor] = useState<string>("");

  useEffect(() => {
    onChange(selectedColor ? [selectedColor] : []);
  }, [selectedColor, onChange]);

  return (
    <div className="flex gap-4">
      {colors.map((color) => (
        <label
          key={color}
          className="relative flex items-center justify-center cursor-pointer"
        >
          <input
            type="radio"
            name="color"
            value={color}
            checked={selectedColor === color}
            onChange={() => setSelectedColor(color)}
            className="sr-only"
          />
          <span
            className="w-6 h-6 rounded-full border-2 border-transparent"
            style={{ backgroundColor: color }}
          ></span>
          {selectedColor === color && (
            <span className="absolute w-8 h-8 rounded-full border border-black pointer-events-none"></span>
          )}
        </label>
      ))}
    </div>
  );
}
