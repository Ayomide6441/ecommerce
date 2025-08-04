import { useState } from "react";
import HeaderBreadCrumb from "@/components/ui/HeaderBreadCrumb";
import FilterSection from "./FilterSection";
import ProductsList from "./ProductsList";

// Define the type for the filters state
type FilterValues = {
  categories: string[];
  colors: string[];
  sizes: string[];
  priceRange: [number, number];
};

function ProductsLayout() {
  // Use the correct type for filters state
  const [filters, setFilters] = useState<FilterValues | null>(null);
  return (
    <>
      <HeaderBreadCrumb
        previous={{ Home: "/" }}
        current="Search"
        route="Products"
      />
      <div className="container flex gap-10 mt-20 items-start">
        <FilterSection onFilterChange={setFilters} />
        <ProductsList filters={filters} />
      </div>
    </>
  );
}

export default ProductsLayout;
