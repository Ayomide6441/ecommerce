import { useEffect, useState } from "react";
import CategoriesFilter from "./CategoriesFilter";
import ColorFilter from "./ColorFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import SizeFilter from "./SizeFilter";

type FilterValues = {
  categories: string[];
  colors: string[];
  sizes: string[];
  priceRange: [number, number];
};

type Props = {
  onFilterChange: (filters: FilterValues) => void;
};

function FilterSection({ onFilterChange }: Props) {
  const [categories, setCategories] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  // Watch for changes and notify parent
  useEffect(() => {
    onFilterChange({
      categories,
      colors,
      sizes,
      priceRange,
    });
  }, [categories, colors, sizes, priceRange, onFilterChange]);
  return (
    <div className="border p-5 w-64 flex flex-col gap-10 ">
      <CategoriesFilter onChange={setCategories} />
      <ColorFilter onChange={setColors} />
      <SizeFilter onChange={setSizes} />
      <PriceRangeFilter onChange={setPriceRange} />
    </div>
  );
}

export default FilterSection;
