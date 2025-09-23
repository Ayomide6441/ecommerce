import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CategoriesFilter from "./CategoriesFilter";
import ColorPicker from "../../components/ui/ColorPicker";
import PriceRangeFilter from "./PriceRangeFilter";
import SizeFilter from "./SizeFilter";

const colorOptions = ["#AFCBFF", "#FFD88D", "#92B69E", "#3B82F6"];

function FilterSection() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize state from URL
  const [categories, setCategories] = useState<string[]>(
    searchParams.get("categories")?.split(",") || []
  );
  const [colors, setColors] = useState<string[]>(
    searchParams.get("color")?.split(",") || []
  );
  const [sizes, setSizes] = useState<string[]>(
    searchParams.get("size")?.split(",") || []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>(() => {
    const min = searchParams.get("minPrice");
    const max = searchParams.get("maxPrice");
    return [min ? Number(min) : 0, max ? Number(max) : 1000];
  });

  // Sync state → URL
  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    categories.length
      ? params.set("categories", categories.join(","))
      : params.delete("categories");

    colors.length
      ? params.set("color", colors.join(","))
      : params.delete("color");

    sizes.length ? params.set("size", sizes.join(",")) : params.delete("size");

    priceRange[0] !== 0 && params.set("minPrice", priceRange[0].toString());
    priceRange[1] !== 1000 && params.set("maxPrice", priceRange[1].toString());

    setSearchParams(params, { replace: true });
  }, [categories, colors, sizes, priceRange, searchParams, setSearchParams]);

  return (
    <div className="border p-5 w-64 flex flex-col gap-10 ">
      <CategoriesFilter onChange={setCategories} urlCategories={categories} />
      <ColorPicker multiple colors={colorOptions} onChange={setColors} />
      <SizeFilter onChange={setSizes} />
      <PriceRangeFilter value={priceRange} onChange={setPriceRange} />
    </div>
  );
}

export default FilterSection;
