import { useParams } from "react-router-dom";
import HeaderBreadCrumb from "@/components/ui/HeaderBreadCrumb";
import { useProductDetail } from "@/Hooks/useProducts";

function Product() {
  const { productId } = useParams();
  const { data: product, isLoading } = useProductDetail(productId);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <HeaderBreadCrumb previous={{ Home: "/" }} current="Search" />
      <div className="container flex gap-10 mt-20 items-start ">
        This is just a test and product {JSON.stringify(product, null, 2)}
      </div>
    </>
  );
}

export default Product;
