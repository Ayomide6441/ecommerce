import { Text } from "@/components/ui/text";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

type SingleProps = {
  sizes: string[];
  multiple?: false;
  onChange: (selected: string) => void;
};

type MultiProps = {
  sizes: string[];
  multiple: true;
  onChange: (selected: string[]) => void;
};

type Props = SingleProps | MultiProps;

export default function SizePicker({ onChange, sizes, multiple }: Props) {
  const [searchParams] = useSearchParams();
  const initial = multiple
    ? searchParams.get("size")?.split(",") ?? []
    : [searchParams.get("size") || ""];

  const [selectedSizes, setSelectedSizes] = useState<string[]>(initial);

  useEffect(() => {
    if (multiple) {
      onChange(selectedSizes);
    } else {
      onChange(selectedSizes[0] || "");
    }
  }, [selectedSizes, multiple, onChange]);

  const toggleSize = (size: string) => {
    if (multiple) {
      setSelectedSizes((prev) =>
        prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
      );
    } else {
      setSelectedSizes([size]);
    }
  };

  return (
    <div className="flex flex-wrap gap-3 gap-y-6">
      {sizes?.map((size) => {
        const isSelected = selectedSizes.includes(size);

        return (
          <label key={size} className="cursor-pointer">
            <input
              type={multiple ? "checkbox" : "radio"}
              name="size"
              value={size}
              checked={isSelected}
              onChange={() => toggleSize(size)}
              className="sr-only"
            />
            <span
              className={`px-3 py-2 text-sm border rounded-md transition flex justify-center
                ${
                  isSelected
                    ? "border-black text-black"
                    : "border-gray-300 text-gray-500"
                }
              `}
            >
              <Text variant="label-2">{size}</Text>
            </span>
          </label>
        );
      })}
    </div>
  );
}
