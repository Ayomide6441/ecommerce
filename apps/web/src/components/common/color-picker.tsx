import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

type SingleProps = {
  colors: string[];
  multiple?: false;
  onChange: (selected: string) => void;
};

type MultiProps = {
  colors: string[];
  multiple: true;
  onChange: (selected: string[]) => void;
};

type Props = SingleProps | MultiProps;

export default function ColorPicker({ colors, onChange, multiple }: Props) {
  const [searchParams] = useSearchParams();
  const [selectedColors, setSelectedColors] = useState<string[]>(
    searchParams.get("color")?.split(",") || []
  );

  useEffect(() => {
    if (multiple) {
      onChange(selectedColors);
    } else {
      onChange(selectedColors[0] || "");
    }
  }, [selectedColors, multiple, onChange]);

  const toggleColor = (color: string) => {
    if (multiple) {
      setSelectedColors((prev) =>
        prev.includes(color)
          ? prev.filter((c) => c !== color)
          : [...prev, color]
      );
    } else {
      setSelectedColors([color]);
    }
  };

  return (
    <div className="flex gap-4 flex-wrap">
      {colors.map((color) => {
        const isSelected = selectedColors.includes(color);
        return (
          <button
            key={color}
            type="button"
            onClick={() => toggleColor(color)}
            className={`w-7 h-7 rounded-full transition 
              ${
                isSelected
                  ? "outline-solid outline-1 outline-offset-2 outline-black"
                  : "border-gray-300"
              }
            `}
            style={{ backgroundColor: color }}
          />
        );
      })}
    </div>
  );
}
