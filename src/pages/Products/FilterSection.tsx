import CategoriesFilter from "./CategoriesFilter";
import ColorFilter from "./ColorFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import SizeFilter from "./SizeFilter";

function FilterSection() {
  return (
    <div className="border p-5 w-64 flex flex-col gap-10">
      <CategoriesFilter />
      <ColorFilter />
      <SizeFilter />
      <PriceRangeFilter />
    </div>
  );
}

export default FilterSection;
