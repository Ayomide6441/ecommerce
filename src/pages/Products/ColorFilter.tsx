import { useState, useEffect } from "react";

const colors = [
  { id: "blue", value: "#AFCBFF" },
  { id: "yellow", value: "#FFD88D" },
  { id: "green", value: "#92B69E" },
  { id: "brightBlue", value: "#3B82F6" },
];

type Props = {
  onChange: (selected: string[]) => void;
};

export default function ColorFilter({ onChange }: Props) {
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    onChange(selectedColor ? [selectedColor] : []);
  }, [selectedColor, onChange]);

  return (
    <div>
      <label className="block mb-5 font-medium">Color</label>
      <div className="flex gap-4">
        {colors.map((color) => (
          <label
            key={color.id}
            className="relative flex items-center justify-center cursor-pointer"
          >
            <input
              type="radio"
              name="color"
              value={color.id}
              checked={selectedColor === color.id}
              onChange={() => setSelectedColor(color.id)}
              className="sr-only"
            />
            <span
              className="w-6 h-6 rounded-full border-2 border-transparent"
              style={{ backgroundColor: color.value }}
            ></span>
            {selectedColor === color.id && (
              <span className="absolute w-8 h-8 rounded-full border border-black pointer-events-none"></span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}
