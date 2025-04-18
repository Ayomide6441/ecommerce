import { Text } from "@/components/ui/text";
import { useState, useEffect } from "react";

const sizes = ["S", "M", "L", "XL", "XXL"];
type Props = {
  onChange: (selected: string[]) => void;
};
export default function SizeFilter({ onChange }: Props) {
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    onChange(selectedSize ? [selectedSize] : []);
  }, [selectedSize, onChange]);

  return (
    <div>
      <label className="block mb-5 font-medium">Size</label>
      <div className="flex flex-wrap gap-3 gap-y-6">
        {sizes.map((size) => (
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
              className={`px-4 py-2 text-sm border rounded-md transition
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
