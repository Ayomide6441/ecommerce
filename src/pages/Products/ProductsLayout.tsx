import HeaderBreadCrumb from "@/components/ui/HeaderBreadCrumb";
import FilterSection from "./FilterSection";
import ProductsList from "./ProductsList";

function ProductsLayout() {
  return (
    <>
      <HeaderBreadCrumb
        previous={{
          Home: "/",
        }}
        current="Search"
        route="Products"
      />
      <div className="container flex gap-5 mt-20">
        <FilterSection />
        <ProductsList />
      </div>
    </>
  );
}
export default ProductsLayout;
