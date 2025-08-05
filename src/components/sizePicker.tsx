import { Text } from "@/components/ui/text";
import { useState, useEffect } from "react";

type Props = {
  sizes: string[];
  onChange: (selected: string[]) => void;
};
export default function SizePicker({ onChange, sizes }: Props) {
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    onChange(selectedSize ? [selectedSize] : []);
  }, [selectedSize, onChange]);

  return (
    <div>
      <div className="flex flex-wrap gap-3 gap-y-6">
        {sizes?.map((size) => (
          <label key={size} className="cursor-pointer">
            <input
              type="radio"
              name="size"
              value={size}
              checked={selectedSize === size}
              onChange={() => setSelectedSize(size)}
              className="sr-only"
            />
            <span
              className={`px-3 py- text-sm border rounded-md transition flex justify-center
                ${
                  selectedSize === size
                    ? "border-black text-black"
                    : "border-gray-300 text-gray-500"
                }
              `}
            >
              <Text variant="label-2" className="inline-block">
                {size}
              </Text>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
