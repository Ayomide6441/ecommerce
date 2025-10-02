import HeaderBreadCrumb from "@/components/layout/header-breadcrumb";
import FilterSection from "./FilterSection";
import ProductsList from "./ProductsList";

function ProductsLayout() {
  return (
    <>
      <HeaderBreadCrumb
        previous={{ Home: "/" }}
        current="Search"
        className="py-4"
      />
      <div className="container flex gap-10 mt-20 items-start">
        <FilterSection />
        <ProductsList />
      </div>
    </>
  );
}

export default ProductsLayout;
